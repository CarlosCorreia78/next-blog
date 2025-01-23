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
    <Footer container className='flex flex-col  px-3 max-w-6xl mx-auto'>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>


        </div>
        <Footer.Divider className='border-t-4'/>
        
        
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