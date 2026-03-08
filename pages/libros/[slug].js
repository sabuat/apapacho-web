import { useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

// MAGIA: Busca el libro en Supabase basándose en el "slug" de la URL
export async function getServerSideProps(context) {
  const { slug } = context.params;

  const { data: book, error } = await supabase
    .from('books')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!book || error) {
    return { notFound: true }; // Muestra página 404 si el libro no existe
  }

  // Leemos los datos comerciales directamente de tu base de datos
  const libro = {
    slug: book.slug,
    titulo: book.title,
    autor: book.author,
    img: book.cover_url || '/images/portadas/Perdido.jpg',
    tag: book.genre || 'Literatura',
    sinopsis: book.description ? book.description.split('\n') : ['Sin sinopsis'],
    paginas: book.paginas || "---",
    asin: book.asin || "---",
    linkAmazon: book.link_amazon || "#",
    estado: book.published ? "disponible" : "proximamente"
  };

  return { props: { libro } };
}

export default function FichaLibro({ libro }) {
  const [showModal, setShowModal] = useState(false);
  const estaDisponible = libro.estado === 'disponible';

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        
        <div className="pt-12 px-6 md:px-24">
            <Link href="/libros" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition">
                &larr; Volver al Catálogo
            </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-24 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            
            <div className="bg-brand-bg p-12 flex items-center justify-center">
                <img 
                    src={libro.img} 
                    alt={libro.titulo} 
                    className="w-80 h-auto shadow-2xl"
                />
            </div>

            <div className="flex flex-col justify-center h-full">
                <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">{libro.tag}</span>
                <h1 className="text-5xl md:text-6xl font-serif text-brand-dark mb-2 leading-none">{libro.titulo}</h1>
                <p className="text-xl font-texto text-gray-500 mb-8 italic">{libro.autor}</p>
                
                <div className="w-12 h-px bg-black mb-8"></div>

                <div className="font-texto text-gray-600 text-lg leading-relaxed mb-8">
                    {Array.isArray(libro.sinopsis) ? (
                        libro.sinopsis.map((parrafo, index) => <p key={index} className="mb-4">{parrafo}</p>)
                    ) : (
                        <p className="whitespace-pre-wrap">{libro.sinopsis}</p>
                    )}
                </div>

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

                {/* MODIFICACIÓN: Contenedor flexible para que los botones se adapten al teléfono o PC */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4">
                    {!estaDisponible ? (
                      <button 
                        onClick={() => setShowModal(true)}
                        className="bg-brand-dark-blue text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition shadow-lg w-full md:w-auto text-center"
                      >
                        Avísame cuando esté disponible
                      </button>
                    ) : (
                      <>
                        <a 
                            href={libro.linkAmazon} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition w-full md:w-auto text-center"
                        >
                            Comprar en Amazon
                        </a>
                        
                        {/* NUEVO BOTÓN: Leer en la app */}
                        <a 
                            href="#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-brand-dark-blue text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition shadow-md w-full md:w-auto text-center"
                        >
                            Leer en la app
                        </a>
                      </>
                    )}
                </div>
            </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setShowModal(false)}></div>
          <div className="bg-white relative z-10 w-full max-w-md p-8 md:p-12 shadow-2xl border-t-4 border-brand-gold">
             <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold">&times;</button>
             <div className="text-center mb-8">
               <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 block">Lista de Espera</span>
               <h3 className="text-3xl font-serif text-brand-dark mb-4">¡Sé el primero!</h3>
               <p className="font-texto text-gray-600 text-sm">
                 Déjanos tus datos y te enviaremos un correo exclusivo el día del lanzamiento de <strong>"{libro.titulo}"</strong>.
               </p>
             </div>

             <form name="lista-espera" method="POST" data-netlify="true" action="/exito?tipo=lista">
                <input type="hidden" name="form-name" value="lista-espera" />
                <input type="hidden" name="libro-interes" value={libro.titulo} />

                <div className="space-y-6">
                  <div>
                    <input type="text" name="nombre" placeholder="Tu Nombre" className="w-full border-b border-gray-300 py-3 text-sm font-texto focus:outline-none focus:border-brand-gold transition" required />
                  </div>
                  <div>
                    <input type="email" name="email" placeholder="Tu Email" className="w-full border-b border-gray-300 py-3 text-sm font-texto focus:outline-none focus:border-brand-gold transition" required />
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition mt-4">Unirme a la lista</button>
                </div>
             </form>
          </div>
        </div>
      )}

    </Layout>
  );
}