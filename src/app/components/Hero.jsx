import React from 'react'
import Image from 'next/image';
import myimg from "../../../public/web_img.png"
import myimg2 from "../../../public/vercel.svg"
import Slider from './Slider';

const Hero = () => {
  return (
    <div className='flex bg-[#ededed] border-4 shadow-lg rounded-lg border-[white] h-[40vh] w-[80vw] md:h-[30vh] overflow-hidden'>
        <div className='flex  bg-transparent  w-[60%]'>
          <Slider/>
        </div>
        <div className='flex w-[40%] py-[1%]'>
            <Image src={myimg2} className='w-[100%] h-[100%] object-contain'/>
        </div>
    </div>
  )
}

export default Hero