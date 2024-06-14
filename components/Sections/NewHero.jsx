import React from "react";
import myimg from "@/public/web_img.webp";
import Image from "next/image";
import NewNamecard from "../Standalone/NewNameCard";
import Slider from "../Standalone/Slider";
import NewSocial from "../Standalone/NewSocial";
import OnlyName from "../Standalone/OnlyName";

const NewHero = () => {
  return (
    <div className=" bg-transparent">
      {/**Image section**/}
      <div className="relative flex midwidth:flex-row flex-col items-center midwidth:items-start 2xl:gap-x-36 lg:gap-x-20 gap-x-10">
        <div className="midwidth:hidden flex w-full">
          <OnlyName className="absolute flex-col z-30 sm:-top-[130px] -top-[90px] leading-[50px]" />
        </div>
        <div className="relative  w-fit">
          <Image
            src={myimg}
            alt=""
            className="absolute xl:h-[500px] lg:h-[450px] sm:h-[400px] h-[300px] w-fit bottom-[30px] sm:bottom-[30px] midwidth:-bottom-[100px] 2xl:-bottom-[60px] -translate-x-1/2 left-1/2 z-20"
          />

          <div
            className="lg:h-[300px] sm:h-[250px] h-[200px] xl:w-[500px] lg:w-[400px] w-[350px] border-2 border-white shadow-lg rounded-md ml-[10px] "
            style={{
              transform: "skewX(-15deg) rotate(-15deg)",
            }}
          />
        </div>
        <div className="-translate-y-[80px]">
          <NewNamecard />
          <div className="mt-5">
            <Slider />
          </div>
          <div className="mt-10">
            <NewSocial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
// style={{
//     transform: "skewX(-28deg) skewY(-40deg) rotateZ(-20deg)",
//   }}
