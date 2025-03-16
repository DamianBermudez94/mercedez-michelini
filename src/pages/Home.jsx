import Header from "../components/Header";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios"
import PropertyCard from "../components/PropertyCard";
import { Testiminios } from "../components/Testiminios";

export default function Home() {
  return (
    <main>
      <Hero/>
      <section className="w-full p-4 md:p-12 bg-Background-propiedades-destacada">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center pt-11">Propiedades Destacadas</h2>
        <p className="text-center pt-3 text-xl text-Color-title-destacada">Encontrá los últimos inmuebles destacados que tenemos para ofrecerte. Si buscas algo en particular, no dudes en ponerte en contacto</p>
        <div>
          <PropertyCard />
        </div>
      </section>
      <Servicios/>
      <Testiminios/>
    </main>
  );
}
