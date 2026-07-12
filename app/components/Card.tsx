import React from 'react'

const Card = ({ imageName, title, description, link }: { imageName: string, title: string, description: string, link: string }) => {
    return (
        <div className="w-full shadow-xl flex flex-row items-center gap-8 mb-12 p-5 rounded-xl">
            <figure className="w-[300px] h-[220px] flex-shrink-0">
                <img
                    src={imageName}
                    className="w-full h-full object-cover rounded-xl"
                />
            </figure>
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-2">{description}</p>

                <a
                    className= "flex flex-row items-center mt-4"
                    href={link}
                    target="_blank"
                >
                    Check it out
                    <img src="arrow.png" className="w-3 ml-2" />
                </a>
            </div>
        </div>
    )
}

export default Card
