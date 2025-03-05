import React from 'react'
import Navbar from './NavBar'

export default function Header()  {
  return (
    <header>
      <Navbar />
      <section className="h-[500px] bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: "url('/img/casa.jpg')" }}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Encuentra tu hogar ideal</h2>
          <p className="mt-4 text-lg">Propiedades exclusivas a los mejores precios.</p>
          <a href="#" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
            Ver Propiedades
          </a>
        </div>
      </section>
    </header>
  )
}
