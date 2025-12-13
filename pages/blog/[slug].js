import Layout from '../../components/Layout';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '../../lib/posts';

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post },
  };
}

export default function Post({ post }) {

  // --- FUNCIÓN PARA PROCESAR FORMATO (Negrita y Cursiva) ---
  const procesarTexto = (texto) => {
    let html = texto;
    
    // 1. Negrita: **texto** -> <strong>texto</strong>
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-brand-dark">$1</strong>');
    
    // 2. Cursiva: *texto* -> <em>texto</em>
    html = html.replace(/\*(.*?)\*/g, '<em class="italic font-texto text-gray-600">$1</em>');

    return { __html: html };
  };

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        
        {/* Encabezado */}
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-6 text-center">
           <Link href="/blog" className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition">
             &larr; Volver al Blog
           </Link>
           <span className="block text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">{post.categoria}</span>
           <h1 className="text-4xl md:text-6xl font-serif text-brand-dark-blue italic mb-8 leading-tight">{post.titulo}</h1>

           {/* Autor y Fecha */}
           <div className="flex items-center justify-center gap-4 mb-8">
              {post.autorFoto && (
                <img src={post.autorFoto} alt={post.autor} className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm"/>
              )}
              <div className="text-left">
                <p className="font-serif text-brand-dark text-lg leading-none mb-1">{post.autor}</p>
                <p className="font-texto text-xs text-gray-500 uppercase tracking-widest">{post.fecha}</p>
              </div>
           </div>
        </div>

        {/* Imagen Principal */}
        <div className="w-full max-w-5xl mx-auto px-6 mb-16">
           {post.img ? (
             <img src={post.img} alt={post.titulo} className="w-full h-[400px] md:h-[500px] object-cover shadow-xl" />
           ) : (
             <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center text-gray-400 uppercase tracking-widest">Sin Imagen</div>
           )}
        </div>

        {/* --- CONTENIDO DEL ARTÍCULO --- */}
        <article className="max-w-2xl mx-auto px-6 pb-24 font-texto text-lg leading-relaxed text-gray-800 font-light">
           {post.contenido.map((parrafo, index) => {

             // 2. SUBTÍTULO (H3) - Empieza con ###
             if (parrafo.startsWith("### ")) {
               return (
                 <h3 key={index} className="text-xl md:text-2xl font-serif text-brand-red italic mt-6 mb-4 font-bold">
                   {parrafo.replace("### ", "")}
                 </h3>
               );
             }

             // 3. CITAS (Quotes) - Empieza con >
             if (parrafo.startsWith("> ")) {
               return (
                 <blockquote key={index} className="border-l-4 border-brand-gold pl-6 my-10 bg-gray-50 py-4 pr-4 rounded-r-lg">
                   <p 
                     className="font-serif text-2xl italic text-brand-dark leading-relaxed"
                     dangerouslySetInnerHTML={procesarTexto(parrafo.replace("> ", ""))}
                   />
                 </blockquote>
               );
             }

             // 4. ENUMERACIONES / LISTAS - Empieza con #
             if (parrafo.startsWith("# ")) {
               return (
                 <div key={index} className="pl-8 my-6 flex gap-3">
                   <span className="text-brand-gold font-bold">●</span>
                   <p dangerouslySetInnerHTML={procesarTexto(parrafo.replace("# ", ""))} />
                 </div>
               );
             }

             // 5. PÁRRAFO NORMAL (Con soporte para Negrita y Cursiva)
             return (
                <p 
                  key={index} 
                  className="mb-6" 
                  dangerouslySetInnerHTML={procesarTexto(parrafo)} 
                />
             );

           })}
        </article>
      </div>
    </Layout>
  );
}