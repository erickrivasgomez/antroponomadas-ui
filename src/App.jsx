import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './App.css';
import './styles/antroponomadas.css';
import EdicionPage from './pages/EdicionPage';
import HomePage from './pages/HomePage';
import CrearEdicion from './pages/CrearEdicion';
import LoginForm from './components/LoginForm';
import AuthCallback from './pages/AuthCallback';
import Header from './components/Header';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function AppContent() {
  const location = useLocation();
  const { user } = useAuth();
  const isEditionPage = location.pathname.startsWith('/ediciones/');
  
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    
    // Add antroponomas class to body for global styles
    document.body.classList.add('antroponomas-body');
    
    if (isEditionPage) {
      // Flipbook mode - no scroll
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      // Normal mode - with scroll
      html.style.overflow = 'auto';
      body.style.overflow = 'auto';
    }
    
    return () => {
      // Cleanup
      html.style.overflow = 'auto';
      body.style.overflow = 'auto';
      document.body.classList.remove('antroponomas-body');
    };
  }, [isEditionPage]);
  
  return (
    <div className="antroponomas-app">
      {!isEditionPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ediciones/:editionId" element={<EdicionPage />} />
        
        <Route 
          path="/crear-edicion" 
          element={
            <ProtectedRoute>
              <CrearEdicion />
            </ProtectedRoute>
          } 
        />
        
        <Route path="/login" element={<LoginForm />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
