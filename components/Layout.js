import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans selection:bg-brand-gold selection:text-white">
      
      {/* --- HEADER --- */}
      <nav className="w-full px-6 py-6 md:px-12 flex justify-between items-end border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <Link href="/" className="hover:opacity-80 transition">
          <img src="/images/logo.png" alt="Logo Apapacho" className="h-10 w-auto object-contain" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-widest font-medium">
          <Link href="/nosotros" className="hover:text-gray-500 transition">Editorial</Link>
          <Link href="/libros" className="hover:text-gray-500 transition">Libros</Link>
          <Link href="/autores" className="hover:text-gray-500 transition">Autores</Link>
          {/*<Link href="/blog" className="hover:text-gray-500 transition">Noticias</Link>*/}
          <Link href="/cursos" className="hover:text-gray-500 transition">Cursos</Link>
          <Link href="/manuscritos" className="border border-black px-4 py-2 hover:bg-black hover:text-white transition">
            Manuscritos
          </Link>
        </div>
      </nav>

      {/* --- CONTENIDO --- */}
      <main className="flex-grow w-full">
        {children}
      </main>

      {/* --- FOOTER AZUL --- */}
      <footer className="bg-brand-blue-bg text-sm">
        
        {/* Grid Superior */}
        {/* Usamos 'divide-gray-800/20' para que las líneas divisorias sean sutiles sobre el azul */}
        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-800/20">

          {/* Columna 1: Identidad */}
          <div className="p-6 flex flex-col col-span-2 justify-between h-full">
             <div>
               <Link href="/" className="hover:opacity-80 transition block w-fit mx-auto">
                 <img src="/images/logo2.png" alt="Logo Apapacho" className="h-40 w-auto object-contain" />
               </Link>
               <Link href="/" className="font-serif mx-8 italic text-3xl text-brand-dark tracking-tight block mb-6 hover:text-brand-dark-blue transition">
                 Editorial Apapacho, nacida en Brasil con alma latinoamericana.
               </Link>
               <p className="text-gray-800 mx-8 leading-relaxed font-texto text-base font-extralight">
                 Apapacho nace como refugio para voces literarias que resuenan entre culturas. Nos especializamos en descubrir y acompañar a autores migrantes e independientes, creando literatura que abraza con el alma a través de narrativas breves pero profundas que dejan una impresión inmediata y duradera.
               </p>
             </div>
          </div>

          {/* Columna 2: Explorar */}
          <div className="p-12 mt-4">
             <h4 className="font-bold uppercase tracking-widest text-md mb-8 text-brand-dark-blue">Explorar</h4>
             <ul className="space-y-4 font-medium italic font-lg flex flex-col items-start text-gray-800">
               <Link href="/libros" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">Libros</Link>
               <Link href="/autores" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">Nuestros Autores</Link>
               <Link href="/blog" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">Blog & Noticias</Link>
               <Link href="/manuscritos" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">Envía tu obra</Link>
             </ul>
          </div>

          {/* Columna 3: Social */}
          <div className="p-12 mt-4">
             <h4 className="font-bold uppercase tracking-widest text-md mb-8 text-brand-dark-blue">Social</h4>
             <ul className="space-y-4 font-medium italic font-lg flex flex-col items-start text-gray-800">
               <a href="#" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">Instagram</a>
               <a href="#" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">Threads</a>
               <a href="#" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">TikTok</a>
               <a href="#" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">YouTube</a>
             </ul>
          </div>

          {/* Columna 4: Oficina */}
          <div className="p-12 mt-4">
             <h4 className="font-bold uppercase tracking-widest text-md mb-8 text-brand-dark-blue">Contactos</h4>
             <div className="space-y-4 text-gray-600 font-texto font-light font-semibold">
               <p>República<br/>São Paulo, Brasil</p>
               <p className="pt-4">contatos@<br/>editorialapapacho.com<br/>+55 11 98663 3936</p>
             </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-800/20 py-8 px-12 flex flex-col md:flex-row justify-between items-center text-xs text-brand-dark-blue uppercase tracking-widest font-bold">
           <p>&copy; 2025 Editorial Apapacho.</p>
           
           <div className="space-x-8 mt-4 md:mt-0 text-brand-dark-blue">
              <Link href="/privacidad" className="hover:text-brand-gold transition">Privacidad</Link>
              <Link href="/terminos" className="hover:text-brand-gold transition">Términos</Link>
           </div>
        </div>

      </footer>
    </div>
  );
}