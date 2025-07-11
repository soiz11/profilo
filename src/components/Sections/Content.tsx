"use client";
import Image from "next/image";
import React, { ForwardedRef, forwardRef } from "react";
import angle from "../../../public/socialMedia/logo1.webp";
import fox from "../../../public/socialMedia/logo2.webp";
import OptimizeImage from "../Standalone/OptimizeImage";

//import vid from "../../../public/vid.mp4"

type Creation = {
  url: string;
};

const Content = forwardRef<HTMLDivElement, {}>(
  (props, contentsRef: ForwardedRef<HTMLDivElement>) => {
    const handleButtonClick = (creation: Creation) => {
      window.open(creation.url, "_blank");
    };

    const creations = [
      {
        name: "Angle Theeta",
        url: "https://www.youtube.com/@angletheeta",
        description:
          "Discover the world of mathematics with Angle Theeta! Our channel is your guide to mastering advanced mathematics, whether you're studying for Ordinary or Advanced Levels. We specialize in practical math, covering 95% of applied mathematics concepts and completing lessons on pure mathematics, like integration. Our content is tailored for students at various levels, and we offer supportive playlists for different learning approaches. Stay tuned as we explore probability and statistics soon! Angle Theeta is more than just lessons; it's a community making math accessible and enjoyable. Subscribe now for a straightforward and engaging approach to advanced mathematics!",
        vlink: "/socialMedia/angle.mp4",
        imgurl: angle,
      },
      {
        name: "Fox Make",
        url: "https://www.youtube.com/@FoxMake",
        description:
          "Welcome to Fox Make, your guide to understanding IT without the jargon! Designed for those new to IT, our channel helps you navigate tech essentials in your daily life. We start with the basics and gradually explore more technical topics, making IT easy to grasp. Fox Make is committed to simplifying complex concepts, making them accessible to everyone. As we grow, expect deeper technical insights that enrich your IT knowledge. Subscribe now to Fox Make, where we bridge the gap between everyday users and the world of information technology, making it simple and engaging!",
        vlink: "/socialMedia/fox.mp4",
        imgurl: fox,
      },
    ];

    return (
      <>
        <div className="w-[100%]">
          <div className="flex my-10 w-[100%] items-center sm:mb-10 mb-5  midwidth:mt-14 mt-9">
            <div
              ref={contentsRef}
              className="xs:text-[22px] text-[20px] flex font-[600] mr-5"
            >
              Content Creation
            </div>
            <div className="flex flex-1 bg-[#939393] h-[3px]"></div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 xs:gap-3 gap-0">
            {creations.map((creation, index) => (
              <div
                key={index}
                className="flex flex-col   bg-[#ededed] border-4 shadow-lg rounded-lg border-[white] w-full overflow-hidden pb-2 bigmd:mb-9 mb-5 "
              >
                <div className=" h-[200px] xs:h-[250px]  w-[100%] relative rounded flex md:h-[300px] xl:h-[350px]">
                  <div
                    onClick={() => handleButtonClick(creation)}
                    className=" rounded absolute z-10 bottom-[-8px] right-4 shadow-md md:right-10 md:bottom-6 md:px-8 md:py-2 bg-[black] text-[white]  border-[2px] md:text-[18px] text-[10px] px-2 py-1 border-[white] cursor-pointer"
                  >
                    Visit Channel
                  </div>
                  <div className="xxs:flex  none absolute z-10 bottom-[0px] left-4 translate-y-[48%]">
                    <div
                      onClick={() => handleButtonClick(creation)}
                      className="relative rounded-full shadow-md  bg-[white] md:border-[4px] border-[2px]  border-[white] cursor-pointer xxs:h-[100px] xxs:w-[100px] w-[0px] h-[0px] overflow-hidden "
                    >
                      {/* <Image
                        alt=""
                        src={creation.imgurl}
                        loading="lazy"
                        className="xxs:w-[100%] xxs:h-[100%] w-[0%] h-[0%] object-cover "
                      /> */}
                      <OptimizeImage
                        alt=""
                        src={creation.imgurl}
                        className="xxs:w-[100%] xxs:h-[100%] w-[0%] h-[0%] object-cover"
                      />
                    </div>
                    <div className="xxs:mt-0 mt-[50px] font-medium py-3 text-[20px] xs:text-[22px] xl:text-[24px] md:text-[26px] flex items-end pl-2">
                      {creation.name}
                    </div>
                  </div>
                  <video
                    src={creation.vlink}
                    width="100%"
                    // loading="lazy"
                    height="100%"
                    loop
                    muted
                    autoPlay
                    className="object-cover brightness-55 p-2 group-hover:shadow-lg"
                  />
                </div>
                <div className="flex mt-2 p-[16px]">
                  <div className="flex flex-col px-[10px] w-[100%]">
                    {/* <div className='font-[500] py-3 text-[20px] xs:text-[22px] xl:text-[24px] md:text-[26px]'>{creation.name}</div> */}
                    <div className="text-[14px] xl:text-[18px] text-[#5a5f61] flex pt-[20px]">
                      {creation.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
);

Content.displayName = "Content";

export default Content;
