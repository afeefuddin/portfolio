


import React from 'react'
import './project.css'
import { ChevronRightIcon, GitHubLogoIcon, Link1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

export interface ProjectData {
    image: string;
    projectName: string;
    projectDescription1?: string
    projectDescription2?: string
    projectDescription3?: string
    githubLink: string;
    liveURL?: string;
}

function Project(props: ProjectData) {
    return (

        <div className='flex flex-row-reverse border project w-[90vw] h-[220px] md:h-[300px] md:w-[700px] md: justify-between pl-2'>
            <div className='overflow-hidden relative projectImage w-[0px] md:w-[400px]'>
                <div className=' absolute max-w-max -bottom-4 -rotate-2  transition left-2 backgroundImage flex justify-center items-center pt-2 pb-2  pl-2 pr-2 rounded'>
                    <img src={props?.image} alt="" className='rounded hidden md:block' />
                </div>
            </div>
            <div className='flex flex-col justify-between md:w-64'>
                <div>
                    <div className='projectName'>{props?.projectName}</div>
                    <div>
                        <ul >
                            <li className='flex flex-row gap-1' >
                                <div className='pt-1'>
                                    <ChevronRightIcon className='w-4 m-0' fill='hsl(var(--primary))' />
                                </div>
                                <span>{props?.projectDescription1}</span></li>
                        </ul>
                        <ul >
                            <li className='flex flex-row gap-1' >
                                <div className='pt-1'>
                                    <ChevronRightIcon className='w-4 m-0' />
                                </div>
                                <span>{props?.projectDescription2}</span> </li>
                        </ul>
                    </div>
                </div>
                <div className='mb-4 ml-4 mt-4 flex flex-row gap-4'><Link href={props?.githubLink} target='_blank' ><GitHubLogoIcon className='h-8 w-8' /> </Link>{props.liveURL && <Link href={props.liveURL} target='_blank'><Link1Icon className='h-8 w-8' /> </Link>}</div>
            </div>
        </div>
    )
}

export default Project