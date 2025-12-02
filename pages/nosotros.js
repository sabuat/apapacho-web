import Layout from '../components/Layout';

export default function Nosotros() {
  return (
    <Layout>
      <div className="bg-white min-h-screen">
        
        {/* --- SECCIÓN 1: EL MANIFIESTO (Texto Grande) --- */}
        <section className="pt-18 pb-20 px-6 md:px-24 max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-8xl font-serif text-brand-dark mb-12 leading-tight">
              No publicamos libros,<br/>
              <span className="italic text-brand-gold">cultivamos refugios.</span>
            </h2>
            <div className="w-24 h-px bg-black mx-auto mb-12"></div>
            <p className="font-texto text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              Apapacho nació de la necesidad de encontrar belleza en el caos. 
              Somos una editorial latinoamericana con raíces en Venezuela y sede en Brasil, 
              creada para dar voz a historias que sanan, que abrazan, y algunas veces hasta pueden incomodar.
            </p>
        </section>

        {/* --- SECCIÓN 2: LA HISTORIA (Foto + Texto) --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
            
            {/* Foto Editorial / Espacio de trabajo */}
            <div className="relative h-[500px] md:h-auto bg-gray-100">
               <img 
                 src="/images/apapacho.jpg" 
                 alt="Espacio de trabajo Apapacho" 
                 className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition duration-1000"
               />
            </div>

            {/* Texto Historia */}
            <div className="bg-brand-bg p-12 md:p-24 flex flex-col justify-center">
               <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6">Nuestro Origen</span>
               <h2 className="text-4xl font-serif mb-8 text-brand-dark">De Brasil para el mundo</h2>
               <div className="prose prose-lg font-texto text-gray-600 font-light">
                 <p className="mb-6">
                   La idea de esta editorial nació en una pared de un cuarto alquilado en Manaos, a mediados del 2016. Una idea que demoró un tiempo para salir del papel y convertirse en realidad. Por aquel entonces tenia la intención de ser 100% en portugues, con alma venezolana. Su nombre en aquel entonces era ,<i>Editora Neyes</i>, por los araguaneyes.
                 </p>
                 <p className="mb-6">
                   En el 2024 Sabuat Urbina Ribeiro decide fundar esta editora, como un espacio donde organizar sus escritos, cuentos y novelas que estaban 'regados' desde un poco antes de su emigración forzada en el 2015. Mas allá de un espacio personal, el editor entendió que esta editorial surgió no solo como respuesta al duelo migratorio, sino como un espacio donde las palabras, la escritura, sirven de consuelo. Entendimos que la literatura no es solo entretenimiento, es una herramienta de supervivencia.
                 </p>
                 <p className="mb-6">
                   La palabra <strong>"Apapacho"</strong> se dice que proviene del náhuatl y significa 
                   <em>"acariciar con el alma"</em>. Esa es nuestra brújula. Hoy, operamos desde el corazón de São Paulo, traduciendo esa nostalgia en ediciones digitales del más alto padrón y una curaduría que prioriza la voz del autor sobre las tendencias del mercado.
                 </p>
               </div>
            </div>
        </section>

        {/* --- SECCIÓN 3: VALORES (3 Columnas) --- */}
        <section className="py-24 px-6 md:px-12 bg-brand-dark-blue text-white">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 
                 {/* Valor 1 */}
                 <div className="border-l border-brand-gold pl-8">
                    <h3 className="text-2xl font-serif italic mb-4 text-brand-gold">Estética</h3>
                    <p className="font-texto font-light opacity-80 leading-relaxed">
                       El libro es un objeto de arte. Nuestro trabajo es arte digital, por lo que cuidamos cada detalle, desde la escencia de la portada
                       hasta el detalle de la tipografía.
                    </p>
                 </div>

                 {/* Valor 2 */}
                 <div className="border-l border-brand-gold pl-8">
                    <h3 className="text-2xl font-serif italic mb-4 text-brand-gold">Autenticidad</h3>
                    <p className="font-texto font-light opacity-80 leading-relaxed">
                       No buscamos best-sellers vacíos. Buscamos voces rotas, voces nuevas, 
                       voces que tengan la urgencia de decir algo verdadero, aunque no sea comercial.
                    </p>
                 </div>

                 {/* Valor 3 */}
                 <div className="border-l border-brand-gold pl-8">
                    <h3 className="text-2xl font-serif italic mb-4 text-brand-gold">Comunidad</h3>
                    <p className="font-texto font-light opacity-80 leading-relaxed">
                       Ser autor es un acto solitario. Ser lector, a veces también. Apapacho nasce como un puente, creando espacios virtuales para que esas soledades se encuentren.
                    </p>
                 </div>

              </div>
           </div>
        </section>

        {/* --- SECCIÓN 4: LA EDITORA (Firma) --- */}
        <section className="py-2 px-6 mb-6 text-center bg-white">
           <img 
             src="/images/firma.png"
             alt="Firma" 
             className="w-auto mx-auto -mb-28 opacity-70"
           />
           <span className="-mt-20 text-sm font-bold uppercase tracking-widest text-brand-blue">Director Editorial</span>
        </section>

      </div>
    </Layout>
  );
}