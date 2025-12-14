import Layout from '../components/Layout';
import Link from 'next/link';

export default function Cursos() {
  return (
    <Layout>
      <div className="bg-brand-bg min-h-screen">
        
        {/* Header Cursos */}
        <section className="pt-12 pb-16 px-6 md:px-12 text-center border-b border-gray-200">
           <h1 className="text-5xl md:text-7xl font-serif text-brand-red mb-6">Laboratorio Creativo</h1>
           <p className="font-texto text-xl text-gray-600 max-w-2xl mx-auto font-light">
             Espacios para pulir tu pluma y entender el mundo editorial.
           </p>
        </section>

        {/* Lista de Cursos - DISEÑO VERTICAL CINEMATOGRÁFICO */}
        <section className="max-w-4xl mx-auto px-6 py-16 space-y-20">
          
          {/* CURSO 1 (Abierto) */}
          <div className="group bg-white border border-gray-200 hover:shadow-2xl transition duration-500">
             
             {/* 1. IMAGEN GRANDE ENCIMA (Cinemática) */}
             <div className="relative w-full h-[90%] overflow-hidden">
                <img 
                  src="/images/cur-1.png" 
                  alt="Taller de Escritura" 
                  className="w-full h-90% object-cover grayscale group-hover:grayscale-0 transition duration-1000 transform group-hover:scale-105"
                />
                
                {/* Badge Flotante (Esquina superior derecha, muy minimalista) */}
                <div className="absolute top-0 right-0 bg-white px-8 py-4 border-b border-l border-gray-200 z-10">
                   <span className="text-xs font-bold uppercase tracking-widest text-brand-dark-blue">Inscripciones Abiertas</span>
                </div>
             </div>

             {/* 2. CONTENIDO DEBAJO */}
             <div className="p-10 md:p-16">
                
                {/* Fila Superior: Categoría y Precio */}
                <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-6">
                   <div className="flex items-center gap-2 text-brand-red">
                      <span className="text-xs uppercase tracking-widest font-bold">Taller Online</span>
                   </div>
                   <p className="font-serif text-3xl italic text-brand-dark">$5 USD</p>
                </div>
                
                {/* Título Grande */}
                <h3 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
                  Escritura Creativa para Principiantes
                </h3>
                
                {/* Descripción */}
                <p className="font-texto text-gray-600 text-lg leading-relaxed mb-10 font-light">
                  Es un viaje introspectivo de cuatro semanas diseñado para quienes sienten el impulso de escribir, no solo para contar una historia, sino para descubrirse y sanar a través de ella. Utilizaremos la escritura a mano como herramienta principal para conectar con la autenticidad, explorando la narrativa como un acto de refugio y reconstrucción personal.
                </p>

                {/* Footer del Card: Detalles y Botón */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
                   <div className="flex gap-8 text-xs uppercase tracking-widest text-gray-500 font-semibold">
                      <span>FECHA: 15 de Enero</span>
                      <span>HORA: 19:00 PM (Hora Vzla)</span>
                   </div>

                {/* Reemplaza el botón antiguo por esto */}
                  <Link 
                  href="/cursos/escritura-creativa" 
                  className="w-full md:w-auto inline-block text-center bg-brand-dark-blue text-white px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-brand-gold transition"
                  >
                  Ver Detalles y Reservar
                  </Link>
                </div>
             </div>
          </div>

          {/* CURSO 2 (Cerrado) */}
          <div className="group bg-white border border-gray-200 opacity-60 hover:opacity-100 transition duration-500">
             
             {/* IMAGEN GRANDE ENCIMA */}
             <div className="relative w-90% h-[500px] overflow-hidden">
                <img 
                  src="/images/curso1.jpg" 
                  alt="Conferencia" 
                  className="w-full h-full object-cover filter grayscale"
                />
                <div className="absolute top-0 right-0 bg-black px-8 py-4 z-10">
                   <span className="text-xs font-bold uppercase tracking-widest text-white">Finalizado</span>
                </div>
             </div>

             {/* CONTENIDO DEBAJO */}
             <div className="p-10 md:p-16">
                <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-6">
                   <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Masterclass</span>
                   <p className="font-serif text-3xl italic text-gray-400">Gratuito</p>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
                  El Proceso Creativo del Emigrante
                </h3>
                
                <p className="font-texto text-gray-500 text-lg leading-relaxed mb-10 font-light">
                  Charla magistral sobre cómo la distancia transforma la narrativa. La nostalgia no como dolor, sino como herramienta técnica de ficción.
                </p>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
                   <div className="flex gap-8 text-xs uppercase tracking-widest text-gray-400 font-semibold">
                      <span> Evento Pasado</span>
                   </div>

                   <button disabled className="w-full md:w-auto border border-gray-300 text-gray-400 px-10 py-4 text-xs uppercase tracking-widest font-bold cursor-not-allowed">
                      Ver Grabación (Pronto)
                   </button>
                </div>
             </div>
          </div>

        </section>
      </div>
    </Layout>
  );
}