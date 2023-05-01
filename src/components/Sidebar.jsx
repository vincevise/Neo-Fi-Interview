import React, { useEffect, useRef } from 'react'
import { GrClose } from 'react-icons/gr'

const Sidebar = ({closeSidebar, sidebar}) => {
    const sidearRef = useRef(null)
    useEffect(()=>{

        if(sidebar){
            sidearRef.current.style.width = '100vw'
        }else{
            sidearRef.current.style.width = '0'
        }

    },[sidebar])
    



  return (
    <div className='fixed w-0 h-screen bg-white inset-0 z-[100] bg-[#1B192D] transition-all	' ref={sidearRef}>
        <span className={`text-white absolute right-5 top-5 ${sidebar ? 'block' :'hidden'}`} onClick={closeSidebar}>
            <GrClose color={'white'} size={20}/>
        </span>
        <div className=' text-[#627EEA] text-lg gap-10 font-semibold h-full items-center justify-center flex flex-col'>
            <span>Trade</span>
            <span>Earn</span>
            <span>Support</span>
            <span>About</span>
        </div>
    </div>
  )
}

export default Sidebar