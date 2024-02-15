"use client"
// import Link from 'next/link'
import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import './navbar.css'

function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };
  return (
    <div className='bg-zinc-500 rounded-full pt-2 pb-2 pl-8 pr-8 fixed z-50 hidden lg:block'>
      <div className='flex flex-row gap-8 text-white text-2xl'>
        <div className='navitem active'>
          <Link to='home' smooth={true}
            offset={-100}
            spy={true}
            duration={500} >Home</Link>
        </div>
        <div className='navitem'>
          <Link to='about' smooth={true}
            offset={-100}
            spy={true}
            duration={500} >
            About
          </Link>
        </div>
        <div className='navitem'>
          <Link to='skills' smooth={true}
            offset={-100}
            spy={true}
            duration={500}>Skills</Link>
        </div>
        <div className='navitem'>
          <Link to='projects' smooth={true}
            offset={-100}
            spy={true}
            duration={500}>Projects</Link></div>
            <div className='navitem'>
        <Link to='blogs' smooth={true}
          offset={-100}
          spy={true}
          duration={500}>Blogs</Link>
          </div>
          <div className='navitem'>
        <Link to='contact' smooth={true}
          spy={true}
          duration={500}
        >Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar