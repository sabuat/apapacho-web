import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Exito() {
  const router = useRouter();
  // Leemos el parámetro "tipo" de la URL (ej: /exito?tipo=newsletter)
  const { tipo } = router.query;

  // Diccionario de mensajes según el origen
  const mensajes = {
    manuscrito: {
      titulo: "Manuscrito Recibido",
      texto: "Gracias por confiar en Apapacho. Nuestro equipo editorial leerá tu obra con el cuidado que merece. Ten paciencia, el buen café y la buena lectura toman tiempo. "
    },
    newsletter: {
      titulo: "¡Bienvenido al refugio!",
      texto: "Ya eres parte de la comunidad. Pronto recibirás noticias, novedades y textos exclusivos en tu buzón. Prometemos no hacer spam, solo literatura."
    },
    lista: {
      titulo: "¡Estás en la lista!",
      texto: "Te hemos anotado correctamente. Serás la primera persona en saber cuando este libro salga a la luz. ¡Prepara tu estantería!"
    },
    defecto: {
      titulo: "¡Gracias!",
      texto: "Hemos recibido tus datos correctamente. Pronto nos pondremos en contacto contigo."
    }
  };

  // Seleccionamos el mensaje correcto o usamos el de defecto
  const contenido = mensajes[tipo] || mensajes.defecto;

  return (
    <Layout>
      <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 bg-brand-bg">
        
        {/* Decoración */}
        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4 animate-pulse">
          Confirmación
        </span>

        {/* Título Dinámico */}
        <h1 className="text-5xl md:text-7xl font-serif text-brand-dark mb-6 leading-tight">
          {contenido.titulo}
        </h1>

        {/* Texto Dinámico */}
        <p className="font-texto text-xl text-gray-600 max-w-lg mb-12 font-light leading-relaxed">
          {contenido.texto}
        </p>

        <Link href="/" className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition shadow-lg">
          Volver al Inicio
        </Link>

      </div>
    </Layout>
  );
}