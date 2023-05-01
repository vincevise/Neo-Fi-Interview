import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai';

const CoinButton = ({data, handleChange, handleModal, coin}) => {
  return (
    <button className='block w-full text-left text-white py-2 px-2 font-poppins  flex items-center justify-between hover:bg-[#1B192D]' onClick={()=>{handleChange(data.value);handleModal()}}>
    <span className='text-xs flex items-center gap-2'>
        <img src={data.image} className='w-4' alt="" />
        <span>{data.name}</span>
    </span>
    <span className='text-[#58ADAB]'>{coin===data.value && <><AiOutlineCheck/></> }</span>    
    </button>
  )
}

export default CoinButton