import LogoImagen from '../assets/logo.webp';
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false); // Cierra el menú al cambiar de ruta
    }, [location.pathname]);


    return (
        <div className='bg-Background-color-nav flex items-center justify-between p-4'>
            <div className='flex items-center'>
                <a href="/home">
                    <img className='w-32 md:w-48 h-auto object-cover' src={LogoImagen} alt="Mercedes Michelini | Negocios inmobiliarios" />
                </a>
            </div>

            <nav className="relative" >
                <button
                    id="menuButton"
                    className="p-2 md:hidden text-Color-Text"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div id="menuIcon" className="flex flex-col gap-1">
                        <span
                            className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                        ></span>
                    </div>
                </button>
                <ul className={`absolute top-full left-1/2 -translate-x-1/2 z-10 bg-Background-color-header-top shadow-md text-Color-Text p-4 rounded-lg w-screen h-screen  md:static md:h-auto md:bg-transparent md:shadow-none md:flex md:space-x-6 md:w-auto ${menuOpen ? "block" : "hidden"} md:block`}>
                    <li><Link to="/home" className="block hover:underline">Inicio</Link></li>
                    <li><Link to="/propiedades" className="block hover:underline">Propiedades</Link></li>
                    <li><Link to="/acerca" className="block hover:underline">Quienes somos</Link></li>
                    <li><Link to="/contacto" className="block hover:underline">Contacto</Link></li>
                </ul>
            </nav>
        </div>

    );
}
