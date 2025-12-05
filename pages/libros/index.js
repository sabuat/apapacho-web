import Layout from '../../components/Layout';
import Link from 'next/link';
import { libros } from '../../data/libros';

export default function Libros() {
  return (
    <Layout>
      <div className="bg-brand-bg min-h-screen flex flex-col">
        
        {/* Cabecera */}
        <div className="pt-12 pb-12 px-6 md:px-12 text-center border-b border-gray-200">
          <h1 className="text-5xl md:text-7xl font-serif text-brand-gold mb-4">Catálogo</h1>
          <p className="text-xl font-texto text-gray-600 italic">Nuestras historias publicadas</p>
        </div>

        {/* Grid de Libros (Tu código original) */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-b border-gray-200 flex-grow">
          {libros.map((libro, index) => (
            <div key={index} className="group relative min-h-[500px] hover:bg-white transition duration-500">
              <div className="p-12 flex flex-col h-full justify-between">
                
                {/* Tag Superior */}
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">{libro.tag}</span>
                
                {/* Imagen Centrada */}
                <div className="flex-grow flex items-center justify-center py-8">
                   <img 
                     src={libro.img} 
                     alt={libro.titulo}
                     className="w-48 h-auto shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition duration-500"
                   />
                </div>

                {/* Info Inferior */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-serif italic text-brand-gold mb-2 group-hover:text-brand-gold transition">{libro.titulo}</h3>
                  <p className="text-sm font-texto uppercase tracking-widest text-gray-500">{libro.autor}</p>
                  <Link href={`/libros/${libro.slug}`} className="mt-6 inline-block border-b border-black text-xs uppercase font-bold pb-1 hover:text-brand-gold hover:border-brand-gold transition cursor-pointer">
                    Ver Detalles
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- NUEVA SECCIÓN DE NAVEGACIÓN (CTA) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Bloque Izquierdo: Autores */}
            <Link href="/autores" className="group bg-white p-16 md:p-24 flex flex-col justify-center items-start border-r border-gray-200 hover:bg-gray-50 transition duration-500">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4 group-hover:translate-x-1 transition">Talento</span>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
                    Descubre a <br/>
                    <span className="italic text-gray-400 group-hover:text-brand-dark transition">nuestras plumas.</span>
                </h2>
                <span className="border-b border-gray-300 pb-1 text-xs font-bold uppercase tracking-widest group-hover:border-black transition">
                    Ver Autores &rarr;
                </span>
            </Link>

            {/* Bloque Derecho: Lectura Gratis */}
            <Link href="/gratis" className="group bg-brand-dark-blue p-16 md:p-24 flex flex-col justify-center items-start text-white hover:bg-[#1a2f2f] transition duration-500">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4 group-hover:translate-x-1 transition">Comunidad</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                    Lee contenido <br/>
                    <span className="italic text-gray-400 group-hover:text-white transition">exclusivo gratis.</span>
                </h2>
                <span className="bg-white text-brand-dark-blue px-8 py-3 text-xs font-bold uppercase tracking-widest group-hover:bg-brand-gold group-hover:text-white transition">
                    Ir a la Biblioteca
                </span>
            </Link>

        </div>

      </div>
    </Layout>
  );
}