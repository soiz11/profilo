import React, {forwardRef} from 'react'
import Image from 'next/image';
import myimg from "../../../public/web_img.webp"
import myimg2 from "../../../public/vercel.svg"
import Slider from './Slider';
import Namecard from './Namecard';
import Social from './Social';

const Hero = forwardRef((props, aboutRef) => {
  return (
    <div ref={aboutRef} className='flex bg-[#ededed] border-4 shadow-lg rounded-lg border-[white] h-[245px] xxs:h-[250px] xs:h-[260px] sm:h-[290px] md:h-[340px] w-[80vw] overflow-hidden mt-[86px] xl:mt-[100px]'>
        <div className='flex flex-col bg-transparent  w-[100%] md:w-[60%] px-[30px] py-[15px] h-[fit-content] my-3'>
          <Namecard/>
          <Slider/>
          <Social/>
        </div>
        <div className='md:flex w-[40%] py-[1%] hidden '>
            <Image src={myimg} className='w-[100%] h-[100%] object-contain'/>
        </div>
         
    </div>
  )
})

export default Hero