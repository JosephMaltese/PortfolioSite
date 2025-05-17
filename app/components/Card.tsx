import React from 'react'

const Card = ({ imageName, title, description, link }: { imageName: string, title: string, description: string, link: string }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl lg:w-[600px]" style={{minWidth: '300px'}}>
        <figure className="px-10 pt-10">
            <img
            src={imageName}
            className="rounded-xl max-h-[300px]" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions">
                <a className="text-sky-200 flex flex-row justify-center items-center" href={link} target="_blank" >Check it out! <img src="GithubSocialicon4.png" className='size-5 ml-2'/></a>
            </div>
        </div>
    </div>
  )
}

export default Card
