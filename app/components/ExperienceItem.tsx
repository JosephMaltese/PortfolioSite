import React from 'react'
import {ExperienceData} from "@/app/types/ExperienceData";
import Image from 'next/image'

const ExperienceItem = ({ experienceData }: { experienceData: ExperienceData }) => {
  return (
    <div className='flex flex-row justify-center items-center mb-12'>
        <Image src={experienceData.imageName} alt="McMaster Start Coding" width={100} height={100} className="mr-4"/>
        <div>
            <h2 className='text-l sm:text-l font-bold'>{experienceData.role}</h2>
            <h3 className='text-l sm:text-l'>{experienceData.organizationName}</h3>
            <h4 className='text-l sm:text-l'>{experienceData.date}</h4>
            <p className='text-sm'>{experienceData.description}</p>
        </div>
    </div>
  )
}

export default ExperienceItem