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
               {/* Sube una foto tuya trabajando o de libros apilados artísticamente a /images/nosotros.jpg */}
               <img 
                 src="/images/nosotros.jpg" 
                 alt="Espacio de trabajo Apapacho" 
                 className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition duration-1000"
               />
            </div>

            {/* Texto Historia */}
            <div className="bg-brand-bg p-12 md:p-24 flex flex-col justify-center">
               <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6">Nuestro Origen</span>
               <h2 className="text-4xl font-serif mb-8 text-brand-dark">De Caracas a São Paulo</h2>
               <div className="prose prose-lg font-texto text-gray-600 font-light">
                 <p className="mb-6">
                   La palabra <strong>"Apapacho"</strong> se dice que proviene del náhuatl y significa 
                   <em>"acariciar con el alma"</em>. Esa es nuestra brújula.
                 </p>
                 <p className="mb-6">
                   Fundada en 2024 por Sabuat Urbina Ribeiro, esta editorial surgió como respuesta 
                   al duelo migratorio. Entendimos que la literatura no es solo entretenimiento, 
                   es una herramienta de supervivencia.
                 </p>
                 <p>
                   Hoy, operamos desde el corazón de São Paulo, traduciendo esa nostalgia en 
                   ediciones cuidadas, papel de calidad y una curaduría que prioriza la 
                   voz del autor sobre las tendencias del mercado.
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
                       El libro es un objeto de arte. Cuidamos cada detalle, desde la tipografía 
                       hasta el gramaje del papel. Queremos que tener un libro nuestro sea una experiencia sensorial.
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
                       Ser autor es solitario. Ser lector, a veces también. Apapacho es el puente. 
                       Creamos espacios (físicos y virtuales) para que esas soledades se encuentren.
                    </p>
                 </div>

              </div>
           </div>
        </section>

        {/* --- SECCIÓN 4: LA EDITORA (Firma) --- */}
        <section className="py-24 px-6 text-center bg-white">
           <img 
             src="/images/firma.png" // Puedes subir una foto de tu firma real o dejarlo sin imagen
             alt="Firma" 
             className="h-20 w-auto mx-auto mb-6 opacity-50"
           />
           <h3 className="text-xl font-serif text-brand-dark">Sabuat Urbina Ribeiro</h3>
           <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Directora Editorial</span>
        </section>

      </div>
    </Layout>
  );
}