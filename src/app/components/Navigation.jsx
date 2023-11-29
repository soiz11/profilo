import React,{forwardRef} from 'react'

const Navigation = forwardRef(({ scrollToSection, aboutRef, skillsRef, projectsRef, contentsRef }) => {

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
          "name": "Content Creation",
          "url": contentsRef
        },
       
      ]
    
  return (
    <div className='flex first-letter bg-[#93939311] w-[80vw] backdrop-blur-xl rounded-md shadow-md fixed z-20 mt-2 xl:mb-4 border-2 border-[white]'>
        <div className='flex justify-end px-1 w-[100%] '>
            {sections.map((section,index)=>(
                <div onClick={()=>scrollToSection(section.url)} className='flex mx-2 font-[500] my-4 text-[10px] md:text-[14px] xl:text-[16px] md:mx-4 md:hover:border-b-[3px] md:hover:border-[black] border-b-[3px] border-transparent pt-1 duration-700 cursor-pointer' key={index}>{section.name}</div> 
            ))}
         </div>
    </div>
  )
})

export default Navigation