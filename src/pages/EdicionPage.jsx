import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Flipbook from '../components/Flipbook';
import ErrorBoundary from '../components/ErrorBoundary';
import '../App.css';

export default function EdicionPage() {
  const { id } = useParams();
  const [dimensions, setDimensions] = useState({
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    width: typeof window !== 'undefined' ? window.innerWidth : 1024
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    // Asegurarse de que el body no tenga scroll
    document.body.style.overflow = 'hidden';
    
    window.addEventListener('resize', handleResize);
    
    // Limpiar al desmontar
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Aquí podrías usar el ID para cargar una edición específica
  console.log('Cargando edición ID:', id);

  return (
    <div className="edition-container" style={{ 
      height: `calc(100vh)`,
      width: '100%',
      position: 'relative'
    }}>
      <ErrorBoundary>
        <Flipbook key={`${dimensions.width}x${dimensions.height}`} />
      </ErrorBoundary>
    </div>
  );
}