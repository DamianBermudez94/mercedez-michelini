import React from 'react'
import { useState } from 'react';
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
    <section className="h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Contáctanos</h2>
        <p className="text-center text-gray-600 mt-2">Déjanos un mensaje y te responderemos a la brevedad.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-lg mx-auto">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required className="border p-2 rounded" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" required className="border p-2 rounded" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" required className="border p-2 rounded" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
          {status && <p>{status}</p>}
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">Síguenos en nuestras redes</p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#" className="text-gray-700 hover:text-blue-600 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-400 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 text-2xl">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}




