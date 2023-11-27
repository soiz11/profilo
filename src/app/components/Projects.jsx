import React from 'react'
//import vid from "../../../public/vid.mp4"

const Projects = () => {
  return (
    <>
       <div className="w-[80vw]">
        <div className="flex my-10 w-[100%] items-center mb-10 mt-5">
            <div className="text-[22px] flex font-[600] mr-5">Projects</div>
            <div className="flex flex-1 bg-[#939393] h-[3px]"></div>
        </div>
        </div>

        <div className='flex flex-col h-[fit-content]  bg-[#ededed] border-4 shadow-lg rounded-lg border-[white] w-[80vw] overflow-hidden pb-2 group '>
        <div className=' h-[200px] xs:h-[250px] md:h-[300px] xl:h-[350px] w-[100%] relative rounded hidden group-hover:flex transition-duration-600  opacity-0 group-hover:opacity-100 transition-opacity duration-[5s]'>
            <div className='absolute bottom-8 right-10 px-8 py-2 bg-[black] text-[white] border-[3px] text-[18px] border-[white]'>button</div>
            <video src={require('../../../public/vid.mp4')}  width="100%" height="100%" loop muted autoPlay className='object-cover brightness-55 p-2 shadow-lg'/>
        </div>
            <div className='flex mt-2'>
                <div className='hidden'>ph</div>
                <div className='flex flex-col px-[10px]'>
                    <div className='font-[600] text-[20px] xs:text-[22px] xl:text-[24px] md:text-[26px]'>Title</div>
                    <div className='text-[10px] xs:text-[12px] md:text-[16px] xl:text-[18px] text-[#5a5f61]'>desvdcgvvvvvvvvvvvvvvvvvvvvv dgvfdgdg</div>
                </div>
            </div>
        </div> 
     </>
  )
}

export default Projects