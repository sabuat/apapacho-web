import Head from 'next/head';
import Layout from '../components/Layout';

export default function ConcursoAbrazosImposibles() {
  return (
    <Layout>
      <Head>
        <title>Bases del Concurso Abrazos Imposibles 2026 | Editorial Apapacho</title>
        <meta name="description" content="Concurso literario Abrazos Imposibles 2026. Bases oficiales, plazos, requisitos y formulario de inscripción para la colección de cuentos de Editorial Apapacho." />
      </Head>

      {/* SECCIÓN 1: HERO BANNER */}
      <section className="border-b border-gray-200 bg-brand-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
          
          {/* Textos del Banner */}
          <div className="p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4">
              Convocatoria Oficial
            </span>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter leading-[0.9] mb-6 text-brand-dark">
              Abrazos <br/>
              <span className="italic text-brand-gold">Imposibles</span> <br/>
              2026
            </h1>
            <p className="text-xl font-extralight font-texto italic leading-relaxed text-gray-700">
              Concurso literario para la selección de diez cuentos inéditos.
            </p>
          </div>

          {/* Imagen del Banner */}
          <div className="relative min-h-[300px] md:min-h-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img 
              src="/images/abrazos.jpg" 
              alt="Concurso Abrazos Imposibles 2026 - Editorial Apapacho" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: EXPLICACIÓN Y BASES */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto p-12 md:p-24 text-center">
          
          <h2 className="text-3xl md:text-5xl font-serif italic text-brand-dark mb-8">
            Sobre la convocatoria
          </h2>
          
          <div className="text-lg font-texto font-light text-gray-600 mb-12 text-left space-y-6">
            <p>
              Editorial Apapacho, con domicilio en São Paulo, Brasil, convoca a escritoras y escritores mayores de edad, nacidos o residentes en Latinoamérica, a participar en el <strong>Concurso Literario Abrazos Imposibles 2026</strong>, conforme a las Bases que rigen la presente convocatoria.
            </p>
            <p>
              El objeto de esta convocatoria es la selección de diez (10) cuentos inéditos en idioma español que desarrollen el <strong>"abrazo"</strong>, el <strong>"desapego"</strong> o el <strong>"abandono"</strong> como núcleo del conflicto narrativo. El abrazo —su presencia o su imposibilidad— deberá formar parte activa del enredo, no como elemento decorativo, sino como motor estructural de la historia.
            </p>
            <p className="italic">
              Los diez cuentos finalistas serán publicados en la colección digital <strong>Abrazos Imposibles — Colección de Cuentos</strong> en la plataforma de Editorial Apapacho, y recibirán diploma, difusión en redes sociales y entrevista en vivo en canales oficiales.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Fecha límite de envío: <strong>31 de agosto de 2026</strong>. Anuncio de finalistas: <strong>20 de noviembre de 2026</strong>. Publicación: <strong>15 de diciembre de 2026</strong>.
            </p>
          </div>

          {/* BOTONES DE ACCIÓN */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            
            {/* Botón Formulario de Inscripción */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5ao1_l6zqAN1GXUuyEarjr5WDjhhnDqMdjnROVWFrbIWa8w/viewform?usp=preview" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center text-xs font-bold uppercase tracking-[0.2em] border border-black px-10 py-5 bg-black text-white hover:bg-transparent hover:text-black transition duration-300"
            >
              Formulario de inscripción
            </a>
            
            {/* Botón Descargar Bases (PDF) */}
            <a 
              href="/pdfs/bases-concurso-2026.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-3 text-center text-xs font-bold uppercase tracking-[0.2em] border border-gray-300 px-10 py-5 text-gray-700 hover:border-brand-gold hover:text-brand-gold transition duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar Bases del Concurso (PDF)
            </a>

          </div>
        </div>
      </section>
    </Layout>
  );
}