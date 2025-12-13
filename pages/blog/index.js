import Layout from '../../components/Layout';
import Link from 'next/link';
import { getAllPosts } from '../../lib/posts'; // Importamos nuestro motor

// Esta función se ejecuta antes de crear la página para obtener los datos
export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}

export default function BlogIndex({ posts }) {
  return (
    <Layout>
      <div className="bg-brand-bg min-h-screen">
        
        <div className="pt-12 pb-12 px-6 md:px-12 text-center border-b border-gray-200">
          <h1 className="text-5xl md:text-7xl font-serif text-brand-red mb-4">Blog</h1>
          <p className="text-xl font-texto text-gray-600 italic">Novedades, artículos y opiniones</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
           {posts.map((post, index) => (
             <Link key={index} href={`/blog/${post.slug}`} className="group block bg-white border border-gray-100 hover:shadow-xl transition duration-500">
                {/* Imagen */}
                <div className="h-64 bg-gray-200 overflow-hidden relative">
                   {post.img ? (
                     <img src={post.img} alt={post.titulo} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-gray-400">Sin Imagen</div>
                   )}
                   <span className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                     {post.categoria}
                   </span>
                </div>
                {/* Texto */}
                <div className="p-8">
                   <div className="text-xs text-gray-400 mb-3 uppercase tracking-widest">{post.fecha}</div>
                   <h3 className="text-2xl font-serif text-brand-dark mb-4 group-hover:text-brand-gold transition leading-tight">
                     {post.titulo}
                   </h3>
                   <p className="font-texto text-gray-600 font-light text-sm line-clamp-3 mb-6">
                     {post.resumen}
                   </p>
                   <span className="text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 group-hover:border-brand-gold transition">
                     Leer Artículo
                   </span>
                </div>
             </Link>
           ))}
        </div>
      </div>
    </Layout>
  );
}