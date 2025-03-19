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
        <div className='bg-Background-color-nav flex justify-around p-4'>
            <div className='my-auto'>
                <a href="/home">
                    <img className='w-[70%] h-[70%] object-cover' src={LogoImagen} alt="Mercedes Michelini | Negocios inmobiliarios" />
                </a>
            </div>

            <nav className="" >
                <button
                    id="menuButton"
                    className="p-2"
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
                <ul className={`absolute top-full left-0 bg-white w-full ${menuOpen ? "block" : "hidden"} md:block`}>
                    <Link to="/home" data-section="section1" className="hover:underline">Inicio</Link>
                    <Link to="/propiedades" data-section="section2" className="hover:underline">Propiedades</Link>
                    <Link to="/acerca" data-section="section3" className="hover:underline">Quienes somos</Link>
                    <Link to="/contacto" data-section="section4" className="hover:underline">Contacto</Link>
                </ul>
            </nav>
        </div>

    );
}
