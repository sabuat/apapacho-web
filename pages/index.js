import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

import { getAllPosts } from '../lib/posts';

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const ultimosPosts = allPosts.slice(0, 3);

  return {
    props: {
      posts: ultimosPosts
    }
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
         <title>Apapacho | Editorial</title>
         <link rel="shortcut icon" href="/favicon.ico?v=2" />

         <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>
      </Head>

      {/* SECCIÓN 1: HERO - Tipografía Gigante */}
      <section className="border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
          
          {/* Columna Izquierda: Título */}
          <div className="lg:col-span-8 p-6 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-200">
            {/* Título Animado */}
            <h1 className="text-7xl md:text-9xl font-serif tracking-tighter leading-[0.85] mb-8">
              <span className="inline-block anim-down">
                Literatura
              </span> 
              <br/>
              <span className="italic ml-4 md:ml-12 text-brand-gold inline-block anim-right">
                que te
              </span> 
              <br/>
              <span className="inline-block anim-up">
                abraza.
              </span>
            </h1>
            <div className="mt-12 flex items-center gap-4">
               <div className="h-px w-20 bg-black"></div>
               <p className="text-sm uppercase tracking-widest">Editorial Independiente</p>
            </div>
          </div>

          {/* Columna Derecha: Imagen/Destacado */}
          {/* Agregué 'flex-col' para que se apilen verticalmente */}
          <div className="lg:col-span-4 bg-brand-bg flex flex-col items-center justify-center p-12 border-l border-gray-200">
             
             {/* Imagen */}
             <img 
               src="/images/portadas/Perdido.jpg" 
               alt="Libro destacado" 
               className="w-64 h-auto shadow-2xl rotate-3 hover:rotate-0 transition duration-500"
             />
             
             {/* Enlace (Ahora abajo, con margen superior mt-8) */}
             <div className="mt-8">
                <Link href="/libros" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 transition">
                  Ver Novedades
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: MANIFIESTO - Texto corrido estilo editorial */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
         <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-gray-200 flex items-center bg-gray-50">
            <h2 className="text-4xl md:text-5xl italic text-brand-blue font-serif leading-tight">
               "Publicamos historias que sanan, emocionan y transforman."
            </h2>
         </div>
         <div className="p-12 md:p-24 flex flex-col justify-center">
            <p className="text-xl font-extralight font-texto italic leading-relaxed mb-6 text-brand-dark">
               Creemos en el libro como objeto de arte y en la lectura como refugio. 
               Cada publicación es un proceso cuidado de edición, diseño y diálogo con el autor.
            </p>
            <Link href="/nosotros" className="text-sm font-bold text-gray-700 uppercase tracking-widest underline decoration-gray-300 underline-offset-4 hover:text-brand-blue transition">
               Conoce más de nuestra editorial
            </Link>
         </div>
      </section>

      {/* SECCIÓN 3: LIBROS DESTACADOS (Carrusel en Móvil / Grid en Desktop) */}
      <section className="border-b border-gray-200 md:border-none">
         <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-3 pb-4 md:pb-0 hide-scrollbar">
            <div className="min-w-[85vw] md:min-w-0 snap-center border-r border-gray-200 min-h-[500px] relative group hover:bg-gray-50 transition duration-500">
               <div className="p-8 h-full flex flex-col justify-between">
                  <span className="text-base font-semibold font-texto uppercase text-brand-dark tracking-widest">Cuentos</span>
                  <div className="flex-grow flex items-center justify-center py-8">
                     <img 
                        src="/images/portadas/BTM.jpg"
                        alt="Portada Libro 1" 
                        className="w-40 h-auto shadow-md group-hover:scale-105 transition duration-500"
                     />
                  </div>
                  <div>
                     <h3 className="font-serif text-2xl italic text-brand-red">Bestias de Tierras Malditas</h3>
                     <p className="text-base text-gray-600 font-texto uppercase mt-1">Sabuat Urbina</p>
                  </div>
               </div>
            </div>

            {/* Libro 2 */}
            <div className="min-w-[85vw] md:min-w-0 snap-center border-r border-gray-200 min-h-[500px] relative group hover:bg-gray-50 transition duration-500">
               <div className="p-8 h-full flex flex-col justify-between">
                  <span className="text-base font-semibold font-texto uppercase text-brand-dark tracking-widest">Novela Joven</span>
                  <div className="flex-grow flex items-center justify-center py-8">
                     <img 
                        src="/images/portadas/Dragona.jpg"
                        alt="Portada Libro 2" 
                        className="w-40 h-auto shadow-md group-hover:scale-105 transition duration-500"
                     />
                  </div>
                  <div>
                     <h3 className="font-serif text-2xl italic text-brand-red">La Última Dragona</h3>
                     <p className="text-base text-gray-600 font-texto uppercase mt-1">Erika Villarroel</p>
                  </div>
               </div>
            </div>

            {/* Call to Action */}
            <div className="min-w-[85vw] md:min-w-0 snap-center flex items-center justify-center p-12 bg-black text-white">
               <div className="text-center">
                  <h3 className="font-serif text-3xl mb-4 italic">¿Quieres ver más?</h3>
                  <Link href="/libros" className="inline-block border border-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
                     Ir a la librería
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* SECCIÓN 4:BLOG (Ahora usa los datos automáticos) */}
      <section className="py-12 px-6 md:px-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl md:text-5xl font-serif text-brand-gold italic">Nuestro Blog</h2>
                <Link href="/blog" className="hidden md:block text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-brand-gold hover:border-brand-gold transition">Ver todo</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {posts.map((post, index) => (
                  <Link key={index} href={`/blog/${post.slug}`} className="group block">
                      <div className="h-64 bg-gray-100 overflow-hidden mb-6 relative">
                        {post.img && <img src={post.img} alt={post.titulo} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />}
                      </div>
                      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                        <span className="text-brand-gold">{post.categoria}</span>
                        <span>&bull;</span>
                        <span>{post.fecha}</span>
                      </div>
                      <h3 className="text-2xl font-serif text-brand-dark group-hover:text-brand-gold transition leading-snug mb-3">{post.titulo}</h3>
                      <p className="font-texto text-gray-600 font-light text-sm line-clamp-3">{post.resumen}</p>
                  </Link>
                ))}
            </div>
          </div>
      </section>

      {/* SECCIÓN 5: NEWSLETTER (Estilo Moero) */}
      <section className="border-t border-gray-200 bg-white">
         <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Columna Izquierda: Título y Promesa */}
            <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-center">
               <span className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4">Newsletter</span>
               <h2 className="text-5xl md:text-6xl font-serif leading-none mb-6 text-brand-dark">
                  No pierdas <br/>
                  <span className="italic text-brand-gold">el hilo.</span>
               </h2>
               <p className="text-extralight text-xl text-gray-600 font-texto max-w-md">
                  Recibe novedades editoriales, invitaciones a presentaciones y contenido exclusivo de nuestros autores. Sin spam, solo literatura.
               </p>
            </div>

            {/* Columna Derecha: Formulario */}
            <div className="p-12 md:p-24 flex items-center justify-center bg-brand-bg">
               <form 
                 name="newsletter" 
                 method="POST" 
                 data-netlify="true" 
                 className="w-full max-w-md space-y-6"
                 action="/exito?tipo=newsletter"
                 netlify
               >
                  <input type="hidden" name="form-name" value="newsletter" />
                  
                  <div className="group relative">
                     <input 
                       type="email" 
                       name="email" 
                       placeholder="Tu correo electrónico" 
                       className="w-full bg-transparent border-b border-gray-300 py-4 text-xl font-serif focus:outline-none focus:border-brand-dark transition-colors placeholder:text-gray-400 placeholder:italic placeholder:font-serif"
                       required 
                     />
                     {/* Animación de línea al hacer foco (opcional, detalle elegante) */}
                     <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 group-focus-within:w-full"></div>
                  </div>

                  <div className="flex justify-end">
                     <button 
                       type="submit" 
                       className="text-xs font-bold uppercase tracking-[0.2em] border border-black px-8 py-4 hover:bg-black hover:text-white transition duration-300"
                     >
                        Suscribirse
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
    </Layout>
  );
}