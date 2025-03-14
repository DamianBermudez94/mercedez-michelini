import React from 'react'

export const Testiminios = () => {
    return (
        <section className='p-20 max-w-3xl md:max-w-6xl mx-auto px-6 bg-Background-propiedades-destacada'>

            <h2 class="text-4xl font-bold text-center text-Text-card mb-14">Nuestros clientes</h2>

            <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                <div class="h-[200px] relative bg-Background-propiedades-destacada flex justify-center items-center p-6 rounded-xl shadow-md">
                    <p class=" px-8 m-auto text-gray-600 overflow-hidden">Compré mi casa con esta inmobiliaria y fue la mejor decisión. Atención excelente y sin complicaciones.</p>
                </div>
                <div class="w-auto h-[200px] relative bg-Background-propiedades-destacada flex justify-center items-center p-6 rounded-xl shadow-md">

                    <p class=" px-8 m-auto text-gray-600 overflow-hidden">Alquilé un departamento con ellos y me asesoraron en todo el proceso. 100% recomendados.</p>

                </div>
                <div class="w-auto h-[200px] relative bg-Background-propiedades-destacada flex justify-center items-center p-6 rounded-xl shadow-md">
                    <p class="px-8 m-auto text-gray-600 overflow-hidden">Muy profesionales y atentos. Volvería a confiar en ellos para futuras inversiones.</p>
                </div>
            </div>

        </section>
    )
}
