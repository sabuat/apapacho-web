import Layout from '../components/Layout';
import Link from 'next/link';

// Estos datos son solo para la VISTA PREVIA (la tarjeta pequeña)
// El enlace 'url' debe coincidir con el nombre del archivo que crearemos en el Paso 2.
const autores = [
  { 
    nombre: "Sabuat Urbina Ribeiro", 
    rol: "Escritor & Editor",
    bio: "Especialista en realismo mágico y narrativas que exploran la escrita migratoria.", 
    img: "/images/sabuat.png", 
    url: "/autores/sabuat-urbina-ribeiro"
  },
  { 
    nombre: "Erika Villarroel", 
    rol: "Novela Juvenil",
    bio: "Creando mundos donde la fantasía y la psique femenina colisionan.", 
    img: "/images/erika.jpg",
    url: "/autores/erika-villarroel" 
  },
];

export default function Autores() {
  return (
    <Layout>
       <div className="bg-white min-h-screen">
        
        {/* Cabecera Minimalista */}
        <div className="pt-12 pb-12 px-6 md:px-12 text-center border-b border-gray-200">
          <h1 className="text-5xl md:text-7xl font-serif text-brand-blue mb-4">Autores</h1>
          <p className="text-xl font-texto text-gray-600 italic">Nuestros verdaderos protagonistas</p>
        </div>

        {/* Grilla estilo Moero Articles (3 Columnas) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            
            {autores.map((autor, index) => (
              <div key={index} className="group flex flex-col items-start">
                
                {/* 1. Imagen (Aspecto vertical 4:5, muy elegante) */}
                <Link href={autor.url} className="w-full aspect-[4/5] bg-gray-100 overflow-hidden mb-6 relative">
                   <img src={autor.img} alt={autor.nombre} className="w-full h-full object-cover transition duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                </Link>

                {/* 2. Rol / Categoría */}
                <span className="text-[12px] font-bold uppercase tracking-widest text-brand-blue mb-2">
                  {autor.rol}
                </span>

                {/* 3. Nombre (Link) */}
                <Link href={autor.url}>
                  <h2 className="text-2xl italic font-serif text-brand-dark mb-3 group-hover:text-brand-red transition">
                    {autor.nombre}
                  </h2>
                </Link>

                {/* 4. Bio corta */}
                <p className="font-texto text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                  {autor.bio}
                </p>

                {/* 5. Botón "Saber más" */}
                <Link href={autor.url} className="text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-black hover:text-brand-blue transition">
                   Leer Perfil Completo
                </Link>

              </div>
            ))}

          </div>
        </div>
      </div>
    </Layout>
  );
}