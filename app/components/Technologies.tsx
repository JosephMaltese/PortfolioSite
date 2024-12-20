import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

interface Item {
  name: string,
  imageName: string,
}

const Technologies = () => {
  let itemList : Item[] = [{name: "Python", imageName: "pythonLogo.webp"}, {name: "Node.js", imageName: "nodejsLogo.png"}, {name: "Haskell", imageName: ""}, {name: "C", imageName: "Clogo.png"}, {name: "React", imageName: "reactLogo.png"}, {name: "Express", imageName: ""}, {name: "MongoDB", imageName: "mongodbLogo.png"}, {name: "SQL", imageName: "sqlLogo.svg"}, {name: "C#", imageName: "cSharpLogo.png"}, {name: "JavaScriopt", imageName: "jsLogo.png"}, {name: "TypeScript", imageName: "tsLogo.png"}, {name: "Java", imageName: "javaLogo.jpeg"}, {name: "JUnit", imageName: ""}, {name: "Tailwind", imageName: "tailwind2.png"}, {name: "HTML5", imageName: "html2.jpg"}]
  return (
    <div id="Technologies" className="flex flex-col items-center justify-center mb-32 mt-16">
      <h2 className="text-sky-300 text-5xl font-bold mt-3 mb-10">My Tech Stack</h2>
      <InfiniteMovingCards items={itemList} speed="fast"/>
    </div>
  )
}

export default Technologies
