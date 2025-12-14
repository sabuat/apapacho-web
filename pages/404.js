import Layout from '../components/Layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
      <div className="min-h-[80vh] bg-brand-bg flex flex-col items-center justify-center text-center px-6">
        
        {/* Número Gigante Estilizado */}
        <h1 className="text-[10rem] md:text-[14rem] font-serif leading-none text-brand-gold opacity-70 select-none">
          404
        </h1>

        {/* Mensaje Poético */}
        <div className="relative -mt-12 md:-mt-20">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark italic mb-6">
              Parece que te has perdido.
            </h2>
            <p className="font-texto text-lg md:text-xl text-gray-600 max-w-lg mx-auto font-light mb-12">
              Al igual que en la buena literatura, a veces tomamos un desvío hacia un lugar que no existe. No te preocupes, el camino de regreso siempre está abierto.
            </p>

            {/* Botón de Regreso */}
            <Link href="/" className="inline-block bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-gold transition duration-300">
              Volver a Casa
            </Link>
        </div>

      </div>
    </Layout>
  );
}