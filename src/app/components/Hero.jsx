import React from 'react'
import Image from 'next/image';
import myimg from "../../../public/web_img.png"

const Hero = () => {
  return (
    <div className='flex bg-[#ededed] border-4 shadow-lg rounded-lg border-[white] h-[40vh] w-[80vw] md:h-[30vh] overflow-hidden'>
        <div className='flex  bg-slate-600 w-[60%]'></div>
        <div className='flex w-[40%] py-[1%]'>
            <Image src={myimg} className='w-[100%] h-[100%] object-contain'/>
        </div>
    </div>
  )
}

export default Hero