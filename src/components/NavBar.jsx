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
        <div className='bg-nav-bg flex items-center justify-around p-4'>
            <div className='flex items-center'>
                <a href="/home">
                    <img className='w-32 md:w-48 h-auto object-cover' src={LogoImagen} alt="Mercedes Michelini | Negocios inmobiliarios" />
                </a>
            </div>

            <nav className="relative" >
                <button
                    id="menuButton"
                    className="p-2 md:hidden text-text-color"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div id="menuIcon" className="flex flex-col gap-1">
                        <span
                            className={`block w-6 h-0.5 bg-text-color transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-text-color transition-opacity ${menuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-text-color transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                        ></span>
                    </div>
                </button>

                <ul className={`text-white bg-header-bg fixed top-40 md:top-0 inset-0 flex flex-col items-center justify-center gap-6 md:relative md:h-auto md:w-auto md:bg-transparent md:translate-x-0 md:flex md:flex-row  z-50 ${menuOpen ? "flex" : "hidden"}`}>
                    <li><Link to="/home" className={`block hover:text-card-border-color transition-all ${location.pathname === "/home" ? "text-card-border-color font-bold" : ""}`}>Inicio</Link></li>
                    <li><Link to="/propiedades" className={`block hover:text-card-border-color transition-all ${location.pathname === "/propiedades" ? "text-card-border-color font-bold" : ""}`}>Propiedades</Link></li>
                    <li><Link to="/acerca" className={`block hover:text-card-border-color transition-all ${location.pathname === "/acerca" ? "text-card-border-color font-bold" : ""}`}>Quienes somos</Link></li>
                    <li><Link to="/contacto" className={`block hover:text-card-border-color transition-all ${location.pathname === "/contacto" ? "text-card-border-color font-bold" : ""}`}>Contacto</Link></li>
                </ul>


            </nav>
        </div>

    );
}
