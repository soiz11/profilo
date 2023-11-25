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

        {/* <div className='flex flex-col h-[200px] bg-[#ededed] border-4 shadow-lg rounded-lg border-[white] w-[80vw] overflow-hidden'>
        <div className='flex h-[150px] w-[100%]'>
            <video width="100%" height="100%" loop>
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
            <div className='flex'>
                <div className='hidden'>ph</div>
                <div className='flex'>des</div>
            </div>
        </div> */}
     </>
  )
}

export default Projects