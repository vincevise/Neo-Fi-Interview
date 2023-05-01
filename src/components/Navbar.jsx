import React from 'react'
import {BiMenuAltRight} from 'react-icons/bi'

const Navbar = ({opeSidebar}) => {
  return (
    <nav className='h-[45px] w-full bg-[#1B192D]   flex items-center justify-center px-4 z-20'>
        <span className='font-extrabold	text-transparent bg-clip-text bg-gradient-to-r from-[#3387D5] to-[#7A06C9] fixed left-4 cursor-pointer'>
            NeoFi
        </span>
        <span className='hidden sm:flex h-full [&>button]:h-full items-center gap-5 font-poppins  
            [&>button]:font-semibold
            [&>button]:text-xs
            [&>button]:border-b 
        '>
            <button className=' text-[#627EEA] border-[#6E56F8] flex items-center'>Trade</button>
            <button className='flex items-center text-[#5A5A5A] border-[#1B192D]'>Earn</button>
            <button className='flex items-center text-[#5A5A5A] border-[#1B192D]'>Support</button>
            <button className='flex items-center text-[#5A5A5A] border-[#1B192D]'>About</button>
        </span>
        <button className='CSSBg-color text-white text-[11px] px-3 py-1  font-semibold flex font-poppins cursor-pointer fixed right-4  rounded-full hidden sm:block '>
            Connect wallet
        </button>
        <button className='text-[#627EEA] text-[11px] px-3 py-1  font-semibold flex font-poppins cursor-pointer fixed right-2  rounded-full block sm:hidden ' onClick={opeSidebar}>
            <BiMenuAltRight size={25}/>
        </button>
    </nav>
  )
}

export default Navbar