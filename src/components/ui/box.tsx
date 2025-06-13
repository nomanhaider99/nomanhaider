import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import { BackgroundLines } from './background-lines'

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: '400'
})

const Box = () => {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div className={`w-[40vw] flex flex-col gap-1 mt-44`}>
        <div className={`text-[6rem] animate-pulse tracking-tighter text-[#e63946] font-semibold ${bebas.className}`}>Noman Haider</div>
        <div className='text-lg text-zinc-300'>I Build AI Agents & Agentic Applications. 🤍</div>
        <div className='text-sm text-zinc-400'>I am a dedicated AI application developer focusing on building intelligent agents and agentic AI web applications that automate tasks and reduce the workload for users. My works are geared towards sophisticated usability and the creation of smart systems that enhance productivity and decision-making using AI technologies.</div>
      </div>
    </BackgroundLines>
  )
}

export default Box