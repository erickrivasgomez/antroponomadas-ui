import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get the PDF URL from the Flipbook component
  useEffect(() => {
    const handlePdfUrl = (event) => {
      if (event.detail && event.detail.type === 'PDF_URL_UPDATE') {
        setPdfUrl(event.detail.url);
      }
    };

    window.addEventListener('pdfUrlUpdate', handlePdfUrl);
    return () => {
      window.removeEventListener('pdfUrlUpdate', handlePdfUrl);
    };
  }, []);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleDownloadClick = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'documento.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div>
      <div className={`header-buttons ${isMenuOpen ? 'mobile-visible' : ''}`}>
        {location.pathname !== '/' && (
          <button
            className="header-button"
            onClick={handleHomeClick}
            aria-label="Go to home"
          >
            <i className="fas fa-home"></i>
            <span>Inicio</span>
          </button>
        )}
        {location.pathname.startsWith('/ediciones/') && (
          <>
            <button
              className="header-button"
              onClick={handleDownloadClick}
              aria-label="Download PDF"
              disabled={!pdfUrl}
            >
              <i className="fas fa-download"></i>
              <span>Descargar</span>
            </button>
            <button
              className="header-button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              <i className={isFullscreen ? 'fas fa-compress' : 'fas fa-expand'}></i>
              <span>{isFullscreen ? 'Salir pantalla completa' : 'Pantalla completa'}</span>
            </button>
          </>
        )}
      </div>

      <button
        className="mobile-menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
    </div>
  );
}

export default Header;