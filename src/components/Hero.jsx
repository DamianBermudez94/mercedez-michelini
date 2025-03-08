import bannerImage from '../assets/imagen-banner.jpg';

export default function Hero() {
  return (
    <section className="relative h-[500px] bg-cover bg-center flex items-center text-white" 
      style={{ backgroundImage: `url(${bannerImage})` }}>
         <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 flex items-center flex-col justify-center text-center ">
        <h2 className="text-4xl font-bold">Encuentra tu hogar ideal</h2>
        <p className="mt-4 text-lg">Propiedades exclusivas a los mejores precios.</p>
        <a href="/propiedades" className="mt-6 inline-block bg-Background-color-nav text-Color-Text px-6 py-3 rounded-lg font-semibold">
          Ver Propiedades
        </a>
      </div>
    </section> 
  );
}
