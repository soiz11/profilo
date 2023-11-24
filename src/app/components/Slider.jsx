import React from 'react'

const Slider = () => {
  return (
    <div className=" w-[80%] h-[60px] overflow-hidden shadow bg-[#ededed] border-[1px] border-[white] flex rounded ">
            <div className="flex flex-col w-[100%] h-[180px] animate-switching ml-1">
                <div className="box-custom">Web Developer</div>
                <div className="box-custom">Mobile App Developer</div>
                <div className="box-custom">Content Creator</div>
                
            </div>
    </div>
  )
}

export default Slider