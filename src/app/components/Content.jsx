'use client'
import Image from 'next/image';
import React,{forwardRef} from 'react'
import bw from "../../../public/bloggerworld.webp"
import angle from "../../../public/logo1.webp"
import fox from "../../../public/logo2.webp"

//import vid from "../../../public/vid.mp4"

const Content =  forwardRef((props, contentsRef) => {
     
    const handleButtonClick = (creation) => {
        window.open(creation.url, '_blank');
      };

    const creations = [
        {
          "name": "Angle Theeta",
          "url": "https://www.youtube.com/@angletheeta",
          "description":"Discover the world of mathematics with Angle Theeta! Our channel is your guide to mastering advanced mathematics, whether you're studying for Ordinary or Advanced Levels. We specialize in practical math, covering 95% of applied mathematics concepts and completing lessons on pure mathematics, like integration. Our content is tailored for students at various levels, and we offer supportive playlists for different learning approaches. Stay tuned as we explore probability and statistics soon! Angle Theeta is more than just lessons; it's a community making math accessible and enjoyable. Subscribe now for a straightforward and engaging approach to advanced mathematics!",
          "vlink":"/angle.mp4",
          "imgurl":angle
        },
        {
            "name": "Fox Make",
            "url": "https://www.youtube.com/@FoxMake",
            "description":"Welcome to Fox Make, your guide to understanding IT without the jargon! Designed for those new to IT, our channel helps you navigate tech essentials in your daily life. We start with the basics and gradually explore more technical topics, making IT easy to grasp. Fox Make is committed to simplifying complex concepts, making them accessible to everyone. As we grow, expect deeper technical insights that enrich your IT knowledge. Subscribe now to Fox Make, where we bridge the gap between everyday users and the world of information technology, making it simple and engaging!",
            "vlink":"/fox.mp4",
            "imgurl":fox
        },
       
     
        
      ]

  return (
    <>
       <div className="w-[100%]">
        <div className="flex my-10 w-[100%] items-center mb-10 mt-12">
            <div ref={contentsRef} className="text-[22px] flex font-[600] mr-5">Content Creation</div>
            <div className="flex flex-1 bg-[#939393] h-[3px]"></div>
        </div>
        </div>
        
        { creations.map((creation,index)=>(
            <div key={index} className='flex flex-col h-[fit-content]  bg-[#ededed] border-4 shadow-lg rounded-lg border-[white] w-[80vw] overflow-hidden pb-2 mb-9 '>
            <div className=' h-[200px] xs:h-[250px]  w-[100%] relative rounded flex md:h-[300px] xl:h-[350px]'>
                <div  onClick={() => handleButtonClick(creation)} className=' rounded absolute z-10 bottom-[-8px] right-4 shadow-md md:right-10 md:bottom-6 md:px-8 md:py-2 bg-[black] text-[white]  border-[2px] md:text-[18px] text-[10px] px-2 py-1 border-[white] cursor-pointer' >Visit Channel</div>
                <div className='xxs:flex  none absolute z-10 bottom-[0px] left-4 translate-y-[48%]'>
                    <div  onClick={() => handleButtonClick(creation)} className=' rounded-full shadow-md md:right-10 md:bottom-6  bg-[white] md:border-[4px] border-[2px]  border-[white] cursor-pointer xxs:h-[100px] xxs:w-[100px] w-[0px] h-[0px] overflow-hidden ' >
                        <Image alt="" src={creation.imgurl} loading='lazy' className='xxs:w-[100%] xxs:h-[100%] w-[0%] h-[0%] object-cover '/>
                    </div>
                    <div  className='xxs:mt-0 mt-[50px] font-[500] py-3 text-[20px] xs:text-[22px] xl:text-[24px] md:text-[26px] flex items-end pl-2'>{creation.name}</div>
                </div>
                <video src={creation.vlink}  width="100%" loading='lazy' height="100%" loop  muted autoPlay className='object-cover brightness-55 p-2 group-hover:shadow-lg'/>
            </div>
                <div className='flex mt-2 p-[16px]'>
                    <div className='flex flex-col px-[10px] w-[100%]'>
                        {/* <div className='font-[500] py-3 text-[20px] xs:text-[22px] xl:text-[24px] md:text-[26px]'>{creation.name}</div> */}
                        <div className='text-[8px] xxs:text-[10px] pb-3 xs:text-[12px] md:text-[14px] xl:text-[16px] text-[#5a5f61] flex pt-[30px]'>{creation.description}</div>
                    </div>
                </div>
            </div> 
        ))
        
        }
     </>
  )
})

Content.displayName = 'Content';

export default Content