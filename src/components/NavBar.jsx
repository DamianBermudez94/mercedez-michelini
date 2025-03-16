import LogoImagen from '../assets/logo.webp';
export default function Navbar() {
    return (
        <div className='bg-Background-color-nav flex justify-around p-4'>
            <div className='my-auto'>
                <a href="/home">
                    <img className='w-[70%] h-[70%] object-cover' src={LogoImagen} alt="Mercedes Michelini | Negocios inmobiliarios" />
                </a>
            </div>
            <nav className=" text-white p-4 hidden md:block" >
                <ul className="flex space-x-6">
                    <li><a href="/home" className="hover:underline">Inicio</a></li>
                    <li><a href="/propiedades" className="hover:underline">Propiedades</a></li>
                    <li><a href="/acerca" className="hover:underline">Quienes somos</a></li>
                    <li><a href="/contacto" className="hover:underline">Contacto</a></li>
                </ul>
            </nav>
        </div>

    );
}
