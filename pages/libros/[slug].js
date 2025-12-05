import { useState } from 'react'; // <--- Necesario para el Popup
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { libros } from '../../data/libros'; 

export default function FichaLibro() {
  const router = useRouter();
  const { slug } = router.query; 
  
  // Estado para controlar el Popup (Modal)
  const [showModal, setShowModal] = useState(false);

  const libro = libros.find((item) => item.slug === slug);

  // Si la página está cargando o el libro no existe
  if (!libro) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p>Cargando libro...</p>
        </div>
      </Layout>
    );
  }

  // Lógica para saber si está disponible o no (para activar el popup)
  const estaDisponible = libro.estado === 'disponible';

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        
        {/* Botón Volver */}
        <div className="pt-12 px-6 md:px-24">
            <Link href="/libros" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition">
                &larr; Volver al Catálogo
            </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-24 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            
            {/* Columna Izquierda: Portada */}
            <div className="bg-brand-bg p-12 flex items-center justify-center">
                <img 
                    src={libro.img} 
                    alt={libro.titulo} 
                    className="w-80 h-auto shadow-2xl"
                />
            </div>

            {/* Columna Derecha: Información */}
            <div className="flex flex-col justify-center h-full">
                <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">{libro.tag}</span>
                <h1 className="text-5xl md:text-6xl font-serif text-brand-dark mb-2 leading-none">{libro.titulo}</h1>
                <p className="text-xl font-texto text-gray-500 mb-8 italic">{libro.autor}</p>
                
                {/* Separador */}
                <div className="w-12 h-px bg-black mb-8"></div>

                {/* Sinopsis: Soporta texto simple o Arrays de párrafos */}
                <div className="font-texto text-gray-600 text-lg leading-relaxed mb-8">
                    {Array.isArray(libro.sinopsis) ? (
                        libro.sinopsis.map((parrafo, index) => <p key={index} className="mb-4">{parrafo}</p>)
                    ) : (
                        <p className="whitespace-pre-wrap">{libro.sinopsis}</p>
                    )}
                </div>

                {/* Ficha Técnica Rápida (Solo si NO es 'Próximamente') */}
                {estaDisponible && (
                  <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-widest text-gray-500 mb-12 border-y border-gray-100 py-6">
                      <div className="font-texto text-gray-700 text-sm leading-relaxed">
                          <span className="block font-bold text-black uppercase text-xs tracking-widest mb-1">Páginas</span>
                          {libro.paginas}
                      </div>
                      <div className="font-texto text-gray-700 text-sm leading-relaxed">
                          <span className="block font-bold text-black uppercase text-xs tracking-widest mb-1">ASIN</span>
                          {libro.asin}
                      </div>
                  </div>
                )}

                {/* BOTONES DE ACCIÓN */}
                <div className="flex items-center gap-8 mt-4">
                    {/* Eliminé el precio porque no está en tu archivo libros.js */}
                    
                    {!estaDisponible ? (
                      // BOTÓN AVISARME (Abre el Popup)
                      <button 
                        onClick={() => setShowModal(true)}
                        className="bg-brand-dark-blue text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition shadow-lg w-full md:w-auto"
                      >
                        Avísame cuando esté disponible
                      </button>
                    ) : (
                      // BOTÓN AMAZON (Solo si está disponible)
                      <a 
                          href={libro.linkAmazon} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition"
                      >
                          Comprar en Amazon
                      </a>
                    )}
                </div>
            </div>
        </div>
      </div>

      {/* --- EL POPUP (MODAL) PARA CAPTAR CORREOS --- */}
      {showModal && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center p-4">
          
          {/* Fondo Oscuro (Click para cerrar) */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Caja Blanca del Popup */}
          <div className="bg-white relative z-10 w-full max-w-md p-8 md:p-12 shadow-2xl border-t-4 border-brand-gold">
             
             {/* Botón Cerrar (X) */}
             <button 
               onClick={() => setShowModal(false)}
               className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold"
             >
               &times;
             </button>

             <div className="text-center mb-8">
               <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 block">Lista de Espera</span>
               <h3 className="text-3xl font-serif text-brand-dark mb-4">¡Sé el primero!</h3>
               <p className="font-texto text-gray-600 text-sm">
                 Déjanos tus datos y te enviaremos un correo exclusivo el día del lanzamiento de <strong>"{libro.titulo}"</strong>.
               </p>
             </div>

             {/* Formulario conectado a Netlify */}
             <form 
               name="lista-espera" 
               method="POST" 
               data-netlify="true" 
               action="/exito?tipo=lista"
             >
                <input type="hidden" name="form-name" value="lista-espera" />
                
                {/* Campo Oculto: Para saber qué libro les interesó */}
                <input type="hidden" name="libro-interes" value={libro.titulo} />

                <div className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      name="nombre" 
                      placeholder="Tu Nombre" 
                      className="w-full border-b border-gray-300 py-3 text-sm font-texto focus:outline-none focus:border-brand-gold transition"
                      required 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Tu Email" 
                      className="w-full border-b border-gray-300 py-3 text-sm font-texto focus:outline-none focus:border-brand-gold transition"
                      required 
                    />
                  </div>
                  
                  <button type="submit" className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition mt-4">
                    Unirme a la lista
                  </button>
                </div>
             </form>
          </div>
        </div>
      )}

    </Layout>
  );
}