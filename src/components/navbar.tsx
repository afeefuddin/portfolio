import React from 'react'

function Navbar() {
  return (
    <div className='bg-zinc-500 rounded-full pt-2 pb-2 pl-8 pr-8 fixed z-50 hidden lg:block'>
        <div className='flex flex-row gap-8 text-white text-2xl'>
            <div className='hover:underline'>Home</div>
            <div className='hover:underline'>About</div>
            <div className='hover:underline'>Skills</div>
            <div className='hover:underline'>Projects</div>
            <div className='hover:underline'>Blogs</div>
            <div className='hover:underline'>Contact</div>
        </div>
    </div>
  )
}

export default Navbar