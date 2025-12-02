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
                <h1 className="text-5xl md:text-7xl font-serif italic text-brand-dark-blue mb-6">Erika Villarroel</h1>
                <p className="text-base font-texto uppercase text-gray-700">"Escribir me hizo entender mi verdadero ser femenino."</p>
            </div>

            {/* Foto y Bio Principal */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
                
                {/* Foto Grande */}
                <div className="md:col-span-5">
                    <div className="aspect-[3/4] bg-gray-100 shadow-xl relative">
                        <img src="/images/erika.jpg" className="w-full h-full object-cover" /> 
                    </div>
                    
                    {/* Redes Sociales del Autor */}
                    <div className="flex justify-center gap-6 mt-6">
                        <a href="https://www.instagram.com/editorial.apapacho" className="text-xs uppercase tracking-widest hover:text-brand-gold">Instagram</a>
                    </div>
                </div>

                {/* Texto Biográfico (Aquí escribes todo lo que quieras) */}
                <div className="md:col-span-7 prose prose-lg font-texto text-gray-600">
                    <p className="leading-relaxed mb-6">
                        <span className="font-bold text-black text-xl">Erika Villarroel</span> nació en Turmero, Estado Aragua, Venezuela. Comenzó a leer desde muy pequeña todo lo que caía en sus manos. A los 15 años comenzó a leer Isabel Allenede a escondidas, ya que su padre consideraba a la escritora como "revoltosa" por sus temáticas feministas.
                    </p>
                    <p className="leading-relaxed mb-6">
                        Viene desarrollando su carrera literaria desde temprano, cuando comenzó a escribir cuentos, reuniédolos en una colección titulada 'Cinco Finales (In)felices', debido al comentario de una amiga que le dijo que sus historias siempre tenían desenlaces tristes.
                    </p>
                    <p className="leading-relaxed mb-6">
                        En el 2023, escribió su primera novela juvenil en portugues, 'La Última Dragona', que será publicada por Editorial Apapacho en el 2026. La novela explora temas de fantasía y la psique femenina, reflejando su interés por crear mundos donde estos elementos colisionan.
                    </p>
                    <p className="leading-relaxed">
                        Actualmente está revisitando escritos antiguos que serán publicados por esta casa.
                    </p>
                    
                    <div className="mt-12 p-4 bg-brand-bg border-l-4 border-brand-gold">
                        <h3 className="font-serif text-2xl text-brand-dark mb-2">Dato Curioso</h3>
                        <p className="text-sm">Priefiere escribir así que se levanta, ya que le parece ser el horario más productivo.</p>
                    </div>
                </div>
            </div>

            {/* Sus Libros Publicados (Manual) */}
            <div className="border-t border-gray-200 pt-16">
                <h3 className="text-3xl font-serif text-center mb-12">Bibliografía en Apapacho</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Libro 1 */}
                    <Link href="/libros/la-ultima-dragona" className="group flex items-center gap-6 p-4 hover:bg-gray-50 transition border border-transparent hover:border-gray-100">
                        <div className="w-20% h-36 bg-gray-200 shadow-md">
                            <img src="/images/Dragona.jpg" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl group-hover:text-brand-red transition">La Última Dragona</h4>
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Noveja Joven</span>
                        </div>
                    </Link>

                    {/* Libro 2 */}
                    <Link href="/libros/diez-besos-tontos" className="group flex items-center gap-6 p-4 hover:bg-gray-50 transition border border-transparent hover:border-gray-100">
                        <div className="w-20% h-36 bg-gray-200 shadow-md">
                           <img src="/images/besos.jpg" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl group-hover:text-brand-red transition">Diez Besos Tontos</h4>
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