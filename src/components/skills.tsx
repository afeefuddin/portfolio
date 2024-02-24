'use client'
import React, { useEffect, useState } from 'react'
import './skills.css'
import { Button } from './ui/button'
type tabs = 'frontend' | 'backend' | 'aiml' | 'devops'
const tabToSkills: { [t in tabs]: string[] } = {
    'frontend': ['nextjs', 'react', 'shadcn', 'tailwind'],
    'backend': ['nodejs', 'express', 'typescript', 'mongodb', 'postgres'],
    'aiml': ['python', 'sklearn'],
    'devops': ['docker', 'aws']
}
const skillsToLogo: { [key: string]: string } = {
    nextjs: '/nextjs-icon.svg',
    react: '/react.svg',
    shadcn: '/shadcn.webp',
    tailwind: '/tailwindcss.svg',
    nodejs: '/nodejs-icon.svg',
    express: '/express.svg',
    typescript: '/typescript.svg',
    mongodb: '/mongodb.svg',
    postgres: '/postgresql.svg',
    python: '/python.svg',
    sklearn: '/sklearn.svg',
    docker: '/docker.svg',
    aws: '/aws.svg'
}
function Skills() {
    const [tab, setTab] = useState<tabs | 'all'>('all');
    const [arr, setArr] = useState<string[]>([]);
    useEffect(() => {
        const temp: string[] = [];
        if (tab === 'all') {
            let i: tabs;
            for (i in tabToSkills) {
                tabToSkills[i].forEach((e) => {
                    temp.push(e)
                })
            }
        }
        else {
            let i: tabs;
            for (i in tabToSkills) {
                if (i === tab)
                    tabToSkills[i].forEach((e) => {
                        temp.push(e)
                    })
            }
        }
        setArr(temp)
    }, [tab])
    return (
        <div className='flex flex-col items-center gap-6 md:gap-12 min-h-96'>
            <div className='flex flex-row gap-2 md:gap-4 flex-wrap justify-center'>
                <Button variant={`${tab === 'all' ? 'secondary' : 'ghost'}`} onClick={() => setTab('all')} className='p-2 '>All</Button>
                <Button variant={`${tab === 'frontend' ? 'secondary' : 'ghost'}`} onClick={() => setTab('frontend')} className='p-2'>Frontend</Button>
                <Button variant={`${tab === 'backend' ? 'secondary' : 'ghost'}`} onClick={() => setTab('backend')} className='p-2'>Backend</Button>
                <Button variant={`${tab === 'aiml' ? 'secondary' : 'ghost'}`} onClick={() => setTab('aiml')} className='p-2'>AI/ML</Button>
                <Button variant={`${tab === 'devops' ? 'secondary' : 'ghost'}`} onClick={() => setTab('devops')} className='p-2'>DevOps</Button>
                {/* <Button variant='ghost'>Languages</Button> */}
            </div>
            <div className='grid grid-cols-4 gap-x-7 gap-y-2 md:gap-x-14 md:gap-y-4'>
                {/* {tab=='all' ? &&} */}
                {arr.length > 0 && arr.map((e: string) => {
                    return <div className='flex justify-center items-center' key={e}><img src={skillsToLogo[e]} alt="" className='h-8 md:h-auto' /></div>
                })
                }
            </div>
        </div>
    )
}

export default Skills