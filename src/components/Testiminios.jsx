import React from 'react'
import { UserRound } from 'lucide-react'
export const Testiminios = () => {
    return (
        <section className='p-20 max-w-3xl md:max-w-6xl mx-auto px-6 bg-Background-propiedades-destacada'>

            <h2 class="text-xl md:text-5xl font-bold text-center text-Text-card mb-14">Nuestros clientes</h2>
            
            <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                <div class="w-auto bg-Background-propiedades-destacada flex flex-col justify-center items-center p-6 rounded-xl shadow-md">
                    <div className='flex flex-col items-center'>
                        <UserRound className='w-[50px] h-[50px] text-Background-color-nav' />
                        <p class="text-yellow-500">★★★★★</p>
                    </div>
                    <p class="text-Text-card mt-4 text-center">Compré mi casa con esta inmobiliaria y fue la mejor decisión. Atención excelente y sin complicaciones.</p>
                </div>
                <div class="w-auto bg-Background-propiedades-destacada flex flex-col justify-center items-center p-6 rounded-xl shadow-md">
                    <div className='flex flex-col items-center'>
                        <UserRound className='w-[50px] h-[50px] text-Background-color-nav' />
                        <p class="text-yellow-500">★★★★★</p>
                    </div>
                    <p class="text-center mt-4 text-Text-card">Alquilé un departamento con ellos y me asesoraron en todo el proceso. 100% recomendados.</p>

                </div>
                <div class="w-auto  bg-Background-propiedades-destacada flex flex-col justify-center items-center p-6 rounded-xl shadow-md">
                    <div className='flex flex-col items-center'>
                        <UserRound className='w-[50px] h-[50px] text-Background-color-nav' />
                        <p class="text-yellow-500">★★★★★</p>
                    </div>
                    <p class="text-center mt-4 text-Text-card">Muy profesionales y atentos. Volvería a confiar en ellos para futuras inversiones.</p>

                </div>
            </div>

        </section>
    )
}
