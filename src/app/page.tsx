"use client"
import Navbar from '@/components/navbar'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import './main.css'
import Skills from '@/components/skills'
import Project from '@/components/project'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
// import useOnScreen from '@/utils/useOnScreen'
import GithubIcon from '@/assets/github.svg'
import XIcon from '@/assets/x.svg'
import DiscordIcon from '@/assets/discord.svg'
import InstaIcon from '@/assets/instagram.svg'
import LinkedInIcon from '@/assets/linkedin.svg'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import About from '@/components/about'

export default function Home() {
  const d = new Date();


  return (
    <>
      <section className='min-h-screen' id='home' >
        <header className='flex flex-row justify-center p-8 pt-12'>

          <div className='w-full flex flex-row-reverse'>
            <div>
              <a href="https://github.com/afeefuddin/" target='_blank'>
                <GithubIcon className='h-12 w-12' />
              </a>
            </div>
          </div>

        </header>
        <main className="flex flex-col items-center justify-between p-12 pt-24 gap-10 " >
          <div className='text-5xl md:text-8xl '>Hi,  I am  <span className='coloredText'>Afeef</span></div>
          <div className='text-xl md:text-4xl'>Full stack Developer</div>
          <Button className='h-12 w-40 text-lg ' asChild><a href="https://twitter.com/Afeefuddin2004" target='_blank'>Get In Touch</a></Button>
        </main>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <div className='flex justify-center items-center flex-col gap-6 mb-6'>
          <div className='text-4xl'>Skills</div>
          <Skills />
        </div>
      </section>
      <section id='projects'>
        <div className='flex justify-center items-center flex-col gap-12 mb-6 mt-6'>

          <div className='text-4xl '>Projects</div>
          <div className=''>
            <div className='h-[60vh] sticky top-24'><Project projectName='Memomedia' image='/ss.png' projectDescription1="
          A full stack Social Media Website to share memes"
              projectDescription2="Implemented a microservice for OTP verification on signup"
              githubLink='https://github.com/afeefuddin/memomedia'
            />
            </div>
            <div className='h-[60vh] sticky top-36 '><Project projectName='MindMate' image='/mindmate.png' projectDescription1="A Mental health chatbot that give suggestions and analyse your mental health"
              projectDescription2="Implemented WebSockets For Real Time Communication"
              githubLink='https://github.com/afeefuddin/MindMate'
              liveURL='https://mind-mate-wellness.vercel.app/' />
            </div>
            <div className='h-[60vh] sticky top-48'>
              <Project projectName='RagFreeCampus' image='/ragfreecampus.png' projectDescription1="
             A website to report ragging Incidents.       
             "
                projectDescription2="Dedicated Teacher’s and Students Portal for Addressing Incidents"
                githubLink='https://github.com/afeefuddin/RagFreeCampus'
                liveURL='https://ragfreecampus.web.app/'
              /></div>
            <div className='h-[60vh] md:h-[60vh] sticky top-52'>
              <Project projectName='ASRS' image='/ss.png' projectDescription1="It's a fun project made by me"
                projectDescription2='Has feature like real dictionary, facts and articles'
                githubLink='https://github.com/afeefuddin/asrs'
                liveURL='https://asrs.vercel.app/' />
            </div>

          </div>
        </div>
      </section>

      <section className=' flex flex-col items-center gap-6'>
        <h1 className='text-4xl'>Other <span className='coloredText'>Stuffs</span></h1>
        <div>
          <div>I write blogs <a className=' underline' href='https://afeefexplores.hashnode.dev/' target='_blank'>here</a></div>
        </div>
      </section>
      <section className='mt-36 flex flex-col items-center gap-6' id='contact'>
        <div className='text-4xl'>Contact <span className='coloredText'>Me</span></div>
        <div>hi, drop a mail at <span className='underline'>afeefud2004din@gmail.com</span> or reach out here</div>
        <div className='flex flex-row gap-6 items-center'>
          {/* <img src="/x.svg" alt="" className='h-9' /> */}
          <Link href="https://twitter.com/Afeefuddin2004" target='_blank'>
            <XIcon className="h-9 w-9" />
          </Link>
          {/* <img src="/instagram.svg" alt="" className='h-10' /> */}
          <Link href="https://www.instagram.com/afeef_explores/" target='_blank'>
            <InstaIcon className="h-10 w-10" />
          </Link>
          {/* <img src="/linkedin.svg" alt="" className='h-12' /> */}
          <Link href="https://www.linkedin.com/in/afeef-uddin-2ab567247/" target='_blank'>
            <LinkedInIcon className="h-12 w-12" />
          </Link>
          {/* <DiscordIcon className="h-10 w-11" /> */}
          <Link href="https://github.com/afeefuddin" passHref={true} target='_blank' >
            <GithubIcon className="h-9 w-9" />
          </Link>
        </div>
        <div><Link href={`yesitchanges`}>© {d.getFullYear()}</Link> Afeefuddin</div>
      </section>

    </>
  )
}
