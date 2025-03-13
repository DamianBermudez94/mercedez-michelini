import bannerImage from '../assets/imagen-banner.jpg';

export default function Hero() {
  return (
    <section className="relative h-[500px] bg-cover bg-center flex items-center text-Color-Text p-5" 
      style={{ backgroundImage: `url(${bannerImage})` }}>
         <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 flex items-center flex-col justify-center text-center p-5">
        <h1 className="text-4xl font-bold">Encuentra la propiedad de tus sueños con nosotros</h1>
        <p className="mt-4 text-lg">Con mas de 10 años de experiencia en el mercado..</p>
        <a href="/propiedades" className="mt-6 inline-block bg-Background-color-nav text-Color-Text px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-Background-color-nav duration-300">
          Ver Propiedades
        </a>
      </div>
    </section> 
  );
}
