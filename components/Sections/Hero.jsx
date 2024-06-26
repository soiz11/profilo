import React, { forwardRef } from "react";
import Image from "next/image";
import myimg from "@/public/branding/web_img.webp";
import Slider from "@/components/Standalone/Slider";
import Namecard from "@/components/Standalone/Namecard";
import Social from "@/components/Standalone/Social";

const Hero = forwardRef((props, aboutRef) => {
  return (
    <div
      ref={aboutRef}
      className="flex bg-[#ededed] border-4 shadow-lg rounded-lg border-[white] h-[270px] xxs:h-[290px] xs:h-[300px] sm:h-[330px] md:h-[400px] w-full overflow-hidden mt-[86px] xl:mt-[100px]"
    >
      <div className="flex flex-col bg-transparent  w-[100%] md:w-[60%] px-[30px] py-[15px] h-[fit-Hero] my-3">
        <Namecard />
        <Slider />
        <Social />
      </div>
      <div className="md:flex w-[40%] py-[1%] hidden ">
        <Image
          alt=""
          loading="lazy"
          src={myimg}
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </div>
  );
});

Hero.displayName = "Hero";

export default Hero;
