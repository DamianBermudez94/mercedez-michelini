import misionImage from '../assets/llaves.jpg';
import familiaImage from '../assets/familia.jpg';

export const Acerca = () => {
    return (
        <section className="bg-featured-properties-bg py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl p-3 md:text-5xl font-bold text-center text-card-text-color">Sobre Nosotros</h2>
                <p className="text-center text-sl md:text-xl text-card-text-color mt-2 p-4">Más de 10 años de experiencia en la compra, venta y alquiler de propiedades en Lobos, Buenos Aires.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 pt-10'>
                    <img src={misionImage} alt='Mercedes Michelini | Negocios inmobiliarios ' className='w-full h-[300px] object-cover rounded-md' />
                    <div className='md:mx-8'>
                        <h3 className="text-3xl text-card-text-color font-semibold ">Quiénes Somos</h3>
                        <p className="mt-4 text-card-text-color text-xl leading-relaxed">
                            Somos una inmobiliaria con más de 10 años de experiencia en el mercado de Lobos. Nos especializamos en la venta de lotes, casas y alquileres. Nuestro equipo de profesionales está comprometido en ofrecerte un servicio personalizado y transparente para ayudarte a encontrar la propiedad ideal.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 border-t mt-10 pt-20'>
                    <div className='md:mx-8'>
                        <h3 className="text-3xl font-semibold text-card-text-color">Nuestra Misión</h3>
                        <p className="mt-4 text-card-text-color text-xl leading-relaxed">
                            En nuestra inmobiliaria, nuestra misión es brindarte las mejores opciones en el mercado inmobiliario de Lobos. Te ofrecemos asesoramiento experto para la compra y alquiler de propiedades, garantizando siempre la satisfacción de nuestros clientes con servicios confiables y cercanos.
                        </p>
                    </div>
                    <img src={familiaImage} alt="Mercedes Michelini | Negocios inmobiliarios" className='w-full h-[300px] rounded-md object-cover' />

                </div>
            </div>
        </section>

    )
}
