import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { initParticles, animate } from '../utils/particles';
import '../styles/antroponomadas.css';

// Icons
const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const HomePage = () => {
  useEffect(() => {
    // Initialize particles
    initParticles();
    animate();
    
    // Add body class for global styles
    document.body.classList.add('antroponomas-body');
    
    return () => {
      // Cleanup
      document.body.classList.remove('antroponomas-body');
    };
  }, []);
  
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Width of card + gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Width of card + gap
        behavior: 'smooth'
      });
    }
  };

  // Sample editions data - only Edición Inaugural is enabled
  const editions = [
    { 
      id: '1', 
      title: 'Edición Inaugural', 
      description: 'La primera edición de nuestra revista digital con artículos exclusivos y contenido inédito.',
      date: 'Noviembre 2023',
      pages: 24,
      isNew: true,
      enabled: true
    },
    { 
      id: '2', 
      title: 'Edición Especial', 
      description: 'Próximamente - Disponible en Diciembre 2023',
      date: 'Diciembre 2023',
      pages: 0,
      isNew: false,
      enabled: false
    },
    { 
      id: '3', 
      title: 'Tendencias Actuales', 
      description: 'Próximamente - Disponible en Enero 2024',
      date: 'Enero 2024',
      pages: 0,
      isNew: false,
      enabled: false
    },
    { 
      id: '4', 
      title: 'Culturas Antiguas', 
      description: 'Próximamente - Disponible en Febrero 2024',
      date: 'Febrero 2024',
      pages: 0,
      isNew: false,
      enabled: false
    },
    { 
      id: '5', 
      title: 'Futuro de la Humanidad', 
      description: 'Próximamente - Disponible en Marzo 2024',
      date: 'Marzo 2024',
      pages: 0,
      isNew: false,
      enabled: false
    }
  ];

  return (
    <div className="antroponomas-home">
      {/* Particle Canvas - will be rendered by Three.js */}
      <canvas id="particles-canvas"></canvas>
      
      <div className="container">
        <header className="header">
          <div className="logo">
            <h1 className="logo-text">Antroponómadas</h1>
            <p className="logo-subtitle">Revista Digital</p>
          </div>
        </header>
        
        <main className="main-content">
          <section className="hero">
            <h2 className="hero-title">Explora el mundo a través de los sentipensares de la antropología</h2>
            <p className="hero-subtitle">Nuevas perspectivas, historias únicas, culturas fascinantes</p>
          </section>
          
          <section className="editions-container">
            <button 
              onClick={scrollLeft} 
              className="scroll-button left"
              aria-label="Desplazar a la izquierda"
            >
              <ArrowLeft />
            </button>
            
            <div className="editions-scroll" ref={scrollRef}>
              {editions.map((edition) => (
                <Link 
                  to={edition.enabled ? `/ediciones/${edition.id}` : '#'} 
                  key={edition.id} 
                  className={`edition-card glass ${!edition.enabled ? 'coming-soon' : ''}`}
                  onClick={!edition.enabled ? (e) => e.preventDefault() : undefined}
                >
                  {edition.isNew && <div className="edition-badge">Nueva Edición</div>}
                  <div className="edition-content">
                    <h3 className="edition-title">{edition.title}</h3>
                    <p className="edition-description">{edition.description}</p>
                    <div className="edition-meta">
                      <span className="edition-date">{edition.date}</span>
                      {edition.pages > 0 && <span className="edition-pages">• {edition.pages} páginas</span>}
                    </div>
                  </div>
                  {edition.enabled && <div className="edition-hover"><span>Leer ahora →</span></div>}
                </Link>
              ))}
            </div>
            
            <button 
              onClick={scrollRight} 
              className="scroll-button right"
              aria-label="Desplazar a la derecha"
            >
              <ArrowRight />
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
