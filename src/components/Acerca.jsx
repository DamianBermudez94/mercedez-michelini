import misionImage from '../assets/llaves.jpg';
import familiaImage from '../assets/familia.jpg';

export const Acerca = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl font-bold text-center text-gray-900">Sobre Nosotros</h2>
                <p className="text-center text-xl text-Text-card mt-2 p-4">Más de 10 años de experiencia en la compra, venta y alquiler de propiedades en Lobos, Buenos Aires.</p> 
                <div className='grid grid-cols-2 gap-2 py-12'>
                    <img src={misionImage} alt='Mercedes Michelini | Negocios inmobiliarios ' className='w-full h-[300px] object-cover rounded-md' />
                    <div className='px-4'>
                        <h3 className="text-3xl font-semibold text-gray-800">Quiénes Somos</h3>
                        <p className="mt-4 text-Text-card text-xl leading-relaxed">
                            Somos una inmobiliaria con más de 10 años de experiencia en el mercado de Lobos. Nos especializamos en la venta de lotes, casas y alquileres. Nuestro equipo de profesionales está comprometido en ofrecerte un servicio personalizado y transparente para ayudarte a encontrar la propiedad ideal.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    
                    <div className='px-4'>
                        <h3 className="text-3xl font-semibold text-gray-800">Nuestra Misión</h3>
                        <p className="mt-4 text-Text-card text-xl leading-relaxed">
                            En nuestra inmobiliaria, nuestra misión es brindarte las mejores opciones en el mercado inmobiliario de Lobos. Te ofrecemos asesoramiento experto para la compra y alquiler de propiedades, garantizando siempre la satisfacción de nuestros clientes con servicios confiables y cercanos.
                        </p>
                    </div>
                    <img src={familiaImage} alt="Mercedes Michelini | Negocios inmobiliarios"  className='w-full h-[300px] rounded-md object-cover' />

                </div>
            </div>
        </section>

    )
}
