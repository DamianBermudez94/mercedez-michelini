import { useState } from 'react';
import MyMap from './MyMap';


export const ContactoForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://getform.io/f/bwnqrnga", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", message: "" }); // Limpia el formulario
    } else {
      setStatus("Hubo un error, intenta de nuevo.");
    }
  };



  return (
    <section>
      <div className="max-w-4xl mx-auto px-6 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-3 text-center text-card-text-color">Contáctanos</h2>
        <p className="text-center text-xl text-card-text-color mt-2">Déjanos un mensaje y te responderemos a la brevedad.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-lg mx-auto">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required className="w-full p-2 border border-nav-bg rounded outline-none transition-all duration-200 ease-out focus:border-nav-bg focus:ring-2 focus:ring-nav-bg placeholder-featured-title-color" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" required className="w-full p-2 border border-nav-bg rounded outline-none transition-all duration-200 ease-out focus:border-nav-bg focus:ring-2 focus:ring-nav-bg placeholder-featured-title-color" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" required className="w-full p-2 border border-nav-bg rounded outline-none transition-all duration-200 ease-out focus:border-nav-bg focus:ring-2 focus:ring-nav-bg placeholder-featured-title-color" />
          <button
            type="submit"
            className="bg-featured-properties-bg text-nav-bg p-2 rounded border border-nav-bg hover:text-text-color hover:bg-nav-bg hover:border-card-bg transition-all duration-200 ease-out"
          >
            Enviar
          </button>

          {status && <p>{status}</p>}
        </form>
      </div>
      <div className='max-w-4xl mx-auto mt-10 rounded-xl shadow-lg'>
        <MyMap />
      </div>
    </section>
  )
}




