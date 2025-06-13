'use client'

import React, { useState } from 'react'

const Tabs = () => {
    const [selectedSimple, setSelectedSimple] = useState(true);
    const [selectedDetailed, setSelectedDetailed] = useState(false);

    
  return (
    <div
        className='w-64 px-2 py-2 tracking-tight rounded-full border-[1px] border-[#e63946] flex justify-between items-center gap-1 text-[16px]'
    >
        <div
            className={`w-1/2 flex justify-center items-center cursor-pointer transition-all duration-300 px-4 py-1 text-white ${selectedSimple ? "bg-[#e63946]" : "bg-none"} rounded-full`}
            onClick={() => {
                setSelectedSimple(true)
                setSelectedDetailed(false)
            }}
        >Simple</div>
        <div
            className={`w-1/2 flex justify-center items-center cursor-pointer transition-all duration-300 px-4 py-1 text-white ${selectedDetailed ? "bg-[#e63946]" : "bg-none"} rounded-full`}
            onClick={() => {
                setSelectedSimple(false)
                setSelectedDetailed(true)
            }}
        >Detailed</div>
    </div>
  )
}

export default Tabs