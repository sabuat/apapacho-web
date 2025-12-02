import Layout from '../../components/Layout';
import Link from 'next/link';

export default function SabuatPerfil() {
  return (
    <Layout>
      <div className="bg-white min-h-screen">
        
        {/* Botón Volver */}
        <div className="pt-12 px-6 md:px-24">
            <Link href="/autores" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition">
                &larr; Volver a Autores
            </Link>
        </div>

        {/* --- CONTENIDO PRINCIPAL --- */}
        <div className="max-w-5xl mx-auto px-6 py-12">
            
            {/* Header del Autor */}
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-serif italic text-brand-dark-blue mb-6">Sabuat Urbina Ribeiro</h1>
                <p className="text-base font-texto uppercase text-gray-700">"Escribir es la única forma de ordenar el caos."</p>
            </div>

            {/* Foto y Bio Principal */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
                
                {/* Foto Grande */}
                <div className="md:col-span-5">
                    <div className="aspect-[3/4] bg-gray-100 shadow-xl relative">
                        <img src="/images/sabuat.png" className="w-full h-full object-cover" /> 
                    </div>
                    
                    {/* Redes Sociales del Autor */}
                    <div className="flex justify-center gap-6 mt-6">
                        <a href="https://www.instagram.com/sabuat.urbina" className="text-xs uppercase tracking-widest hover:text-brand-gold">Instagram</a>
                    </div>
                </div>

                {/* Texto Biográfico (Aquí escribes todo lo que quieras) */}
                <div className="md:col-span-7 prose prose-lg font-texto text-gray-600">
                    <p className="leading-relaxed mb-6">
                        <span className="font-bold text-black text-xl">Sabuat Urbina Ribeiro</span> nació en Caracas, Venezuela. Desde muy joven mostró interés por las historias que habitan en los márgenes de la realidad. Con 13  leyó "Cien Años de Soledad" de Gabriel García Márquez, lo que marcó el inicio de su fascinación por el realismo mágico.
                    </p>
                    <p className="leading-relaxed mb-6">
                        Su obra se caracteriza por una prosa poética pero cruda, explorando temas como el desarraigo, la memoria y el 'no-lugar' del emigrante. A pesar de sus inicios en la escritura con el sueño de ser novelista, encontró en los cuentos su verdadera voz literaria.
                    </p>
                    <p className="leading-relaxed mb-6">
                        En el 2015, debido a la crisis política de Venezuela emigró para Brasil, donde reside actualmente en São Paulo. Esta experiencia migratoria ha permeado profundamente su obra, otorgándole una perspectiva única sobre la identidad y el hogar.
                    </p>
                    <p className="leading-relaxed">
                        En el 2024, fundó la Editorial Apapacho, sueño que arrastraba por casi una década, con la idea de organizar sus proprios manuscritos, y descubiendo así la creación de un lugar que pudiera dar voz a escritores migrantes e independientes en Latinoamérica. Además de su labor editorial, Sabuat continúa escribiendo y explorando con su escritura nuevas formas de organizar palabras, deambulando entre los dos idiomas en los que convive.
                    </p>
                    
                    <div className="mt-12 p-4 bg-brand-bg border-l-4 border-brand-gold">
                        <h3 className="font-serif text-2xl text-brand-dark mb-2">Dato Curioso</h3>
                        <p className="text-sm">Escribe todos sus borradores a mano en libretas, o hojas sueltas, antes de pasarlos al computador.</p>
                    </div>
                </div>
            </div>

            {/* Sus Libros Publicados (Manual) */}
            <div className="border-t border-gray-200 pt-16">
                <h3 className="text-3xl font-serif text-center mb-12">Bibliografía en Apapacho</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Libro 1 */}
                    <Link href="/libros/bestias-de-tierras-malditas" className="group flex items-center gap-6 p-4 hover:bg-gray-50 transition border border-transparent hover:border-gray-100">
                        <div className="w-20% h-36 bg-gray-200 shadow-md">
                            <img src="/images/BTM.jpg" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl group-hover:text-brand-red transition">Bestias de Tierras Malditas</h4>
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Cuentos</span>
                        </div>
                    </Link>

                    {/* Libro 2 */}
                    <Link href="/libros/imagina-dragones" className="group flex items-center gap-6 p-4 hover:bg-gray-50 transition border border-transparent hover:border-gray-100">
                        <div className="w-20% h-36 bg-gray-200 shadow-md">
                           <img src="/images/imagina.jpg" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl group-hover:text-brand-red transition">Imagina Dragones</h4>
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Próximamente</span>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
      </div>
    </Layout>
  );
}