import React from 'react'

export const Testiminios = () => {
    return (
        <section  className='p-12'>
            <div class="max-w-6xl mx-auto px-6">
                <h2 class="text-4xl font-bold text-center text-gray-900">Lo que dicen nuestros clientes</h2>

                <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div class="bg-white p-6 rounded-xl shadow-md">
                        <p class="mt-4 text-gray-600">"Compré mi casa con esta inmobiliaria y fue la mejor decisión. Atención excelente y sin complicaciones."</p>
                    </div>

                    <div class="bg-white p-6 rounded-xl shadow-md">
                        <p class="mt-4 text-gray-600">"Alquilé un departamento con ellos y me asesoraron en todo el proceso. 100% recomendados."</p>
                    </div>


                    <div class="bg-white p-6 rounded-xl shadow-md">
                        <p class="mt-4 text-gray-600">"Muy profesionales y atentos. Volvería a confiar en ellos para futuras inversiones."</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
