'use client';

import { Footer } from 'flowbite-react';
import Link from 'next/link';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              href='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-br from-green-400 to-cyan-600 rounded-lg text-white'>
              Fused Realities
              </span>
    
            </Link>
          </div>

        </div>
        <Footer.Divider />
        
        
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            a href='Mailto:cgi.carlos@gmail.com?Subject=Blog Contact'
            by="cgi.carlos@gmail.com"
            year={new Date().getFullYear()}
          />

          
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />

          </div>
        </div>
      </div>
    </Footer>
  );
}