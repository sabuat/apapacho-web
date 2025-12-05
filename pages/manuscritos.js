import Layout from '../components/Layout';

export default function Manuscritos() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Columna Izquierda: Instrucciones */}
        <div className="bg-brand-dark-blue text-white p-12 md:p-24 flex flex-col justify-center">
           <h1 className="text-5xl font-serif mb-8">Envíanos<br/>tu obra.</h1>
           <div className="space-y-6 font-texto font-light text-lg opacity-90">
             <p>Buscamos voces que tengan algo urgente que decir. Historias que nos muevan el piso.</p>
             <ul className="list-disc list-inside space-y-2 text-base mt-8">
               <li>Aceptamos Novela, Cuento y Poesía.</li>
               <li>Formato PDF o Word.</li>
               <li>Incluye una sinopsis breve.</li>
               <li>Tiempo de respuesta: 3 a 6 meses.</li>
             </ul>
           </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="bg-white p-12 md:p-24 flex flex-col justify-center">
           
           {/* ATENCIÓN TÉCNICA:
              1. data-netlify="true": Activa la magia de Netlify.
              2. name="manuscritos": Es el nombre con el que aparecerá en tu panel.
              3. action="/exito": (Opcional) A dónde va el usuario después de enviar.
              4. enctype: Necesario para subir archivos.
           */}
           <form 
             name="manuscritos" 
             method="POST" 
             data-netlify="true" 
             encType="multipart/form-data"
             action="/exito" 
             className="space-y-12 max-w-lg mx-auto w-full"
           >
              {/* INPUT OCULTO OBLIGATORIO: Netlify lo necesita para saber qué formulario es */}
              <input type="hidden" name="form-name" value="manuscritos" />
              
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2 block">Nombre Completo</label>
                <input type="text" name="nombre" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition bg-transparent" required />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2 block">Email de Contacto</label>
                <input type="email" name="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition bg-transparent" required />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2 block">Título de la Obra & Género</label>
                <input type="text" name="titulo" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition bg-transparent" required />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2 block">Sinopsis (Pitch)</label>
                <textarea name="sinopsis" rows="4" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition bg-transparent" required></textarea>
              </div>

              <div>
                 <label className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-4 block">Adjuntar Archivo (PDF/Word)</label>
                 <input 
                   type="file" 
                   name="archivo" 
                   accept=".pdf,.doc,.docx" // Filtra para que solo puedan elegir estos archivos
                   className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-semibold file:bg-brand-bg file:text-brand-dark hover:file:bg-brand-dark-blue transition cursor-pointer" 
                   required
                   action="/exito?tipo=manuscrito"
                 />
              </div>

              <button type="submit" className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-dark-blue transition w-full">
                Enviar Manuscrito
              </button>
           </form>
        </div>

      </div>
    </Layout>
  );
}