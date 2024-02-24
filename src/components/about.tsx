import React from 'react'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { Button } from './ui/button'

function About() {
  return (
    <div className='flex justify-center items-center flex-col gap-12 mb-6'>
      <div className='text-4xl'>About <span className='coloredText'>Me</span></div>
      <div className='grid grid-cols-3 w-full'>
        <div className='col-span-3 lg:col-span-2 flex flex-col gap-4 mt-auto mb-auto'>
          <div className='text-2xl lg:text-4xl'>I am a Full Stack developer from Kolkata, India.</div>
          <div className='flex flex-row gap-2 items-center '>
            <div ><ChevronRightIcon className='w-5 h-5' /></div>
            <div>
              I have <span className='coloredText'>1+ year experience</span> in web developement and have made several projects
            </div>
          </div>
          <div className='flex flex-row gap-2 items-center '>
            <div ><ChevronRightIcon className='w-5 h-5' /></div>
            <div>
              I like to <span className='coloredText'>build projects</span> and <span className='coloredText'>learn by doing</span>
            </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <div ><ChevronRightIcon className='w-5 h-5' /></div>
            <div>
              I do <span className='coloredText'>competitive programming</span> for fun
            </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <div ><ChevronRightIcon className='w-5 h-5' /></div>
            <div>
              To enjoy i listen DHH and &quot;Kohli goes down the ground, Kohli goes out of the ground&quot; on loop
            </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <div ><ChevronRightIcon className='w-5 h-5' /></div>
            <div>
              Impatient, suffering from Rohtacism, Overthinking and Spine Issues(Average Coder)
            </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <div ><ChevronRightIcon className='w-5 h-5' /></div>
            <div>
              Part Time Memer
            </div>
          </div>
          <div className='mt-4'>
            <a href="https://drive.google.com/file/d/1puo3xgF5ypeNDvrgFgN62KK83Adx6xhR/view?usp=sharing" target='_blank'><Button variant="outline"  > View Resume</Button></a>
          </div>
        </div>
        <div className='hidden justify-center items-center  lg:flex'><Image src={'/aboutPicE.jpeg'} className='rounded' sizes='(max-width:80%),' priority alt='Pic' width='381' height='615' placeholder='blur' quality={100} blurDataURL='/aboutPic.jpeg'></Image></div>
      </div>
    </div>
  )
}

export default About