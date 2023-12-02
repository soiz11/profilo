import Image from 'next/image'
import React from 'react'
import logo from "../../public/sohan.webp"

const Loader = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#ededed] flex justify-center items-center'>
      <div className='flex'>
        <div className= 'w-[150px] md:w-[300px] flex flex-col justify-center '>
        <Image alt='' src={logo}/>
        <div className='mt-1 h-[10px] md:h-[20px] flex justify-start items-center w-[100%]'>
          <div className='bg-[black] h-[3px] md:h-[6px] animate-loading'></div>
        </div>
        </div>
      </div>
    </div>
  )
}

Loader.displayName = 'Loader';

export default Loader