import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { initParticles, animate } from '../utils/particles';
import '../styles/antroponomadas.css';

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={position}
        fontSize={size}
        color={color}
        maxWidth={10}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        {children}
      </Text>
    </Float>
  );
};

// Simple Particle Background
const Particles = () => {
  const particlesRef = useRef();
  const particlesGeometry = React.useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    
    for (let i = 0; i < 10000; i++) {
      vertices.push(
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000
      );
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geometry;
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
      // Subtle pulsing effect
      const particles = particlesRef.current;
      particles.material.opacity = 0.7 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <points ref={particlesRef}>
      <primitive object={particlesGeometry} attach="geometry" />
      <pointsMaterial 
        color="#8A9B6E"  // Sage green
        size={3}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// 3D Scene
const Scene = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
      <ambientLight intensity={0.3} color="#a3b18a" />
      <pointLight position={[10, 10, 10]} intensity={1} distance={100} color="#a3b18a" />
      <FloatingText position={[0, 2, 0]} size={1.5} color="#f5f5f5">
        ANTROPONÓMADAS
      </FloatingText>
      <Particles count={3000} />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.3} 
        enablePan={false}
      />
    </Canvas>
  );
};

// Animated Card Component
const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div 
    className="feature-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
  >
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

// Main Component
const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '📚',
      title: 'Narrativas Inmersivas',
      description: 'Historias que trascienden las páginas con experiencias interactivas y multimedia.'
    },
    {
      icon: '🎨',
      title: 'Diseño Vanguardista',
      description: 'Una estética que combina lo clásico con lo contemporáneo para crear impacto visual.'
    },
    {
      icon: '🌍',
      title: 'Conexión Global',
      description: 'Exploramos culturas e ideas desde una perspectiva única y enriquecedora.'
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="canvas-container">
          <Scene />
        </div>
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Donde las historias cobran <span className="highlight">vida</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Una experiencia editorial que desafía los límites entre el arte, la antropología y la narrativa digital.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-cta"
          >
            <Link to="/ediciones" className="cta-button primary">
              Explorar Ediciones
            </Link>
            <button className="cta-button secondary">
              Ver más
            </button>
          </motion.div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" ref={featuresRef}>
        <motion.div 
          className="features-grid"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cta-content"
        >
          <h2>¿Listo para la experiencia?</h2>
          <p>Descubre nuestra colección de revistas digitales y sumérgete en historias que inspiran.</p>
          <Link to="/ediciones" className="cta-button primary">
            Ver todas las ediciones
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;