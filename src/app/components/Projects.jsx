'use client'
import Image from 'next/image';
import React, {forwardRef} from 'react'
import bw from "../../../public/bloggerworld.webp"
import stationary from "../../../public/stationary.webp"
import pik from "../../../public/pik.webp"

//import vid from "../../../public/vid.mp4"

const Projects = forwardRef((props, projectsRef) => {
     
    const handleButtonClick = (myproject) => {
        window.open(myproject.url, '_blank');
      };

    const myprojects = [
        {
          "name": "Social Media Website - (Blogger World)",
          "url": "https://github.com/soiz11/social-media-application.git",
          "description":"A blogger website using MERN stack with redux. The backend is completed with a solid foundation. Currently,focused on crafting an inatative frontend and connecting it to the backend",
          "vlink":"",
          "imgurl":bw
        },
        {
            "name": "Smart Try On App (PIKDY)",
            "url": "https://github.com/soiz11/smart-fiton.git",
            "description":"Smart Try On is the final year group project that involves creating a multi vendor app using Flutter, Firebase and Python. The app include a unique smart try on feature using augmented reality (AR)",
            "vlink":"",
            "imgurl":pik
        },
        {
            "name": "ITUM Stationary Management System",
            "url": "https://github.com/soiz11/StationaryMS.git",
            "description": "ITUM Stationary Management System, a group project for the Software Project Management module in the 3rd semester CA components, incorporates essential CRUD operations and authentication. Utilizing React for the frontend and Firebase for the database, it offers an efficient solution for stationary management with a user-friendly interface.",
            "vlink": "",
            "imgurl": stationary
        },
       
     
        
      ]

  return (
    <>
       <div className="w-[100%]">
        <div className="flex my-10 w-[100%] items-center mb-10 mt-5">
            <div ref={projectsRef} className="text-[22px] flex font-[600] mr-5">Projects</div>
            <div className="flex flex-1 bg-[#939393] h-[3px]"></div>
        </div>
        </div>
        
        { myprojects.map((myproject,index)=>(
            <div key={index} className='flex flex-col h-[fit-Projects]  bg-[#ededed] border-4 shadow-lg rounded-lg border-[white] w-[80vw] overflow-hidden pb-2 group mb-9 '>
            <div className=' h-[200px] xs:h-[250px]  w-[100%] relative rounded flex md:h-[0] md:group-hover:h-[300px] xl:group-hover:h-[350px] duration-1000 '>
            <div  onClick={() => handleButtonClick(myproject)} className=' rounded absolute z-10 bottom-4 right-4 md:right-10 md:bottom-6 md:px-8 md:py-2 bg-[black] text-[white] md:border-[3px] border-[2px] md:text-[18px] md:group-hover:opacity-100 duration-1000  md:opacity-0 text-[10px] px-4 py-1 border-[white] cursor-pointer' >Dive to the Github</div>
                <Image alt="" loading='lazy' src={myproject.imgurl}  width="100%" height="100%" loop muted autoPlay className='object-cover brightness-55 p-2 group-hover:shadow-lg'/>
            </div>
                <div className='flex mt-2'>
                    <div className='hidden md:w-[25%] md:flex md:px-2 md:group-hover:w-[0] duration-1000'>
                        <Image alt="" loading='lazy' src={myproject.imgurl} className='w-[100%] h-[100%] object-cover'/>
                    </div>
                    <div className='flex flex-col px-[10px] w-[100%] '>
                        <div className='font-[500] py-3 text-[18px] xs:text-[20px] md:text-[22px]'>{myproject.name}</div>
                        <div className='text-[10px] pb-3 xs:text-[12px] md:text-[14px] xl:text-[16px] text-[#5a5f61] flex'>{myproject.description}</div>
                    </div>
                </div>
            </div> 
        ))
        
        }
     </>
  )
})

Projects.displayName = 'Projects';

export default Projects