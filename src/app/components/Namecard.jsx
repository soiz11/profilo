import React from 'react'

const Namecard = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row w-[100%]'>
            <div className='flex text-[24px] mr-2 font-[600] p-0 xxs:text-[30px] md:text-[35px] lg:text-[40px] md:mr-3'>Sohan</div>
            <div className='flex text-[24px] font-[200] xxs:text-[30px] md:text-[35px] lg:text-[40px]'>Prabhath</div>
        </div>
        
        <div className=" text-[8px] xxs:text-[10px] sm:text-[14px] xl:text-[16px] flex md:mt-1  mb-3 md:mb-5 text-[#5a5f61] w-[95%]">           
          Final year IT undergraduate at the Institute of Technology University 
          of Moratuwa. I am eager to apply my knowledge in a dynamic environments
           and make a strong start to my career.
        </div>
    </div>
  )
}

Namecard.displayName = 'Namecard';

export default Namecard