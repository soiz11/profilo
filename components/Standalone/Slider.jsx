import React from "react";
import { ImMobile } from "react-icons/im";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";

const Slider = () => {
  return (
    <div className=" w-[350px] h-[60px] overflow-hidden shadow bg-[#ededed] border-[1px] border-[white] flex rounded ">
      <div className="flex flex-col w-[100%] h-[180px] animate-switching mx-5">
        <div className="flex justify-between items-center">
          <div className="box-custom">Web Developer</div>
          <RiComputerLine className="text-[30px]" />
        </div>
        <div className="flex justify-between items-center">
          <div className="box-custom">Mobile App Developer</div>
          <ImMobile className="text-[30px]" />
        </div>
        <div className="flex justify-between items-center">
          <div className="box-custom">Content Creator</div>
          <AiOutlineYoutube className="text-[35px]" />
        </div>
      </div>
    </div>
  );
};

Slider.displayName = "Slider";

export default Slider;
