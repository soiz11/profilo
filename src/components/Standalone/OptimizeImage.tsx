"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const OptimizeImage = ({
  src,
  className,
  alt,
  special,
}: {
  alt?: string;
  src: string | StaticImageData;
  className: string;
  special?: boolean;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {/* Always render Image, just control its visibility */}
      <Image
        onLoad={() => setImageLoaded(true)}
        src={src}
        alt={alt || "image"}
        className={`${
          imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-lg"
        } absolute transition-all duration-500 ${className}`}
      />

      {/* Show `</>` only if special is true and image is not yet loaded */}
      {special && !imageLoaded && (
        <div className="absolute left-1/2 -translate-x-1/2 top-0 xs:top-1/2 -translate-y-1/2 font-semibold z-20 ">
          <div className="flex flex-col xs:scale-100 xl:scale-150 scale-105">
            {/* <div className="text-[40px] leading-[40px] mb-3"> {"<div>"}</div>
            <div className="text-[30px] leading-[30px] ml-[30px]">
              {"<div>"}
            </div>
            <div className="text-[30px] leading-[30px] ml-[60px]">
              Loading ...
            </div>
            <div className="text-[30px] leading-[30px] ml-[30px]">
              {"<div>"}
            </div> */}
            <div className="relative translate-y-0 xs:-translate-y-[50px]">
              <div className="triangle bg-gray-100 blur-3xl w-[250px] h-[250px]"></div>
              <div className="absolute top-3/4 -translate-y-3/4 left-1/2 -translate-x-1/2">
                <div className="text-[50px] leading-[50px] mt-2 ">
                  {"<Image/>"}
                </div>
                <div className="text-center mt-1">Loading ...</div>
              </div>
            </div>

            {/* <div className="text-[40px] leading-[40px] mt-3"> {"</div>"}</div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default OptimizeImage;
