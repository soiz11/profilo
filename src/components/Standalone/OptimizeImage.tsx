"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const OptimizeImage = ({
  src,
  className,
  alt,
}: {
  alt?: string;
  src: string | StaticImageData;
  className: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Image
      onLoad={() => setImageLoaded(true)}
      src={src}
      alt={alt || "image"}
      className={`${
        imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-lg"
      } absolute transition-all duration-500 ${className}`}
    />
  );
};

export default OptimizeImage;
