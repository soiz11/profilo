'use client'
import Image from 'next/image';
import React from 'react'
import bw from "../../../public/bloggerworld.png"
import stationary from "../../../public/stationary.png"

//import vid from "../../../public/vid.mp4"

const Content = () => {
     
    const handleButtonClick = (creation) => {
        window.open(creation.url, '_blank');
      };

    const creations = [
        {
          "name": "Angle Theeta",
          "url": "https://github.com/soiz11/social-media-application.git",
          "description":"A blogger website using MERN stack with redux. The backend is completed with a solid foundation. Currently,focused on crafting an inatative frontend and connecting it to the backend",
          "vlink":"",
          "imgurl":bw
        },
        {
            "name": "Fox Make",
            "url": "https://github.com/soiz11/smart-fiton.git",
            "description":"Smart Try On is the final year group project that involves creating a multi vendor app using Flutter,Firebase and Python. The app include a unique smart try on feature using augmented reality (AR)",
            "vlink":"",
            "imgurl":stationary
        },
       
     
        
      ]

  return (
    <>
       <div className="w-[80vw]">
        <div className="flex my-10 w-[100%] items-center mb-10 mt-5">
            <div className="text-[22px] flex font-[600] mr-5">Content Creation</div>
            <div className="flex flex-1 bg-[#939393] h-[3px]"></div>
        </div>
        </div>
        
        { creations.map((creation,index)=>(
            <div key={index} className='flex flex-col h-[fit-content]  bg-[#ededed] border-4 shadow-lg rounded-lg border-[white] w-[80vw] overflow-hidden pb-2 mb-9 '>
            <div className=' h-[200px] xs:h-[250px]  w-[100%] relative rounded flex md:h-[300px] xl:h-[350px]'>
                <div  onClick={() => handleButtonClick(creation)} className=' rounded absolute z-10 bottom-[-8px] right-4 shadow-md md:right-10 md:bottom-6 md:px-8 md:py-2 bg-[white] text-[black] md:border-[3px] border-[2px] md:text-[18px] text-[10px] px-2 py-1 border-[white] cursor-pointer' >Visit Channel</div>
                <div className='flex absolute z-10 bottom-[0px] left-4 translate-y-[48%]'>
                    <div  onClick={() => handleButtonClick(creation)} className=' rounded-full shadow-md md:right-10 md:bottom-6  bg-[white] md:border-[4px] border-[2px]  border-[white] cursor-pointer h-[100px] w-[100px] overflow-hidden  ' >
                        <Image src={creation.imgurl} className='w-[100%] h-[100%] object-cover'/>
                    </div>
                    <div  className='font-[500] py-3 text-[20px] xs:text-[22px] xl:text-[24px] md:text-[26px] flex items-end pl-2'>{creation.name}</div>
                </div>
                <video src={require('../../../public/vid.mp4')}  width="100%" height="100%" loop muted autoPlay className='object-cover brightness-55 p-2 group-hover:shadow-lg'/>
            </div>
                <div className='flex mt-2 p-[16px]'>
                    <div className='flex flex-col px-[10px] w-[100%]'>
                        {/* <div className='font-[500] py-3 text-[20px] xs:text-[22px] xl:text-[24px] md:text-[26px]'>{creation.name}</div> */}
                        <div className='text-[10px] pb-3 xs:text-[12px] md:text-[16px] xl:text-[18px] text-[#5a5f61] flex pt-[30px]'>{creation.description}</div>
                    </div>
                </div>
            </div> 
        ))
        
        }
     </>
  )
}

export default Content