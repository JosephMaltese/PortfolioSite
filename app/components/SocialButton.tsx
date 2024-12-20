import React from 'react'

const SocialButton = ({ imageName, link }: { imageName: string, link: string }) => {
  return (
    <div className="flex w-10 h-10 rounded-md justify-center items-center bg-gray-800 border border-gray-600 mr-7">
        <a href={link} target="_blank" >
            <img className="w-8 h-8 m-auto" src={imageName} />
        </a> 
    </div>
  )
}

export default SocialButton
