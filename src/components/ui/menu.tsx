import { Menu } from 'lucide-react'
import React from 'react'


const MenuBar = () => {
  return (
    <div className='w-full flex justify-end items-end'>
        <div
            className='p-2 rounded-full border-[2px] border-[#e63946] cursor-pointer'
        >
            <Menu
                color='#fff'
                size={40}
                className='cursor-pointer'
            />
        </div>
    </div>
  )
}

export default MenuBar