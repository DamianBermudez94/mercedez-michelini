import Header from "../components/Header";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios"
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <section className="w-full p-4 bg-Background-propiedades-destacada">
        <h2 className="text-3xl sm:text-4xl font-bold text-Color-title-destacada text-center pt-11">Propiedades Destacadas</h2>
        <p className="text-center pt-3 text-Color-title-destacada">Encontrá los últimos inmuebles destacados que tenemos para ofrecerte. Si buscas algo en particular, no dudes en ponerte en contacto</p>
        <div className="">
          <PropertyCard />
        </div>
      </section>
      <Servicios/>
    </div>
  );
}
