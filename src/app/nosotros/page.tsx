import Image from 'next/image';
import { StatsSection } from '@/components/ui/stats-section';

export default function NosotrosPage() {
  const stats = [
    { value: '20,000+', label: 'Programas Emitidos' },
    { value: '5,000,000+', label: 'Audiencia Alcanzada' },
    { value: '300+', label: 'Premios Ganados' },
    { value: '200+', label: 'Colaboradores Activos' },
  ];

  const teamMembers = [
    { name: 'Javier Augusto Blandon', role: 'Director General' },
    { name: 'Daniel Estiven Gonzales', role: 'Productor y Administrador' },
    { name: 'Jaime Agudelo', role: 'Presentador General' },
    { name: 'Santiago Marin', role: 'Productor y Editor' },
    { name: 'Brian Builes', role: 'Productor y Editor' },
  ];

  const valuesItems = [
    { title: 'Innovación Creativa', description: 'Exploramos constantemente nuevas formas de contar historias y conectar con nuestra audiencia.' },
    { title: 'Compromiso Social', description: 'Nos dedicamos a reflejar las realidades y necesidades de nuestra comunidad.' },
    { title: 'Calidad en Producción', description: 'Cada programa es creado con el más alto nivel de profesionalismo y atención al detalle.' },
    { title: 'Responsabilidad Ambiental', description: 'Promovemos prácticas sostenibles en todas nuestras operaciones.' },
    { title: 'Diversidad e Inclusión', description: 'Celebramos la diversidad en nuestras historias y en nuestro equipo.' },
    { title: 'Colaboración Estratégica', description: 'Trabajamos con socios clave para maximizar nuestro impacto.' },
  ];

  const contactInfo = [
    { title: 'Horario Oficina Principal', info: 'Lunes-Viernes 8:00 am a 5:00 pm - Sábados 7:00 am a 5:00 pm' },
    { title: 'Horario Canal Comunicactivo', info: 'Lunes-Viernes 9:00 am a 5:00 pm' },
    { title: 'Nuestra Dirección', info: 'Parque Principal' },
    { title: 'Contacto Serviyol / Contacto Canal Comunicactivo', info: 'Quien Sabe / Quien Sabe' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-4">
            <span className="text-red-600 font-medium">
              Conectando Historias, Inspirando Generaciones
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Siernet - Nuestro Legado
          </h1>
          <p className="text-xl md:text-2xl text-zinc-700 max-w-4xl">
            Bienvenido a la página 'Nosotros' de Sirnet. Descubre cómo nuestro canal ha evolucionado desde sus inicios, marcando momentos históricos en la televisión y reflejando los valores que nos guían.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-4">
                <span className="text-red-600 font-medium">Nuestra Historia</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Compromiso con la Excelencia</h2>
              <p className="text-lg text-zinc-700 mb-6">
                Desde nuestra fundación, Sirnet se ha dedicado a ofrecer contenido de calidad que conecta con nuestra audiencia. Cada programa refleja nuestro compromiso con la creatividad, la innovación y los valores que nos definen.
              </p>
              <p className="text-lg text-zinc-700 mb-6">
                Sirnet nació con la visión de ser un canal que no solo entretiene, sino que también educa e inspira. A lo largo de los años, hemos crecido gracias a nuestra audiencia y colaboradores, manteniendo siempre nuestra misión de ser un puente entre culturas y generaciones.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 text-red-600 font-bold">•</div>
                  <div><span className="font-bold">Programación Variada</span> - Noticias, entretenimiento y contenido educativo.</div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-red-600 font-bold">•</div>
                  <div><span className="font-bold">Conexión con la Audiencia</span> - Reflejo de las necesidades de la comunidad.</div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-red-600 font-bold">•</div>
                  <div><span className="font-bold">Reconocimientos Internacionales</span> - Premios por innovación y calidad.</div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/nosotros-bg.webp"
                alt="Historia de Sirnet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN DE IMÁGENES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="text-red-600 font-medium">Nuestra Evolución</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Momentos que nos definen</h2>
            <p className="text-zinc-700 text-lg max-w-3xl mx-auto mt-4">
              A lo largo de los años, hemos compartido innumerables momentos que reflejan nuestro crecimiento, creatividad y compromiso con la comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['nosotros1.jpg', 'nosotros2.jpg', 'nosotros3.jpg', 'nosotros4.jpg', 'nosotros5.jpg', 'nosotros6.jpg'].map((img, idx) => (
              <div key={idx} className="relative w-full h-64 rounded-xl overflow-hidden">
                <Image
                  src={`/images/${img}`}
                  alt={`Foto histórica ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovación */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Innovación Constante</h2>
          <p className="text-lg text-zinc-700 max-w-3xl mx-auto">
            Sirnet sigue evolucionando para adaptarse a las nuevas tecnologías y tendencias, brindando una experiencia única a nuestros espectadores.
          </p>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Conoce al Equipo Detrás de Sirnet</h2>
          <p className="text-lg text-zinc-700 max-w-3xl mx-auto text-center mb-12">
            Nuestro equipo está compuesto por profesionales apasionados que trabajan incansablemente para ofrecer contenido excepcional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-zinc-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empresas Socias */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">Empresas Socias</h2>
    <p className="text-lg text-zinc-700 max-w-3xl mx-auto text-center mb-12">
      Estas organizaciones confían y colaboran con Sirnet para llevar contenidos de calidad a nuestra audiencia.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
      <div className="w-40 h-24 relative">
        <Image
          src="/images/empresa1.png"
          alt="Empresa 1"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-40 h-24 relative">
        <Image
          src="/images/empresa2.png"
          alt="Empresa 2"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-40 h-24 relative">
        <Image
          src="/images/empresa3.png"
          alt="Empresa 3"
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
</section>


      {/* Valores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Valores Fundamentales</h2>
          <p className="text-lg text-zinc-700 max-w-3xl mx-auto text-center mb-12">
            En Sirnet, nuestros valores son la base de todo lo que hacemos. Nos esforzamos por ofrecer contenido que inspire, eduque y conecte a las personas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuesItems.map((value) => (
              <div key={value.title} className="p-6 border border-zinc-100 rounded-lg hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-zinc-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <StatsSection stats={stats} className="bg-zinc-900 text-white" />

      {/* Contacto */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Comunícate con Sirnet</h2>
          <p className="text-lg text-zinc-700 max-w-3xl mx-auto text-center mb-12">
            Estamos aquí para responder tus preguntas y escuchar tus ideas. Contáctanos y forma parte de nuestra comunidad.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                <p className="text-zinc-600">{info.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
