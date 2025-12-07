import Layout from '../components/Layout';
import Link from 'next/link';
import { lecturas } from '../data/lecturas'; // <--- Importamos la data

export default function Gratis() {
  return (
    <Layout>
      <div className="bg-brand-bg min-h-screen">
        
        {/* HEADER (Igual que antes) */}
        <section className=" px-6 md:px-12 text-center border-b border-gray-200">
        <div className="pt-12 pb-12 px-6 md:px-12 text-center border-b border-gray-200">
          <h1 className="text-5xl md:text-7xl font-serif text-brand-red mb-4">Lectura Libre</h1>
          <p className="text-xl font-texto text-gray-600 italic">Descargas gratuitas y lecturas breves para disfrutar ahora mismo.</p>
        </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* COLUMNA 1: DESCARGAS (Estatica o podrias hacer otro archivo de data para esto) */}
          <div>
             <h2 className="text-3xl font-serif italic text-brand-dark-blue mb-8 flex items-center gap-4">
               <span className="text-4xl">
                    <img src="/images/logos/download.png" alt="Baixar Livro" className="inline h-12 w-12 mr-2 object-contain"/>
                </span> Descargas (ePub)
             </h2>
             {/* ... Aquí dejas tus cards de descarga manuales o las automatizas también ... */}
             <div className="bg-white p-8 border border-gray-200 flex gap-6 hover:shadow-xl transition duration-300">
                <img src="/images/portadas/arena.jpg" alt="Leituras" className="inline h-72 w-72 mr-2 object-contain"/>
                <div>
                   <h3 className="text-2xl font-serif italic mt-1 mb-2">Arena de Tierras Extrañas</h3>
                   <p className="font-texto text-gray-600 font-light mb-6 leading-relaxed">
                     Una colección de cuentos cortos que exploran la identidad, el exilio, la memoria y la búsqueda de pertenencia a través de la voz de alguién que lo dejó todo atrás.
                   </p>
                   <a href="/epubs/ate-es.epub" className="text-xs font-bold uppercase border-b border-black pb-1 hover:text-brand-gold">Descargar</a>
                </div>
             </div>
          </div>

          {/* COLUMNA 2: LEER AHORA (Dinámica) */}
          <div>
             <h2 className="text-3xl font-serif italic text-brand-dark-blue mb-8 flex items-center gap-4">
               <span className="text-4xl">
                   <img src="/images/logos/book.png" alt="Leituras" className="inline h-12 w-12 mr-2 object-contain"/>
               </span> Leer Ahora
             </h2>

             <div className="grid grid-cols-1 gap-6">
                
                {/* Mapeamos la lista desde el archivo de datos */}
                {lecturas.map((texto, index) => (
                  <Link key={index} href={`/lectura/${texto.slug}`} className="group block bg-white border border-gray-200 p-8 hover:border-brand-gold transition duration-300">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-brand-gold">
                       {texto.tipo} &bull; {texto.tiempo}
                     </span>
                     <h3 className="text-3xl font-serif text-brand-dark mt-2 mb-4 group-hover:text-brand-gold transition">
                       {texto.titulo}
                     </h3>
                     <p className="font-texto text-gray-600 font-light mb-6 line-clamp-2">
                       {texto.sinopsis}
                     </p>
                     <span className="text-xs font-bold uppercase tracking-widest underline decoration-gray-300 group-hover:text-brand-gold group-hover:decoration-brand-gold">
                       Leer historia completa
                     </span>
                  </Link>
                ))}

             </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}