import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function CrearEdicion() {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    fecha_publicacion: '',
    portada: null,
    archivo: null
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      // 1. Upload cover image
      let portadaUrl = '';
      if (formData.portada) {
        const fileExt = formData.portada.name.split('.').pop();
        const fileName = `portadas/${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('covers')
          .upload(fileName, formData.portada);
        
        if (uploadError) throw uploadError;
        portadaUrl = fileName;
      }

      // 2. Upload PDF file
      let archivoUrl = '';
      if (formData.archivo) {
        const fileExt = formData.archivo.name.split('.').pop();
        const fileName = `ediciones/${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('editions')
          .upload(fileName, formData.archivo);
        
        if (uploadError) throw uploadError;
        archivoUrl = fileName;
      }

      // 3. Create database record
      const { data, error } = await supabase
        .from('editions')
        .insert([{
          titulo: formData.titulo,
          descripcion: formData.descripcion,
          fecha_publicacion: formData.fecha_publicacion,
          portada_url: portadaUrl,
          archivo_url: archivoUrl,
          estado: 'publicado'
        }])
        .select()
        .single();

      if (error) throw error;

      setMessage({ 
        text: '¡Edición creada exitosamente!', 
        type: 'success' 
      });
      
      // Redirect to the new edition after 2 seconds
      setTimeout(() => {
        navigate(`/ediciones/${data.id}`);
      }, 2000);

    } catch (error) {
      console.error('Error al crear la edición:', error);
      setMessage({ 
        text: error.message || 'Error al crear la edición', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Crear Nueva Edición</h1>
        </div>
        
        {message.text && (
          <div className={`p-4 mx-4 mt-4 rounded-md ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            <div className="flex">
              <div className="flex-shrink-0">
                {message.type === 'success' ? (
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{message.text}</p>
              </div>
            </div>
          </div>
        )}

      <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
        <div className="px-4 py-6 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
                Título *
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Título de la edición"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                Descripción
              </label>
              <div className="mt-1">
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={formData.descripcion}
                  onChange={handleChange}
                  placeholder="Descripción de la edición"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Escribe una breve descripción de esta edición.
              </p>
            </div>

            <div className="sm:col-span-6 md:col-span-3">
              <label htmlFor="fecha_publicacion" className="block text-sm font-medium text-gray-700">
                Fecha de Publicación *
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="fecha_publicacion"
                  id="fecha_publicacion"
                  value={formData.fecha_publicacion}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mt-4 flex text-sm text-gray-600">
                  <label
                    htmlFor="portada"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Subir una imagen de portada</span>
                    <input
                      id="portada"
                      name="portada"
                      type="file"
                      accept="image/*"
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">o arrastra y suelta</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  PNG, JPG, WEBP hasta 5MB
                </p>
                {formData.portada && (
                  <p className="mt-2 text-sm text-gray-500">
                    Archivo seleccionado: {formData.portada.name}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div className="mt-4 flex text-sm text-gray-600">
                  <label
                    htmlFor="archivo"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Subir archivo PDF</span>
                    <input
                      id="archivo"
                      name="archivo"
                      type="file"
                      accept=".pdf"
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">o arrastra y suelta</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  PDF hasta 50MB
                </p>
                {formData.archivo && (
                  <p className="mt-2 text-sm text-gray-500">
                    Archivo seleccionado: {formData.archivo.name}
                  </p>
                )}
              </div>
            </div>
        </div>
      </div>
      
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Guardando...
              </>
            ) : 'Guardar Edición'}
          </button>
        </div>
      </div>
        </form>
      </div>
    </div>
  );
}
