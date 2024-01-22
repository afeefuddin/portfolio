import React from 'react'
import './project.css'

export interface ProjectData {
    image: string;
    projectName: string;
    projectDescription: string
}

function Project(props: ProjectData) {
    return (
        <div className='flex flex-row-reverse border project justify-between pl-2'>
            <div className='overflow-hidden relative projectImage'>
                <div className=' absolute max-w-max -bottom-4 -rotate-2  transition left-2 backgroundImage flex justify-center items-center pt-2 pb-2  pl-2 pr-2 rounded'>
                    <img src={props.image} alt="" className='rounded' />
                </div>
            </div>
            <div className=''>
                <div className='projectName'>{props.projectName}</div>
                <div>{props.projectDescription}</div>
            </div>
        </div>
    )
}

export default Project