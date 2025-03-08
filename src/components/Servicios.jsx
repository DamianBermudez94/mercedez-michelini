import bannerImage from '../assets/imagen-parallax.jpg';
import iconCompra from '../assets/icon-compra.webp';
import iconVenta from '../assets/icon-venta.webp';
import iconAlquiler from '../assets/icon-alquiler.webp';
import iconBienes from '../assets/bienes.png';


export default function Home() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat bg-fixed w-full h-[500px]"
            style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="absolute inset-0 flex items-center flex-col justify-center text-center">
                <h2 className="text-4xl font-bold text-Color-Text">Nuestros servicios</h2>
                <p className='text-Color-Text'>Conocé mas acerca de nuestro trabajo y experiencia</p>
                <div className='w-full flex flex-col justify-around gap-7 md:flex-row pt-16'>
                    <div>
                        <img src={iconBienes} alt="" className='w-[100px] h-[100px]' />
                        <p className='text-center text-2xl pt-2 text-Color-Text'>Alquileres</p>
                    </div>
                    <div>
                        <img src={iconVenta} alt="" className='w-[100px] h-[100px]' />
                        <p className='text-center text-2xl pt-2 text-Color-Text'>Ventas</p>
                    </div>
                    <div>
                        <img src={iconCompra} alt="" className='w-[100px] h-[100px]' />
                        <p className='text-center text-2xl pt-2 text-Color-Text'>Compras</p>
                    </div>
                </div>
            </div>
        </section>
    );
}