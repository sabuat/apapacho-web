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
                <h1 className="text-5xl md:text-7xl font-serif italic text-brand-dark-blue mb-6">Henry Junior</h1>
                <p className="text-base font-texto uppercase text-gray-700">"Las historias reales están ahí, en nuestro entorno"</p>
            </div>

            {/* Foto y Bio Principal */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
                
                {/* Foto Grande */}
                <div className="md:col-span-5">
                    <div className="aspect-[3/4] bg-gray-100 shadow-xl relative">
                        <img src="/images/henry.png" className="w-full h-full object-cover" /> 
                    </div>
                    
                </div>

                {/* Texto Biográfico (Aquí escribes todo lo que quieras) */}
                <div className="md:col-span-7 prose prose-lg font-texto text-gray-600">
                    <p className="leading-relaxed mb-6">
                        <span className="font-bold text-black text-xl">Henry Junior</span> nació en Pernámbuco, Brasil. Su interés por la literatura comenzó a temprana edad, influenciado por la enorme biblioteca que tenía su padrino, sociólogo de profesión.
                    </p>
                    <p className="leading-relaxed mb-6">
                        Particularmente se interesa por la observación de las personas embutidas en su entorno cotidiano, y cómo las historias reales están ahí, esperando ser descubiertas. Su obra se caracteriza por una prosa directa y sin adornos, enfocada en la simplicidadde sus personajes.
                    </p>
                    <p className="leading-relaxed mb-6">
                        En el 2026, estrena con su novela en portugués "Un sugar para el entregador", que se centra en la historia de amor platónico entre un joven repartidor de comida y un hombre mucho mayor. Dió a conocer su novela a través de el app de la editorial Apapacho, y con distribución de cartaces en las calles de São Paulo.
                    </p>
                    
                    <div className="mt-12 p-4 bg-brand-bg border-l-4 border-brand-gold">
                        <h3 className="font-serif text-2xl text-brand-dark mb-2">Dato Curioso</h3>
                        <p className="text-sm">Tiene una colección de más de diez aparatos Kindle</p>
                    </div>
                </div>
            </div>

            {/* Sus Libros Publicados (Manual) */}
            <div className="border-t border-gray-200 pt-16">
                <h3 className="text-3xl font-serif text-center mb-12">Bibliografía en Apapacho</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Libro 1 */}
                    <Link href="/libros/bestias-tierras-malditas" className="group flex items-center gap-6 p-4 hover:bg-gray-50 transition border border-transparent hover:border-gray-100">
                        <div className="w-20% h-36 bg-gray-200 shadow-md">
                            <img src="/images/portadas/sugar.jpg" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl group-hover:text-brand-red transition">Um Sugar para o Motoboy</h4>
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Novela Corta</span>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
      </div>
    </Layout>
  );
}