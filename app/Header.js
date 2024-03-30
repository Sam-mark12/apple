'use client'
import Link from 'next/link'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

const Header = () => {
  return (
    <header className=' sticky top-0 left-0 w-full backdrop-blur-sm bg-black text-white '>
        <div className="container mx-auto  gap-5 flex justify-between font-thin text-sm items-center ">
           
                <Link href='/'>
                  <img src="./assets/icon.svg" alt="icons" />
                </Link>
         
        
                <Link href='/store'>Store
                </Link>
                <Link href='/about'>Mac
                </Link>
                <Link href='/about'>Ipad
                </Link>
                <Link href='/about'>Iphone
                </Link>
                <Link href='/about'>Watch
                </Link>
                <Link href='/about'>AirPods
                </Link>
                <Link href='/about'>Tv & Home
                </Link>
                <Link href='/about'>Entertainment
                </Link>
                <Link href='/about'>Accessories
                </Link>
                <Link href='/about'>Support
                </Link>
                <Link href='/about'>
                  <BiSearch className='text-lg'/>
                </Link>
                <Link href='/about'>
                  <HiOutlineShoppingBag  className='text-lg'/>
                </Link>
            
        </div>
    </header>
  )
}

export default Header