import Navbar from '@/components/navbar'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import './main.css'
import Skills from '@/components/skills'
import Project from '@/components/project'
import Link from 'next/link'


export default function Home() {
  const d = new Date();
  return (
    <>
    <section className='h-screen'>
      <header className='flex flex-row justify-center p-8 pt-12'>
        <Navbar  />
        <div className='w-full flex flex-row justify-between'>
          <img src='/photo.jpg' alt="me" width="64" height="64" className='rounded-full' />
          <img src="/github.svg" alt="" className='h-12' />
        </div>

      </header>
      <main className="flex flex-col items-center justify-between p-12 pt-24 gap-10 ">

        <div className='text-8xl '>Hi,  I am  <span className='coloredText'>Afeef</span></div>
        <div className='text-4xl'>Full stack Developer</div>
        <Button className='h-12 w-40 text-lg '>Get in Touch</Button>
      </main>
      </section>
      <section>
          <div className='flex justify-center items-center flex-col gap-12 mb-6'>
            <div className='text-4xl'>About <span className='coloredText'>Me</span></div>
            <div className='grid grid-cols-3 w-full'>
                <div className='col-span-2'>
                  <div className='text-4xl'>I am a Full Stack developer from Kolkata, India.</div>
                  <div>I have 1+ year experience in web developement and have made several projects</div>
                </div>
                <div className='flex justify-center items-center'><Image src={'/aboutPicE.jpeg'}className='rounded' sizes='(max-width:80%),' priority alt='Pic' width='381' height='615' placeholder='blur' quality={100} blurDataURL='/aboutPic.jpeg'></Image></div>
            </div>
          </div>
      </section>
      <section>
      <div className='flex justify-center items-center flex-col gap-6 mb-6'>
            <div className='text-4xl'>Skills</div>
            <Skills />
          </div>
      </section>
      <section>
      <div className='flex justify-center items-center flex-col gap-12 mb-6 mt-6'>
            <div className='text-4xl'>Projects</div>
            <div><Project projectName='ASRS' image='/ss.png' projectDescription="It's a fun project made by me"/></div>
          </div>
      </section>
      <section className='mt-24'>
        <div className='grid grid-cols-2 gap-4'>
        <div className='text-4xl ml-auto'>I Write Blogs Here</div>
        <div className='flex flex-col'>
          <div><img src="/arrow.png" alt="" className='arrow' /></div>
          <div className='relative'><Button className='absolute left-44 h-12 w-40 text-2xl' asChild><a href="https://afeefexplores.hashnode.dev/">Read</a></Button></div>
        </div>
        </div>
      </section>
      <section className='mt-24'>
        <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col ml-auto'>
          <div><img src="/arrow.png" alt="" className='arrow-2' /></div>
          <div className='relative '><Button className='absolute -left-12 h-12 w-40 text-2xl' asChild><Link href={'/fun'}>Go Here</Link></Button></div>
        </div>
        <div className='text-4xl mr-auto'>For Fun stuff</div>
        </div>
      </section>
      <section className='mt-36 flex flex-col items-center gap-6'>
        <div className='text-4xl'>Contact Me</div>
        <div>hi, drop a mail at <span className='underline'>afeefud2004din@gmail.com</span> or reach out here</div>
        <div className='flex flex-row gap-6 items-center'>
          <img src="/x.svg" alt="" className='h-9' />
          <img src="/instagram.svg" alt="" className='h-10' />
          <img src="/linkedin.svg" alt="" className='h-12' />
          <img src="/discord.svg" alt="" className='h-12' />
          <img src="/github.svg" alt="" className='h-9' />
        </div>
        <div><Link href={`yesitchanges`}>© {d.getFullYear()}</Link> Afeefuddin</div>
      </section>
      
    </>
  )
}
