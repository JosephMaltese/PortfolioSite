import React from 'react'
import { ButtonsCard } from "./ui/tailwindcss-buttons";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center" id="Contact">
      <h2 className="text-sky-300 text-5xl font-bold mt-3 mb-10 text-center">Want To Get In Touch?</h2>
      <p className="mb-5 p-10 text-start">I&apos;d love to hear from you! Whether you&apos;re interested in discussing exciting opportunities, collaborating on innovative projects, or just connecting to share ideas, feel free to reach out.</p>
      <a href="mailto:maltesj@mcmaster.ca" style={{ textDecoration: "none" }}>
        <ButtonsCard onClick={() => console.log('hey')}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 m-5">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Let&apos;s get in touch
                </span>
            </button>
        </ButtonsCard>
      </a>
    </div>
  )
}

export default Contact
