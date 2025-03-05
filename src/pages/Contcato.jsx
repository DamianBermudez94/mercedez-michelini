import Navbar from "../components/NavBar";
import { ContactoForm } from "../components/ContactoForm";

export default function Contacto() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto my-10 p-4 text-center">
        <h1 className="text-4xl font-bold">Contáctanos</h1>
        <p className="mt-4 text-lg text-gray-600">
          Déjanos tu mensaje y nos pondremos en contacto contigo.
        </p>
        <ContactoForm />
      </section>
    </div>
  );
}
