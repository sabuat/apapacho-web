import Layout from '../../components/Layout';
import Link from 'next/link';

export default function CursoEscritura() {
  return (
    <Layout>
      <div className="bg-brand-bg min-h-screen">
        
        {/* --- HERO SECTION (IMAGEN) --- */}
        <div className="relative w-full h-[90%] md:h-[90%] overflow-hidden">
           <img 
             src="/images/Checkout.png" 
             alt="Escritura Creativa" 
             className="w-full h-full object-cover brightness-90" 
           />
        </div>

        {/* --- TÍTULO Y DESCRIPCIÓN (TEXTO) --- */}
        <div className="w-full bg-brand-bg py-12 md:py-20 px-6">
           <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
              <span className="text-brand-blue text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Taller Online &bull; 4 Semanas
              </span>
              <h1 className="text-4xl md:text-7xl font-serif italic text-brand-gold mb-6 leading-tight">
                Escritura Creativa para Principiantes
              </h1>
              <p className="text-brand-blue text-lg md:text-xl font-light max-w-2xl font-texto">
                Encuentra tu voz entre la tinta y el exilio. Taller intensivo para quienes desean escribir desde la autenticidad y sanar a través de la narrativa.
              </p>
           </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-6">
           
           {/* --- DETALLES CLAVE --- */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-200 pb-16 mb-16 text-center">
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Fecha de Inicio</span>
                <span className="font-serif text-xl text-brand-dark">15 Enero</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Horario</span>
                <span className="font-serif text-xl text-brand-dark">19:00 Vzla</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Formato</span>
                <span className="font-serif text-xl text-brand-dark">Zoom en Vivo</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Precio</span>
                <span className="font-serif text-xl text-brand-dark-blue">$5 USD</span>
              </div>
           </div>

           {/* --- CONTENIDO / TEMARIO --- */}
           <div className="prose prose-lg prose-slate mx-auto font-texto font-light text-gray-800 mb-24">
              <h2 className="font-serif text-3xl text-brand-dark">¿Qué aprenderás?</h2>
              <p>
                Este no es un curso técnico sobre puntuación o géneros literarios. Es un viaje introspectivo de cuatro semanas diseñado para quienes sienten el impulso de escribir, no solo para contar una historia, sino para descubrirse y sanar a través de ella. Utilizaremos la escritura a mano como herramienta principal para conectar con la autenticidad, explorando la narrativa como un acto de refugio y reconstrucción personal, especialmente relevante para quienes han vivido experiencias de migración, desarraigo o búsqueda interior.
              </p>
              
              <ul className="list-none space-y-4 pl-0 mt-8">
                 <li className="flex gap-4">
                    <span className="text-brand-gold font-bold text-xl">01.</span>
                    <span><strong>Escribir a mano para encontrarse:</strong> Fundamentos de la escritura creativa vs. escritura curativa. El acto físico de escribir como ritual de atención plena y antídoto contra el bloqueo.</span>
                 </li>
                 <li className="flex gap-4">
                    <span className="text-brand-gold font-bold text-xl">02.</span>
                    <span><strong>Dar voz a nuestras propias facetas:</strong> La creación de personajes como un ejercicio de exploración de las múltiples identidades que habitan en nosotros, especialmente la identidad fragmentada del migrante o del que busca.</span>
                 </li>
                 <li className="flex gap-4">
                    <span className="text-brand-gold font-bold text-xl">03.</span>
                    <span><strong>Del caos emocional a una narrativa con forma:</strong> La estructura narrativa básica no como una jaula, sino como un esqueleto que permite que la emoción y la memoria caótica se organicen en una historia comprensible y poderosa.</span>
                 </li>
                 <li className="flex gap-4">
                    <span className="text-brand-gold font-bold text-xl">04.</span>
                    <span><strong>Más allá del tono y la forma:</strong> Distinción y práctica de los elementos que conforman una voz narrativa única y auténtica, lejos de la impostura y los clichés.</span>
                 </li>
              </ul>
           </div>

           {/* --- SECCIÓN DE PAGO (Call to Action) --- */}
           <div className="bg-brand-dark-blue text-white p-12 md:p-16 text-center mb-24 rounded-sm shadow-2xl">
              <h2 className="font-serif text-4xl mb-6">Asegura tu lugar</h2>
              <p className="font-texto font-light opacity-80 mb-8 max-w-lg mx-auto">
                Los cupos son limitados para garantizar la retroalimentación personalizada de cada texto.
              </p>
              
              {/* BOTÓN DE PAGO (Aquí iría tu Link de Stripe) */}
              <a 
                href="https://buy.stripe.com/eVq7sN2NVeBm6LP9YJ5kk00" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-brand-gold text-brand-bg px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dark-blue transition duration-300"
              >
                Pagar Inscripción ($5 USD)
              </a>
              <p className="text-[10px] uppercase tracking-widest mt-3 opacity-70">Pago seguro vía Stripe</p>
           </div>

           {/* --- FORMULARIO DE SOLICITUD DE INFO (Netlify) --- */}
           <div id="info" className="border-t border-gray-200 pt-16">
              <h3 className="font-serif text-3xl text-center mb-8 text-brand-dark">¿Tienes dudas antes de inscribirte?</h3>
              <p className="text-center text-gray-600 font-texto font-light mb-12">
                Déjanos tus datos y te enviaremos el programa detallado en PDF.
              </p>

              <form 
                name="info-curso-escritura" 
                method="POST" 
                data-netlify="true" 
                action="/exito?tipo=info-curso"
                className="max-w-lg mx-auto space-y-8"
              >
                 <input type="hidden" name="form-name" value="info-curso-escritura" />
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                       <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Nombre</label>
                       <input type="text" name="nombre" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent" required />
                    </div>
                    <div>
                       <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Email</label>
                       <input type="email" name="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent" required />
                    </div>
                 </div>

                 <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Tu Pregunta (Opcional)</label>
                    <textarea name="mensaje" rows="2" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent"></textarea>
                 </div>

                 <div className="text-center">
                    <button type="submit" className="border border-black px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition duration-300">
                       Solicitar Información
                    </button>
                 </div>
              </form>
           </div>

        </div>
      </div>
    </Layout>
  );
}