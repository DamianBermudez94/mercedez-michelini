import LogoImagen from '../assets/logo.webp';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
export const Footer = () => {
  return (
    <footer className="bg-header-bg text-white text-center p-14 flex flex-col items-center">
      <div className='my-auto p-5'>
        <a href="/home" className='flex justify-center items-center'>
          <img className='w-32 md:w-48 h-auto object-cover' src={LogoImagen} alt="Mercedes Michelini | Negocios inmobiliarios" />
        </a>
      </div>
      <div className='flex flex-col items-center md:flex-row justify-around gap-8 p-5 m-auto '>
        <a href="mailto:michelini.mercedes@gamil.com"
          target="_blank" className="flex gap-2">
          <Mail className='text-card-border-color' />
          <p className='text-white'>michelini.mercedes@gmail.com</p>
        </a>
        <a href="https://wa.me/+5492227576199?text=Hola,%20quiero%20más%20información%20sobre%20tu%20servicio.
   " className="flex gap-2">
          <Phone className='text-card-border-color' />
          <p className='text-white'>+5492227576199</p>
        </a>
        <span className='flex gap-2'>
          <MapPin className='text-card-border-color' />
          <p>Lobos - Provincia de Buenos Aires - Argentina</p>
        </span>


      </div>
      <p className='text-Color-Text text-xs'>&copy; 2025 <a href="/inicio" className='text-card-border-color font-bold text-xl mx-1'>Mercedes Michelini | Negocios inmobiliarios.</a> Todos los derechos reservados.</p>
    </footer>
  );



}
