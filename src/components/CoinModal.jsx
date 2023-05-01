import React, { useState } from 'react'
import { AiOutlineCheck, AiOutlineSearch } from 'react-icons/ai'
import { COIN_PAIRS } from '../data/data'
import { GrClose } from 'react-icons/gr'
import CoinButton from './CoinButton'

const CoinModal = ({handleClick, handleModal, overlayRef, coin, handleChange}) => {

    const [searchTerm, setSearchTerm] = useState('')
    console.log(searchTerm)
  return (
    <div className='fixed w-screen h-screen inset-0 bg-black/90 z-30 flex items-center justify-center' onClick={handleClick} ref={overlayRef} >
        <div className='w-64 bg-[#1B1627] h-[270px] rounded-lg CSS-modalborder border border-white relative py-10 px-6'>
          <button className='absolute top-2 right-2 bg-[#6E56F8] text-white p-1 rounded-sm' onClick={handleModal}>
            <GrClose size={10} color='#ffffff' />
          </button>
          <span className='w-full relative flex items-center'>
            <input type="text" className='w-full pl-7 pr-4 py-1 rounded-full bg-inherit border border-[#6E56F8] text-sm text-white' onChange={(e)=>setSearchTerm(e.target.value)}/>
            <span className='ml-2 text-white font-thin absolute my-auto'>
              <AiOutlineSearch/>
            </span>
          </span>
          <div className='w-full h-full py-3  text-sm  '>
            <div className='h-full overflow-y-scroll noscroll'>
                {
                    searchTerm ==='' 
                    ? COIN_PAIRS.map((x)=>(
                        <CoinButton 
                            data={x} 
                            handleChange={handleChange} 
                            handleModal={handleModal} 
                            coin={coin}
                        />
                    ))
                    :
                    COIN_PAIRS.filter((x)=>x.name.toLowerCase().includes(searchTerm))
                    .map((x)=>(
                        <CoinButton 
                            data={x} 
                            handleChange={handleChange} 
                            handleModal={handleModal} 
                            coin={coin}
                        />
                    ))
                } 
            </div>
          </div>
        </div>
      </div>
  )
}

export default CoinModal