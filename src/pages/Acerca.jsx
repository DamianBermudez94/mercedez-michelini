import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto my-10 p-4 text-center">
        <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
        <p className="mt-4 text-lg text-gray-600">
          Somos una inmobiliaria con más de 10 años de experiencia en la venta y alquiler de propiedades.
        </p>
      </section>
    </div>
  );
}
