import Image from "next/image";
import React from "react";
import logo from "../../../public/branding/sohan.webp";
import { useEffect, useState } from "react";
import OptimizeImage from "../Standalone/OptimizeImage";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second delay for loading
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Clear the timeout on component unmount (cleanup)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${
        loading
          ? "flex justify-center items-center h-screen bg-gray-200 "
          : "hidden"
      }`}
    >
      <div className="flex">
        <div className="relative w-[150px] md:w-[300px] flex flex-col justify-center ">
          {/* <Image alt="" loading="lazy" src={logo} /> */}
          <OptimizeImage alt="" src={logo} className="bottom-4" />
          <div className="h-[10px] md:h-[20px] flex justify-start items-center w-[100%]">
            <div className="bg-[black] h-[3px] md:h-[6px] animate-loading"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

Loader.displayName = "Loader";

export default Loader;
