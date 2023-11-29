import React from 'react'

const Navigation = () => {

    const sections = [
        {
          "name": "About",
          "url": "https://wa.me/+94774782724"
        },
        {
          "name": "Sklls",
          "url": "mailto:soizsinghe@gmail.com"
        },
        {
          "name": "Projects",
          "url": "https://www.linkedin.com/in/sohan11/"
        },
        {
          "name": "Content Creation",
          "url": "https://github.com/soiz11"
        },
       
      ]
    
  return (
    <div className='flex first-letter bg-[#ededed] w-[80vw] backdrop-blur-xl rounded-md shadow-md fixed z-20 mt-2 xl:mb-4 border-2 border-[white]'>
        <div className='flex justify-end px-1 w-[100%] '>
            {sections.map((section,index)=>(
                <div className='flex mx-2 font-[500] my-4 text-[10px] md:text-[14px] xl:text-[16px] md:mx-4 md:hover:border-b-[3px] md:hover:border-[black] border-b-[3px] border-transparent pt-1 duration-700' key={index}>{section.name}</div> 
            ))}
         </div>
    </div>
  )
}

export default Navigation