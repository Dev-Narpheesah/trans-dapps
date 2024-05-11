import React from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutineClose} from 'react-icons/ai'
import Logo from '../assets/logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
     <div>
       <Image
       src={Logo}
       alt='logo'
       className='w-32 cursor-pointer'/>
     </div>
    </nav>
  )
}

export default Navbar
