import React from 'react'
import {ExperienceData} from "@/app/types/ExperienceData";
import Image from 'next/image'

const ExperienceItem = ({ experienceData }: { experienceData: ExperienceData }) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-start md:items-center mb-6 md:mb-12'>
        <Image src={experienceData.imageName} alt="McMaster Start Coding" width={100} height={100} className="mr-4"/>
        <div>
            <h2 className='md:text-md text-sm font-bold mt-2 md:mt-0'>{experienceData.role}</h2>
            <h3 className='md:text-md text-sm'>{experienceData.organizationName}</h3>
            <h4 className='md:text-md text-sm'>{experienceData.date}</h4>
            <p className='md:text-md text-sm mt-1 md:mt-0'>{experienceData.description}</p>
        </div>
    </div>
  )
}

export default ExperienceItem