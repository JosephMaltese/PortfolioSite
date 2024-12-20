import React from 'react'
import SocialButton from "./SocialButton";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between mb-11 mt-14">
      <p className='ml-14'>Copyright © 2024 Joseph Maltese</p>
      <div className="flex flex-row mr-14">
        <SocialButton imageName="GithubSocialicon4.png" link="https://github.com/JosephMaltese"/>
        <SocialButton imageName="icons8-linkedin-64.png" link="https://www.linkedin.com/in/josephmaltese/"/>
      </div>

    </div>
  )
}

export default Footer
