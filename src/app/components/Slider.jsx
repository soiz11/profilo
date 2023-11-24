import React from 'react'

const Slider = () => {
  return (
    <div className=" ml-5  mt-4 w-[80%] h-[60px] overflow-hidden shadow bg-[#ededed] border-[1px] border-[white] flex rounded ">
            <div className="flex flex-col w-[100%] h-[100%] animate-switching">
                <div className="box-custom">web developer</div>
                <div className="box-custom">mobile app developer</div>
                <div className="box-custom">content creator</div>
                
            </div>
    </div>
  )
}

export default Slider