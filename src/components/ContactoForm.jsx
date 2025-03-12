import React from 'react'

export const ContactoForm = () => {
  return (
    <section class="h-screen bg-gray-100 py-12">
      <div class="max-w-4xl mx-auto px-6 bg-white p-8 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold text-center text-gray-900">Contáctanos</h2>
        <p class="text-center text-gray-600 mt-2">Déjanos un mensaje y te responderemos a la brevedad.</p>

        <form class="mt-6 space-y-4">
          <div>
            <label for="name" class="block text-gray-700 font-medium">Nombre</label>
            <input type="text" id="name" name="name" required
              class="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div>
            <label for="email" class="block text-gray-700 font-medium">Correo Electrónico</label>
            <input type="email" id="email" name="email" required
              class="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div>
            <label for="message" class="block text-gray-700 font-medium">Mensaje</label>
            <textarea id="message" name="message" rows="4" required
              class="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          </div>

          <button type="submit"
            class="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Enviar Mensaje
          </button>
        </form>


        <div class="mt-6 text-center">
          <p class="text-gray-600">Síguenos en nuestras redes</p>
          <div class="flex justify-center space-x-4 mt-3">
            <a href="#" class="text-gray-700 hover:text-blue-600 text-2xl">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-gray-700 hover:text-blue-400 text-2xl">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-700 hover:text-pink-500 text-2xl">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-700 hover:text-green-500 text-2xl">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}
