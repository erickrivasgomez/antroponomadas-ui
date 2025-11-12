import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaDownload, FaExpand, FaCompress } from 'react-icons/fa';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../Modal.css';
import './Flipbook.css';

// Set the PDF.js version - should match your react-pdf version
const PDFJS_VERSION = '3.11.174';

// Initialize PDF.js worker
const initializePdfWorker = () => {
  if (typeof window === 'undefined') return null;
  
  // Clean up existing worker if it exists
  if (window.pdfjsWorker) {
    window.pdfjsWorker.terminate();
  }
  
  try {
    const workerBlob = new Blob(
      [`importScripts('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js');`],
      { type: 'application/javascript' }
    );
    
    const workerUrl = URL.createObjectURL(workerBlob);
    const worker = new Worker(workerUrl);
    
    // Store the worker URL so we can revoke it later
    worker._workerUrl = workerUrl;
    
    return worker;
  } catch (error) {
    console.error('Failed to initialize PDF worker:', error);
    return null;
  }
};

function Flipbook() {
  const documentOptions = useMemo(() => ({
    cMapUrl: `https://unpkg.com/pdfjs-dist@${PDFJS_VERSION}/cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${PDFJS_VERSION}/standard_fonts/`
  }), []);

  const [numPages, setNumPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? `calc(100vh)` : '800px'
  });

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Navigation and actions
  const navigate = useNavigate();

  const handleGoHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleDownload = useCallback(() => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/ANTROPONOMADAS 1 ED.pdf';
    link.download = 'ANTROPONOMADAS-1-ED.pdf'; // Suggest a filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => {
          console.error('Error attempting to exit fullscreen:', err);
        });
      }
    }
  }, []);

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: `calc(100vh)`
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate page size based on container dimensions
  const pageSize = useMemo(() => {
    // Use more of the available space
    const padding = 20; // Reduced padding for more space
    const containerHeight = dimensions.height - (padding * 2);
    const containerWidth = dimensions.width - (padding * 2);
    
    // A4 aspect ratio (height/width)
    const ratio = Math.sqrt(2); // More precise A4 ratio (1.4142...)
    
    // Start with 95% of container width (increased from 90%)
    let width = containerWidth * .97;
    let height = width * ratio;
    
    // If height exceeds container, scale down to fit
    if (height > containerHeight) {
      height = containerHeight * .97; // Use 95% of container height
      width = height / ratio;
    }
    
    // Ensure minimum size
    const minWidth = 300;
    const minHeight = minWidth * ratio;
    
    return { 
      width: Math.max(Math.floor(width), minWidth), 
      height: Math.max(Math.floor(height), Math.floor(minHeight))
    };
  }, [dimensions]);
  
  // Initialize PDF.js worker on component mount
  useEffect(() => {
    const worker = initializePdfWorker();
    if (worker) {
      pdfjs.GlobalWorkerOptions.workerPort = worker;
    }

    // Set the PDF URL with correct path from public folder
    setPdfUrl('/ANTROPONOMADAS 1 ED.pdf');

    // Set a fixed 18-second timer for the loading state
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 18000);

    // Clean up worker and timer on unmount
    return () => {
      clearTimeout(loadingTimer);
      if (worker) {
        worker.terminate();
        if (worker._workerUrl) {
          URL.revokeObjectURL(worker._workerUrl);
        }
      }
    };
  }, []);

  // Handle document load success
  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setError(null);
    // Don't hide loader here, we'll use the timer
  }, []);

  // Handle document load error
  const onDocumentLoadError = useCallback((error) => {
    console.error('Error loading PDF:', error);
    setError('Error al cargar el PDF. Por favor, inténtalo de nuevo.');
    // Don't hide loader here, we'll use the timer
  }, []);

  function renderPages() {
    if (!numPages) return null;

    return Array.from({ length: numPages }, (_, i) => i + 1).map((pageNumber) => (
      <div
        key={`page-${pageNumber}`}
        className="page"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 0,
          margin: 0,
          overflow: 'hidden',
          width: '100%',
          height: '100%'
        }}
      >
        <Page
          key={`page-${pageNumber}`}
          pageNumber={pageNumber}
          width={pageSize.width}
          loading={<div>Loading page {pageNumber}...</div>}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="pdf-page"
        />
      </div>
    ));
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Main content - always rendered but hidden when loading */}
      <div style={{ 
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out',
        height: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        {error ? (
          <div className="error-message">
            <p>Error al cargar el PDF. Por favor, inténtalo de nuevo más tarde.</p>
            <button onClick={() => window.location.reload()} className="retry-button">
              Reintentar
            </button>
          </div>
        ) : (
          <div className="flipbook-container">
            {/* Floating Action Buttons */}
            <div className="floating-buttons">
              <button 
                className="floating-button" 
                onClick={handleGoHome}
                title="Volver a inicio"
                aria-label="Volver a inicio"
              >
                <FaHome />
              </button>
              <button 
                className="floating-button" 
                onClick={handleDownload}
                title="Descargar PDF"
                aria-label="Descargar PDF"
              >
                <FaDownload />
              </button>
              <button 
                className="floating-button" 
                onClick={toggleFullscreen}
                title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
                aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
            </div>

            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="loading-state">
                  <div className="loading-spinner"></div>
                  <p>Cargando revista...</p>
                </div>
              }
              options={documentOptions}
            >
              <HTMLFlipBook
                width={pageSize.width}
                height={pageSize.height}
                minWidth={pageSize.width * 0.5}
                maxWidth={pageSize.width * 1.2}
                minHeight={pageSize.height * 0.1}
                maxHeight={pageSize.height * 1.2}
                size="stretch"
                autoSize={false}
                drawShadow={true}
                flippingTime={800}
                usePortrait={false}
                showCover={true}
                startPage={0}
                useMouseEvents={true}
                swipeDistance={20}
                showPageCorners={true}
                disableFlipByClick={false}
                className="flipbook"
                style={{
                  margin: '0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                {renderPages()}
              </HTMLFlipBook>
            </Document>
          </div>
        )}
      </div>
      
      {/* Loader overlay - shown while loading */}
      {isLoading && (
        <div className="loader-container" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div className="modern-loader">
            <div className="loader-circle"></div>
            <div className="loader-circle"></div>
            <div className="loader-circle"></div>
            <div className="loader-circle"></div>
            <div className="loader-text">Cargando revista...</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Flipbook;