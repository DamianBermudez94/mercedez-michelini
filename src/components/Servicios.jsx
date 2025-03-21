import bannerImage from '../assets/imagen-parallax.jpg';
import iconCompra from '../assets/compra.webp';
import iconVenta from '../assets/venta.webp';
import iconAlquiler from '../assets/alquiler.webp';


export default function Home() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat bg-fixed w-full h-[800px] md:h-[600px]"
            style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="absolute inset-0 bg-black/75"></div>
            <div className="absolute inset-0 flex items-center flex-col justify-center text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-text-color">Nuestros servicios</h2>
                <p className='text-text-color text-sl mt-3'>Conocé mas acerca de nuestro trabajo y experiencia</p>
                <div className='w-full flex flex-col items-center justify-around md:flex-row md:max-w-[1300px] pt-16'>
                    <div className='p-5'>
                        <img src={iconAlquiler} alt="" className='w-[100px] h-[100px]' />
                        <p className='text-center text-2xl pt-2 text-text-color'>Alquileres</p>
                    </div>
                    <div className='p-5'>
                        <img src={iconVenta} alt="" className='w-[100px] h-[100px]' />
                        <p className='text-center text-2xl pt-2 text-text-color'>Ventas</p>
                    </div>
                    <div className='p-5'>
                        <img src={iconCompra} alt="" className='w-[100px] h-[100px]' />
                        <p className='text-center text-2xl pt-2 text-text-color'>Compras</p>
                    </div>
                </div>
            </div>
        </section>
    );
}