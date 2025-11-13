import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaDownload, FaExpand, FaCompress } from 'react-icons/fa';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../Modal.css';
import './Flipbook.css';

// Mobile Flipbook Component
const MobileFlipbook = ({ numPages, pageSize, pdfUrl }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const documentRef = useRef(null);

  // Handle orientation change
  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  // Handle document load success
  const onDocumentLoadSuccess = useCallback(() => {
    // Loading is handled by onLoadProgress
  }, []);

  // Handle document load progress
  const onLoadProgress = useCallback(({ loaded, total }) => {
    const progress = Math.round((loaded / total) * 100);
    setLoadingProgress(progress);

    // Only set loading to false when we've fully loaded
    if (progress === 100) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle document load error
  const onDocumentLoadError = useCallback((error) => {
    console.error('Error loading PDF:', error);
    setIsLoading(false);
  }, []);

  // Reset loading state when PDF URL changes
  useEffect(() => {
    setIsLoading(true);
    setLoadingProgress(0);
  }, [pdfUrl]);

  // Handle touch events for page navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && currentPage < numPages) {
        // Swipe left - go to next page(s)
        setCurrentPage(prev => Math.min(prev + (isLandscape ? 2 : 1), numPages));
      } else if (diff < 0 && currentPage > 1) {
        // Swipe right - go to previous page(s)
        setCurrentPage(prev => Math.max(prev - (isLandscape ? 2 : 1), 1));
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Loading component - only renders when isLoading is true
  const renderLoader = useCallback(() => {
    if (!isLoading) return null;

    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        zIndex: 10,
        transition: 'opacity 0.3s ease',
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? 'auto' : 'none'
      }}>
        <div style={{
          width: '60%',
          maxWidth: '300px',
          height: '4px',
          backgroundColor: '#f0f0f0',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '16px'
        }}>
          <div style={{
            width: `${loadingProgress}%`,
            height: '100%',
            backgroundColor: '#3f51b5',
            transition: 'width 0.2s ease-out'
          }} />
        </div>
        <div style={{ 
          color: '#666', 
          fontSize: '14px',
          transition: 'opacity 0.2s ease',
          opacity: loadingProgress > 0 ? 1 : 0
        }}>
          Cargando {loadingProgress}%
        </div>
      </div>
    );
  }, [isLoading, loadingProgress]);

  // Page component with loading state
  const renderPage = useCallback((pageNumber, isSecondPage = false) => {
    const pageStyle = {
      position: 'relative',
      width: isLandscape ? '50%' : '100%',
      height: '100%',
      display: 'inline-block',
      verticalAlign: 'top',
      overflow: 'hidden'
    };

    return (
      <div style={pageStyle}>
        {renderLoader()}
        <Document
          inputRef={documentRef}
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadProgress={onLoadProgress}
          onLoadError={onDocumentLoadError}
          loading=""
        >
          <Page
            key={`page-${pageNumber}${isSecondPage ? '-2' : ''}`}
            pageNumber={pageNumber}
            width={isLandscape ? (window.innerWidth / 2) - 30 : window.innerWidth - 40}
            loading=""
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="pdf-page"
          />
        </Document>
      </div>
    );
  }, [pdfUrl, isLandscape, renderLoader, onDocumentLoadSuccess, onLoadProgress, onDocumentLoadError]);

  // Render two-page spread in landscape mode
  const renderPageSpread = useCallback((pageNumber) => {
    const isLastPage = pageNumber >= numPages;

    return (
      <div style={{ 
        display: 'flex', 
        width: '100%', 
        height: '100%',
        position: 'relative'
      }}>
        {renderPage(pageNumber, false)}
        {!isLastPage && renderPage(pageNumber + 1, true)}
      </div>
    );
  }, [numPages, renderPage]);

  return (
    <div 
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        touchAction: 'pan-y',
        WebkitOverflowScrolling: 'touch'
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {isLandscape ? renderPageSpread(currentPage) : renderPage(currentPage)}

        {/* Navigation Controls - Invisible touch areas */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-between',
          pointerEvents: 'none'
        }}>
          <div 
            style={{
              width: '40%',
              height: '100%',
              pointerEvents: 'auto',
              cursor: 'pointer'
            }}
            onClick={() => setCurrentPage(prev => Math.max(1, prev - (isLandscape ? 2 : 1)))}
            aria-label="Página anterior"
          />
          <div 
            style={{
              width: '40%',
              height: '100%',
              pointerEvents: 'auto',
              cursor: 'pointer'
            }}
            onClick={() => setCurrentPage(prev => Math.min(numPages, prev + (isLandscape ? 2 : 1)))}
            aria-label="Siguiente página"
          />
        </div>
      </div>
    </div>
  );
};

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

  // Check if device is mobile
  const isMobile = useMemo(() => {
    return window.innerWidth <= 768; // Common breakpoint for mobile devices
  }, []);

  // Calculate page size based on container dimensions
  const pageSize = useMemo(() => {
    // Use more of the available space
    const padding = isMobile ? 10 : 20; // Smaller padding on mobile
    const containerHeight = dimensions.height - (padding * 2);
    const containerWidth = dimensions.width - (padding * 2);
    
    // A4 aspect ratio (height/width)
    const ratio = Math.sqrt(2); // More precise A4 ratio (1.4142...)
    
    // On mobile, use full width minus padding
    let width = isMobile ? containerWidth * 0.98 : containerWidth * 0.97;
    let height = width * ratio;
    
    // If height exceeds container, scale down to fit
    if (height > containerHeight) {
      height = containerHeight * (isMobile ? 0.98 : 0.97);
      width = height / ratio;
    }
    
    // Ensure minimum size
    const minWidth = isMobile ? 250 : 300;
    const minHeight = minWidth * ratio;
    
    return { 
      width: Math.max(Math.floor(width), minWidth), 
      height: Math.max(Math.floor(height), Math.floor(minHeight)),
      isMobile
    };
  }, [dimensions, isMobile]);
  
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
    }, 3000);

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

  // State to track current page for mobile view
  const [currentPage, setCurrentPage] = useState(1);
  const [showZoomControls, setShowZoomControls] = useState(false);
  const transformComponentRef = useRef(null);
  const lastTap = useRef(0);

  // Handle double tap for zoom in/out
  const handleDoubleTap = (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap.current;
    
    if (tapLength < 300 && tapLength > 0) {
      // Double tap detected
      e.preventDefault();
      if (transformComponentRef.current) {
        const { state } = transformComponentRef.current;
        if (state.scale > 1) {
          transformComponentRef.current.resetTransform();
        } else {
          transformComponentRef.current.zoomIn();
        }
      }
    }
    lastTap.current = currentTime;
  };

  // Toggle zoom controls visibility
  const toggleZoomControls = () => {
    setShowZoomControls(prev => !prev);
  };

  function renderPages() {
    if (!numPages) return null;

    const renderPage = (pageNumber) => (
      <div
        key={`page-${pageNumber}`}
        className="page"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 0,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
      >
        <Page
          pageNumber={pageNumber}
          width={pageSize.width}
          loading={<div>Cargando página {pageNumber}...</div>}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="pdf-page"
        />
      </div>
    );

    // On mobile, use the MobileFlipbook component
    if (pageSize.isMobile) {
      return <MobileFlipbook numPages={numPages} pageSize={pageSize} pdfUrl={pdfUrl} />;
    }

    // Original flipbook view for desktop
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