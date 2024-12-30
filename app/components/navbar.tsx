'use client';

import Image from 'next/image';
import Link from 'next/link';
import HamBurger from './button';
import Menu from './menu';
import { useEffect } from 'react';


function NavBar() {
  return (
    <nav className='container relative mx-auto p-6'>
      {/* flex splits items to the sides... just-between margintop/bottom-6*/}
      <div className='flex items-center justify-between space-x-20 my-6'>
        {/* logo */}
        <div className='z-10 lg:mx-0'>
          <Image
            src='/images/happyface-grok.jpg'
            alt='Logo'
            width={150}
            height={150}
            className='md:rounded-lg rounded-md'
          />
        </div>
        {/* menu */}
        <div className='hidden items-center space-x-10 uppercase text-gray-600 md:flex'>
          <Link
            href='#features'
            className='tracking-widest hover:text-gray-800'
          >
            Features
          </Link>
          <Link
            href='#download'
            className='tracking-widest hover:text-gray-800'
          >
            Download
          </Link>
          <Link href='#faq' className='tracking-widest hover:text-gray-800'>
            FAQ
          </Link>
          <Link
            href='https://www.nicholasquiroz.me'
            target='_blank'
            className='py-2 px-6 tracking-widest bg-gray-400 rounded-lg hover:text-gray-800 hover:bg-gray-200'
          >
            Portfolio
          </Link>
        </div>
        <HamBurger />
      </div>
      <Menu />
    </nav>
  );
}
export default NavBar;
