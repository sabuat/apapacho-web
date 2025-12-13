import { useState } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // CONTENEDOR PRINCIPAL
    <div className="min-h-screen flex flex-col bg-white text-black font-sans selection:bg-brand-gold selection:text-white relative">
      
      {/* --- HEADER --- */}
      <nav className="w-full px-6 py-6 md:px-12 flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        
        {/* LOGO */}
        <Link href="/" className="hover:opacity-80 transition relative z-50">
           {/* Asegúrate de que esta imagen exista, si no se verá un icono roto */}
           <img src="/images/institucional/logo.png" alt="Logo Apapacho" className="h-10 w-auto object-contain" />
        </Link>
        
        {/* MENÚ DE ESCRITORIO (Oculto en móvil) */}
        <div className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-widest font-medium">
          <Link href="/nosotros" className="hover:text-gray-500 transition">Editorial</Link>
          <Link href="/libros" className="hover:text-gray-500 transition">Libros</Link>
          <Link href="/autores" className="hover:text-gray-500 transition">Autores</Link>
          <Link href="/blog" className="hover:text-gray-500 transition">Blog</Link>
          <Link href="/cursos" className="hover:text-gray-500 transition">Cursos</Link>
          <Link href="/manuscritos" className="border border-black px-4 py-2 hover:bg-black hover:text-white transition">
            Manuscritos
          </Link>
        </div>

        {/* --- BOTÓN HAMBURGUESA (Solo visible en móvil) --- */}
        <button 
          className="md:hidden z-50 p-2 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Alterna entre Icono X e Icono Hamburguesa */}
          {isMenuOpen ? (
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* --- MENÚ MÓVIL (PANTALLA COMPLETA) --- */}
      {/* CORRECCIÓN IMPORTANTE: 
          Lo sacamos del <nav> y lo pusimos aquí afuera. 
          Usamos 'fixed inset-0' para que cubra toda la pantalla sin empujar nada.
      */}
      <div 
        className={`fixed inset-0 bg-[#F9F9F7] z-[60] flex flex-col justify-center items-center space-y-8 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
           {/* Botón X extra para cerrar (opcional, por usabilidad) */}
           <button 
             onClick={() => setIsMenuOpen(false)}
             className="absolute top-6 right-6 p-2"
           >
             <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>

           <Link href="/nosotros" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif text-brand-dark hover:text-brand-gold transition">
             Editorial
           </Link>
           <Link href="/libros" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif text-brand-dark hover:text-brand-gold transition">
             Libros
           </Link>
           <Link href="/autores" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif text-brand-dark hover:text-brand-gold transition">
             Autores
           </Link>
           <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif text-brand-dark hover:text-brand-gold transition">
             Blog
           </Link>
           <Link href="/cursos" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif text-brand-dark hover:text-brand-gold transition">
             Cursos
           </Link>
           <Link href="/manuscritos" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest font-bold border-b-2 border-black pb-1 hover:text-brand-gold hover:border-brand-gold transition mt-8">
             Enviar Manuscrito
           </Link>
      </div>

      {/* --- CONTENIDO --- */}
      <main className="flex-grow w-full">
        {children}
      </main>

      {/* --- FOOTER AZUL (Sin cambios) --- */}
      <footer className="bg-brand-blue-bg text-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-800/20">

          <div className="p-6 flex flex-col col-span-2 justify-between h-full">
             <div>
               <Link href="/" className="hover:opacity-80 transition block w-fit mx-auto">
                 <img src="/images/institucional/logo2.png" alt="Logo Apapacho" className="h-40 w-auto object-contain" />
               </Link>
               <Link href="/" className="font-serif mx-8 italic text-3xl text-brand-dark tracking-tight block mb-6 hover:text-brand-dark-blue transition">
                 Editorial Apapacho, nacida en Brasil con alma latinoamericana.
               </Link>
               <p className="text-gray-800 mx-8 leading-relaxed font-texto text-base font-extralight">
                 Apapacho nace como refugio para voces literarias que resuenan entre culturas. Nos especializamos en descubrir y acompañar a autores migrantes e independientes, creando literatura que abraza con el alma a través de narrativas breves pero profundas que dejan una impresión inmediata y duradera.
               </p>
             </div>
          </div>

          <div className="p-12 mt-4">
             <h4 className="font-bold uppercase tracking-widest text-md mb-8 text-brand-dark-blue">Explorar</h4>
             <ul className="space-y-4 font-medium italic font-lg flex flex-col items-start text-gray-800">
               <Link href="/libros" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">Libros</Link>
               <Link href="/autores" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">Nuestros Autores</Link>
               <Link href="/blog" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">Blog</Link>
               <Link href="/manuscritos" className="hover:text-brand-gold hover:translate-x-1 transition duration-300">Envía tu obra</Link>
             </ul>
          </div>

          <div className="p-12 mt-4">
             <h4 className="font-bold uppercase tracking-widest text-md mb-8 text-brand-dark-blue">Social</h4>
             <ul className="space-y-4 font-medium italic font-lg flex flex-col items-start text-gray-800">
               <a href="https://www.instagram.com/editorial.apapacho/" className="hover:text-brand-gold hover:translate-x-1 transition duration-300" target="_blank">
               <img src="/images/logos/instagram.png" alt="Instagram" className="inline h-4 w-4 mr-2 object-contain"/>
               Instagram</a>
               <a href="https://www.threads.com/@editorial.apapacho" className="hover:text-brand-gold hover:translate-x-1 transition duration-300" target="_blank">
               <img src="/images/logos/threads.png" alt="Threads" className="inline h-4 w-4 mr-2 object-contain"/>
               Threads</a>
               <a href="https://www.tiktok.com/@apapacho.editorial" className="hover:text-brand-gold hover:translate-x-1 transition duration-300" target="_blank">
               <img src="/images/logos/tik-tok.png" alt="Tik Tok" className="inline h-4 w-4 mr-2 object-contain"/>
               TikTok</a>
               <a href="https://www.youtube.com/@editorial.apapacho" className="hover:text-brand-gold hover:translate-x-1 transition duration-300" target="_blank">
               <img src="/images/logos/youtube.png" alt="YouTube" className="inline h-4 w-4 mr-2 object-contain"/>
               YouTube</a>
             </ul>
          </div>

          <div className="p-12 mt-4">
             <h4 className="font-bold uppercase tracking-widest text-md mb-8 text-brand-dark-blue">Contactos</h4>
             <div className="space-y-4 text-gray-600 font-texto font-light font-semibold">
               <p>República<br/>São Paulo, Brasil</p>
               <p className="pt-4">
                 {/* Enlace directo a Gmail */}
                 <a 
                   href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@editorialapapacho.com" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-brand-gold transition cursor-pointer"
                   title="Enviar correo vía Gmail"
                 >
                   contacto@<br/>editorialapapacho.com
                 </a>
                 <br/>
                 +55 11 98663 3936
               </p>
             </div>
          </div>
        </div>
        <div className="border-t border-gray-800/20 py-8 px-12 flex flex-col md:flex-row justify-between items-center text-xs text-brand-dark-blue uppercase tracking-widest font-bold">
           <div>
            <p>&copy; 2025 Editorial Apapacho.</p><br/>
            <p className="italic font-light">Desarrollado por Urbina Serviços LTDA</p>
           </div>
           
           <div className="space-x-8 mt-4 md:mt-0 text-brand-dark-blue">
              <Link href="/privacidad" className="hover:text-brand-gold transition">Privacidad</Link>
              <Link href="/terminos" className="hover:text-brand-gold transition">Términos</Link>
           </div>
        </div>       
      </footer>
    </div>
  );
}