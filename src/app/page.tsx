import Image from "next/image";
import Link from "next/link";
import { StatsSection } from "@/components/ui/stats-section";
import AdModal from "@/components/ui/AdModal";


export default function Home() {
  const stats = [
    { value: "24/7", label: "Programas en vivo" },
    { value: "Millones", label: "Audiencia global" },
    { value: "10+", label: "Años de experiencia" },
    { value: "Global", label: "Conexión social" },
  ];

  const newsItems = [
    {
      title: "Cobertura exclusiva de eventos locales",
      date: "Octubre 15, 2023",
      description: "Descubre cómo estamos llevando los eventos más importantes directamente a tu pantalla.",
    },
    {
      title: "Actualizaciones en tiempo real",
      date: "Octubre 14, 2023",
      description: "Información al instante para mantenerte siempre al día.",
    },
    {
      title: "Entrevistas exclusivas con líderes locales",
      date: "Octubre 13, 2023",
      description: "Conoce de cerca a las personas que están marcando la diferencia en nuestra comunidad.",
    },
    {
      title: "Historias que inspiran",
      date: "Octubre 12, 2023",
      description: "Explora historias conmovedoras y motivadoras de nuestra gente.",
    },
  ];

  return (
    <div className="min-h-screen">
      <AdModal />
      {/* Hero Section */}
      <section className="relative bg-white pt-10 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bienvenido a Sirnet
            </h1>
            <p className="text-lg mb-8 text-zinc-700">
              Descubre una programación vibrante, noticias de última hora y contenido
              exclusivo que conecta contigo. Nuestro objetivo es informarte, entretenerte e
              inspirarte.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#explore"
                className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition"
              >
                Explorar ahora
              </Link>
              <Link
                href="/programacion"
                className="text-zinc-800 hover:text-zinc-600 px-8 py-3 transition flex items-center"
              >
                Ver programación <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-xl shadow-xl overflow-hidden">
  <Image
    src="/images/presenter.webp"
    alt="Presentadora de Sirnet"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
  />
</div>


        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} className="bg-zinc-50" />

      

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Conectando contigo cada día</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Descubre lo mejor de Sirnet. Explora nuestra programación destacada,
            las últimas noticias y la visión que impulsa nuestro canal.
          </p>
          <Link
            href="/contactenos"
            className="bg-white text-red-600 px-8 py-3 rounded-md font-medium hover:bg-zinc-100 transition inline-block"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}
