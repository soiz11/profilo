import React,{forwardRef} from 'react'
import Image from 'next/image';
import logo from "../../../public/sohan.webp"

const Navigation = forwardRef(({ scrollToSection, aboutRef, skillsRef, projectsRef, NavigationsRef }) => {

    const sections = [
        {
          "name": "About",
          "url": aboutRef
        },
        {
          "name": "Sklls",
          "url": skillsRef
        },
        {
          "name": "Projects",
          "url": projectsRef
        },
        {
          "name": "Navigation Creation",
          "url": NavigationsRef
        },
       
      ]
    
  return (
    <div className='flex first-letter bg-[#93939311] w-[80vw] backdrop-blur-xl rounded-md shadow-md fixed z-20 mt-2 xl:mb-4 border-2 border-[white] justify-between'>
        <div className='flex  md:w-[200px] sm:w-[150px] xxs:w-[100px] w-[0] pl-[30px] items-center'>
          <Image alt="" className="md:w-[70%] md:h-[70%] sm:h-[50%] sm:w-[50%] h-[70%] w-[70%] object-contain " src={logo}/>
        </div>
        <div className='flex px-1'>
            {sections.map((section,index)=>(
                <div onClick={()=>scrollToSection(section.url)} className='flex mx-2 font-[500] my-4 text-[6px] xs:text-[7px] sm:text-[10px] md:text-[14px] xl:text-[16px] md:mx-4 md:hover:border-b-[3px] md:hover:border-[black] border-b-[3px] border-transparent pt-1 duration-700 cursor-pointer' key={index}>{section.name}</div> 
            ))}
         </div>
    </div>
  )
})

Navigation.displayName = 'Navigation';
export default Navigation