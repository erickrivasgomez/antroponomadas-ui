import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './styles/antroponomadas.css';
import HomePage from './pages/HomePage';
import EditionViewer from './pages/EdicionPage';

// Main App Component
const AppContent = () => {
  useEffect(() => {
    // Add anthroponomas class to body for global styles
    document.body.classList.add('antroponomas-body');
    
    return () => {
      document.body.classList.remove('antroponomas-body');
    };
  }, []);

  return (
    <div className="antroponomas-app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ediciones/:editionId" element={<EditionViewer />} />
      </Routes>
    </div>
  );
};

function AppContent() {
  const location = useLocation();
  const { user } = useAuth();
  
  // Añadir o quitar la clase flipbook-mode según la ruta
  useEffect(() => {
    const appElement = document.querySelector('.app');
    const html = document.documentElement;
    const body = document.body;
    
    if (location.pathname.startsWith('/ediciones/')) {
      // Modo flipbook - sin scroll
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
      appElement.classList.add('flipbook-mode');
    } else {
      // Modo normal - con scroll
      html.style.overflow = 'auto';
      body.style.overflow = 'auto';
      appElement.classList.remove('flipbook-mode');
      
      // Asegurarse de que el scroll esté en la parte superior al cambiar de ruta
      window.scrollTo(0, 0);
    }
    
    // Limpiar al desmontar
    return () => {
      html.style.overflow = 'auto';
      body.style.overflow = 'auto';
      appElement.classList.remove('flipbook-mode');
    };
  }, [location.pathname]);

  return (
    <div className="app">
      <Header />
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl font-bold text-indigo-600">
                  Antropónomadas
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/crear"
                    className="px-3 py-2 text-sm font-medium text-indigo-700 hover:text-indigo-900"
                  >
                    Nueva Edición
                  </Link>
                  <LogoutButton />
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-3 py-2 text-sm font-medium text-indigo-700 hover:text-indigo-900"
                >
                  Iniciar Sesión
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={
            user ? <Navigate to="/" replace /> : <LoginForm />
          } />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/ediciones/:id" element={<EdicionPage />} />
          <Route 
            path="/crear" 
            element={
              <ProtectedRoute>
                <CrearEdicion />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
