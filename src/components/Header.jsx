import React from 'react'
import Navbar from './NavBar'
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header>
      <div className='flex flex-col items-center md:flex-row justify-around gap-2 p-5 m-auto bg-header-bg'>
        <a href="mailto:michelini.mercedes@gamil.com"
          target="_blank" className="flex gap-3">
          <Mail className='text-card-border-color' />
          <span className='text-white'>michelini.mercedes@gmail.com</span>
        </a>
        <a href="https://wa.me/+5492227576199?text=Hola,%20quiero%20más%20información%20sobre%20tu%20servicio.
" className="flex gap-3">
          <Phone className='text-card-border-color' />
          <span className='text-white'>+5492227576199</span>
        </a>
      </div>
      <Navbar />
    </header>
  )
}
