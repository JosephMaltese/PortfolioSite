import React from 'react'

const ExperienceItem = ({ organizationName, role, description, date, imageName }: { organizationName: string, role: string, description: string, date: string, imageName: string }) => {
  return (
    <div className='flex flex-row justify-center items-center mb-12'>
        <img src={imageName} className='w-24 h-24 mr-10'/>
        <div>
            <h2 className='text-white text-2xl sm:text-4xl font-bold'>{role}</h2>
            <h3 className='text-white text-l sm:text-2xl'>{organizationName}</h3>
            <h4 className='text-white text-m sm:text-l'>{date}</h4>
            <p className='text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default ExperienceItem
