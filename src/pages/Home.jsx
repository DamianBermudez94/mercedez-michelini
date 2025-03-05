import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="container mx-auto my-10 p-4">
        <h2 className="text-3xl font-bold text-center">Propiedades Destacadas</h2>
        <div className="flex gap-6 mt-6">
          <PropertyCard />
        </div>
      </section>
    </div>
  );
}
