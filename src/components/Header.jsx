import React from 'react'
import Navbar from './NavBar'
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

export default function Header()  {
  return (
    <header>
      <div className='flex flex-col md:flex-row justify-around gap-2 p-5 m-auto bg-Background-color-header-top'>
        <a href="" class="flex gap-3">
        <Mail color='white' />
        <span class='text-white'>michelini.mercedes@gmail.com</span>
        </a>
        <a href="" class="flex gap-3">
        <Phone color='white' />
        <span class='text-white'>+5492227576199</span>
        </a>
      </div>
      <Navbar />
    </header>
  )
}
