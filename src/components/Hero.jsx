import bannerImage from '../assets/imagen-banner.jpg';

export default function Hero() {
  return (
    <section className="relative h-[500px] bg-cover bg-center flex items-center text-Color-Text p-5" 
      style={{ backgroundImage: `url(${bannerImage})` }}>
         <div className="absolute inset-0 bg-black/75"></div>
      <div className="md:w-3/5 m-auto absolute inset-0 flex items-center flex-col justify-center text-center p-5">
        <h1 className="text-3xl md:text-5xl font-bold text-text-color">Encuentra la propiedad de tus sueños con nosotros</h1>
        <p className="mt-4 text-xl text-text-color">Con mas de 10 años de experiencia en el mercado..</p>
        <a href="/propiedades" className="mt-6 inline-block border border-text-color text-text-color px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-nav-bg duration-300 cursor-pointer">
          Ver Propiedades
        </a>
      </div>
    </section> 
  );
}
