import React, { useEffect, useState } from 'react'; 
import { AiOutlineLoading } from 'react-icons/ai';
import {MoonLoader
} from 'react-spinners'

const BinanceWebSocket = ({coin,handleLoading, loading, coinPrice, handleCoinPrice}) => { 

  useEffect(() => {
    const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${coin}@trade`);

    socket.onopen = () => {
      console.log('WebSocket connection opened');
      
    }

    socket.onmessage = (event) => { 
      const trade = JSON.parse(event.data);
      if (trade.e === 'trade') {
        const price = parseFloat(trade.p).toFixed(4); 
        handleCoinPrice(price)
      }
      handleLoading()
    }

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    }

    return () => {
      socket.close();
    };
  }, [coinPrice]);  

  return (
    <div>
        {
            loading ? <div className='py-2 h-10 flex items-center text-white animate-spin'><MoonLoader
            size={10}  /></div> :
            <div className='flex items-center font-semibold justify-between py-2 h-10'>
                <span className='text-[#C5C5C5] text-xs'>Current value  </span>
                <span className='text-[#627EEA] text-lg'>₹ {parseFloat(coinPrice * 80).toFixed(2) }  </span>
            </div>
            
        }
    </div>
  );
}

export default BinanceWebSocket;
