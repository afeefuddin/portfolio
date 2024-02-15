import React from 'react'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { Button } from './ui/button'

function About() {
  return (
    <div className='flex justify-center items-center flex-col gap-12 mb-6'>
    <div className='text-4xl'>About <span className='coloredText'>Me</span></div>
    <div className='grid grid-cols-3 w-full'>
      <div className='col-span-2 flex flex-col gap-2'>
        <div className='text-4xl'>I am a Full Stack developer from Kolkata, India.</div>
        <div className='flex flex-row gap-2 items-center text-lg'>
          <div ><ChevronRightIcon className='w-5 h-5' /></div>
          <div>
          I have 1+ year experience in web developement and have made several projects
          </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
          <div ><ChevronRightIcon className='w-5 h-5' /></div>
          <div>
          I do competitive programming for fun
          </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
          <div ><ChevronRightIcon className='w-5 h-5' /></div>
          <div>
          Aritificial Intelligence is what exictes me and I run away from Machine Learning
          </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
          <div ><ChevronRightIcon className='w-5 h-5' /></div>
          <div>
          I do DSA because seniors told me to do that
          </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
          <div ><ChevronRightIcon className='w-5 h-5' /></div>
          <div>
          Love Practical Applications of things and hates theory
          </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
          <div ><ChevronRightIcon className='w-5 h-5' /></div>
          <div>
          To enjoy i listen DHH and "Kohli goes down the ground, Kohli goes out of the ground" on loop
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
              <Button variant="outline" >View Resume</Button>
            </div>
      </div>
      <div className='flex justify-center items-center'><Image src={'/aboutPicE.jpeg'} className='rounded' sizes='(max-width:80%),' priority alt='Pic' width='381' height='615' placeholder='blur' quality={100} blurDataURL='/aboutPic.jpeg'></Image></div>
    </div>
  </div>
  )
}

export default About