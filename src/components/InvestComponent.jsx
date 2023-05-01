import React, { useState } from 'react'

const InvestComponent = ({coinPrice}) => {

    const [invest, setInvest] = useState(null) 
    const [coinAmount, setCoinAmount] =  useState(null)
    const handleInvest = (e) => {
      setInvest(e.target.value)
      setCoinAmount(e.target.value/80/coinPrice)
    }

    const handleAmount = (e) => {
      setCoinAmount(e.target.value)
      setInvest(e.target.value*80*coinPrice)
    }
  return (
    <>
    
    <div className=''>
        <span className='flex relative w-full items-center'>
            <input 
              type="number" 
              value={invest || ''} 
              className='rounded-md py-2 px-3 text-md border border-[#6E56F8] bg-inherit	outline-none text-[#6F6F7E] font-semibold w-full ' placeholder='0.00' 
              onChange={ handleInvest }
            />
            <span className='absolute right-4 z-20 text-[#FFFFFF] text-xs'>INR</span>
        </span>
        <p className='text-xs text-white'>Estimate Number of ETH You will Get</p>
        <input 
          type="number" 
          onChange={handleAmount}
          placeholder='0.00' 
          value={coinAmount } 
          className='rounded-md py-2 px-3 w-full outline-none font-semibold text-md text-[#6F6F7E]  bg-[#1C1731]'
        />
    </div>
    </>
  )
}

export default InvestComponent