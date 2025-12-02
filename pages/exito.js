import Layout from '../components/Layout';
import Link from 'next/link';

export default function Exito() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-serif text-brand-dark mb-6">¡Recibido!</h1>
        <p className="text-xl font-texto text-gray-600 max-w-lg mb-12">
          Gracias por confiar en Apapacho. Hemos recibido tu manuscrito correctamente. 
          Nuestro equipo editorial lo leerá con el cuidado que merece.
        </p>
        <Link href="/" className="bg-brand-dark-blue text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition">
          Volver al Inicio
        </Link>
      </div>
    </Layout>
  );
}