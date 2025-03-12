import React from 'react'

export const Acerca = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900">Sobre Nosotros</h2>
                <p className="text-center text-gray-600 mt-2">Más de 10 años de experiencia en la compra, venta y alquiler de propiedades en Lobos, Buenos Aires.</p>

                <div className="mt-8 grid md:grid-cols-2 gap-12">

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Quiénes Somos</h3>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Somos una inmobiliaria con más de 10 años de experiencia en el mercado de Lobos. Nos especializamos en la venta de lotes, casas y alquileres. Nuestro equipo de profesionales está comprometido en ofrecerte un servicio personalizado y transparente para ayudarte a encontrar la propiedad ideal.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Nuestra Misión</h3>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            En nuestra inmobiliaria, nuestra misión es brindarte las mejores opciones en el mercado inmobiliario de Lobos. Te ofrecemos asesoramiento experto para la compra y alquiler de propiedades, garantizando siempre la satisfacción de nuestros clientes con servicios confiables y cercanos.
                        </p>
                    </div>
                </div>


                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">Nuestros Servicios</h3>
                    <div className="mt-6 grid md:grid-cols-3 gap-6">

                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-gray-800">Venta de Lotes</h4>
                            <p className="text-gray-600 mt-2">Ofrecemos una variada selección de lotes para la construcción de tu futuro hogar en Lobos y alrededores.</p>
                        </div>


                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-gray-800">Venta de Casas</h4>
                            <p className="text-gray-600 mt-2">Encuentra tu hogar ideal con nosotros. Casas disponibles para venta, con opciones que se adaptan a diferentes necesidades.</p>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-gray-800">Alquileres</h4>
                            <p className="text-gray-600 mt-2">Si buscas alquilar una propiedad en Lobos, tenemos una amplia variedad de opciones, con condiciones flexibles y accesibles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
