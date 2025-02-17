import React from "react";
import myimg3 from "../../../public/branding/web_img3.png";
import NewNamecard from "../Standalone/NewNameCard";
import Slider from "../Standalone/Slider";
import NewSocial from "../Standalone/NewSocial";
import OnlyName from "../Standalone/OnlyName";
import OptimizeImage from "../Standalone/OptimizeImage";

const NewHero = () => {
  return (
    <div className=" bg-transparent">
      {/**Image section**/}
      <div className="relative flex midwidth:flex-row flex-col items-center midwidth:items-start 2xl:gap-x-36 lg:gap-x-20 midwidth:gap-x-10 gap-x-0">
        <div className="midwidth:hidden flex w-full">
          <OnlyName className="absolute xs:flex-col flex-row gap-x-2 z-30 sm:-top-[130px] xs:-top-[90px] top-[190px] leading-[30px] bxs:leading-[25px] sm:leading-[40px]" />
        </div>
        <div className="relative  w-fit">
          {/* <Image
            src={myimg3}
            alt="Sohan Prabhath Weerasinghe"
            className="absolute xl:h-[500px] lg:h-[450px] sm:h-[400px] h-[300px] w-fit -bottom-[0px] bxs:bottom-[30px] sm:bottom-[30px] midwidth:-bottom-[100px] 2xl:-bottom-[60px] -translate-x-1/2 left-1/2 z-20"
          /> */}
          <OptimizeImage
            special={true}
            src={myimg3}
            alt="Sohan Prabhath Weerasinghe"
            className="absolute xl:h-[500px] lg:h-[450px] sm:h-[400px] h-[300px] w-fit -bottom-[0px] bxs:bottom-[30px] sm:bottom-[30px] midwidth:-bottom-[100px] 2xl:-bottom-[60px] -translate-x-1/2 left-1/2 z-20"
          />

          <div className="transition-all duration-1000 xs:skew-x-[-15deg] xs:rotate-[-15deg] skew-x-[14deg] rotate-[14deg] lg:h-[300px] sm:h-[250px] bxs:h-[200px] h-[150px] xl:w-[500px] lg:w-[400px] bxs:w-[350px] w-[300px] border-2 border-white shadow-lg rounded-md ml-[10px] " />
        </div>
        <div className="midwidth:-translate-y-[80px] translate-y-0 ">
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
