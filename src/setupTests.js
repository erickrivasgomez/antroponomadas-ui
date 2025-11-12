// Configuración de pruebas de Jest
import '@testing-library/jest-dom';

// Configuración de polyfills necesarios
if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: () => 'blob:test' });
}
