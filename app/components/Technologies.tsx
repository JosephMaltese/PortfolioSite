import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

interface Item {
  name: string,
  imageName: string,
}

const Technologies = () => {
  const itemList : Item[] = [{name: "Python", imageName: "pythonLogo3.png"}, {name: "Node.js", imageName: "nodejsLogo.png"}, {name: "Haskell", imageName: "Haskell.png"}, {name: "C", imageName: "c.svg"}, {name: "React", imageName: "reactLogo.png"}, {name: "Express", imageName: "express-js.png"}, {name: "MongoDB", imageName: "mongodbLogo.png"}, {name: "SQL", imageName: "sqlLogo.svg"}, {name: "C#", imageName: "cSharpLogo3.png"}, {name: "JavaScriopt", imageName: "jsLogo.png"}, {name: "TypeScript", imageName: "typescriptLogo2.svg"}, {name: "Java", imageName: "javalogo4.png"}, {name: "JUnit", imageName: "junitLogo.png"}, {name: "Tailwind", imageName: "tailwindLogo3.svg"}, {name: "HTML5", imageName: "htmlLogo3.png"}, {name: "NextJS", imageName: "nextLogo.svg"}]
  return (
    <div id="Technologies" className="flex flex-col items-center justify-center mb-32 mt-16">
      <h2 className="text-sky-300 text-5xl font-bold mt-3 mb-10">My Tech Stack</h2>
      <InfiniteMovingCards items={itemList} speed="fast"/>
    </div>
  )
}

export default Technologies
