'use client'
import React, { useEffect, useState } from 'react'
import './skills.css'
import { Button } from './ui/button'
type tabs = 'frontend' | 'backend' | 'aiml' | 'devops'  
const tabToSkills: {[t in tabs] : string[]}= {
    'frontend' : ['nextjs','react','shadcn','tailwind'],
    'backend' : ['nodejs','express','typescript','mongodb','postgres'],
    'aiml' : ['python','sklearn'],
    'devops' : ['docker','aws']
}
const skillsToLogo = {
    nextjs : '/nextjs-icon.svg',
    react : '/react.svg',
    shadcn : '/shadcn.webp',
    tailwind : '/tailwindcss.svg',
    nodejs : '/nodejs-icon.svg',
    express :'/express.svg',
    typescript : '/typescript.svg',
    mongodb : '/mongodb.svg',
    postgres : '/postgresql.svg',
    python: '/python.svg',
    sklearn : '/sklearn.svg',
    docker : '/docker.svg',
    aws : '/aws.svg'
}
function Skills() {
    const [tab,setTab] = useState<tabs | 'all'>('all');
    const [arr,setArr] = useState<string[]>([]);
    useEffect(()=>{
        const temp : string[] = [];
        if(tab==='all'){
            let i : tabs;
            for(i in tabToSkills){
                tabToSkills[i].forEach((e)=>{
                    temp.push(e)
                })
            }
        }
        else{
            let i : tabs;
            for(i in tabToSkills){
                if(i===tab)
                tabToSkills[i].forEach((e)=>{
                    temp.push(e)
                })
            } 
        }
        setArr(temp)
    },[tab])
  return (
    <div className='flex flex-col justify-center items-center gap-12'>
        <div className='flex flex-row gap-4'>
            <Button variant={`${tab==='all' ? 'secondary' : 'ghost'}`} onClick={()=>setTab('all')}>All</Button>
            <Button variant={`${tab==='frontend' ? 'secondary' : 'ghost'}`} onClick={()=>setTab('frontend')}>Frontend</Button>
            <Button variant={`${tab==='backend' ? 'secondary' : 'ghost'}`} onClick={()=>setTab('backend')}>Backend</Button>
            <Button variant={`${tab==='aiml' ? 'secondary' : 'ghost'}`} onClick={()=>setTab('aiml')}>AI/ML</Button>
            <Button variant={`${tab==='devops' ? 'secondary' : 'ghost'}`} onClick={()=>setTab('devops')}>DevOps</Button>
            {/* <Button variant='ghost'>Languages</Button> */}
        </div>
        <div className='grid grid-cols-4 gap-x-14 gap-y-4'>
            {/* {tab=='all' ? &&} */}
            {arr.length>0 && arr.map((e)=>{
                return <div className='flex justify-center items-center'><img src={skillsToLogo[e]} alt="" /></div>
            })
            }
        </div>
    </div>
  )
}

export default Skills