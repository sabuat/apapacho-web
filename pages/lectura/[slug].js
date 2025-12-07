import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { lecturas } from '../../data/lecturas'; // Importamos los textos

export default function PlantillaLectura() {
  const router = useRouter();
  const { slug } = router.query;

  // Buscamos el texto que coincida con el slug
  const texto = lecturas.find((t) => t.slug === slug);

  if (!texto) return <Layout><div className="p-24 text-center">Cargando lectura...</div></Layout>;

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        
        {/* Barra de progreso decorativa */}
        <div className="fixed top-[88px] left-0 w-full h-1 bg-gray-100 z-40">
           <div className="w-1/3 h-full bg-brand-gold"></div> 
        </div>

        <div className="max-w-3xl mx-auto px-6 py-24">
           
           {/* Header del Texto */}
           <div className="text-center mb-16">
              <Link href="/gratis" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black mb-6 block">
                 &larr; Volver a Lectura Libre
              </Link>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-dark-blue mb-2 block">{texto.tipo}</span>
              <h1 className="text-4xl md:text-6xl font-serif italic text-brand-red mb-4 leading-tight">
                {texto.titulo}
              </h1>
              <p className="font-texto italic text-gray-500 text-sm">
                Por {texto.autor} &bull; {texto.fecha} &bull; Lectura de {texto.tiempo}
              </p>
           </div>

           {/* CUERPO DEL TEXTO (Renderizado Dinámico) */}
           <article className="prose prose-lg prose-slate mx-auto font-texto font-light text-gray-800 leading-loose">
              {texto.contenido.map((parrafo, index) => (
                <p key={index} className="mb-6">
                  {/* Si es el primer párrafo, hacemos la letra Capital (Drop Cap) */}
                  {index === 0 ? (
                    <>
                      <span className="text-8xl float-left mr-3 mt-[-10px] font-serif text-brand-dark-blue">
                        {parrafo.charAt(0)}
                      </span>
                      {parrafo.slice(1)}
                    </>
                  ) : (
                    parrafo
                  )}
                </p>
              ))}
              
              <h3 className="font-serif italic text-brand-dark mt-12 mb-6 text-center text-2xl">***</h3>
           </article>

           {/* Footer del Artículo */}
           <div className="mt-20 pt-12 border-t border-gray-200 text-center">
              <p className="font-serif text-2xl mb-6 italic">¿Te gustó lo que leíste?</p>
              <form action="/exito?tipo=newsletter" method="POST" data-netlify="true" className="max-w-md mx-auto flex gap-2">
                 <input type="hidden" name="form-name" value="newsletter-lectura" />
                 <input type="email" name="email" placeholder="Suscríbete para leer más" className="flex-grow border-b border-black py-2 focus:outline-none font-texto bg-transparent" required />
                 <button type="submit" className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition">
                    Enviar
                 </button>
              </form>
           </div>

        </div>
      </div>
    </Layout>
  );
}