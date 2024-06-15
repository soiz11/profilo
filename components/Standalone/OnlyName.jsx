import React from "react";

const OnlyName = ({ className = "" }) => {
  return (
    <div className={`${className} flex flex-row w-full`}>
      <div className="flex font-[600] p-0 text-[30px] sm:text-[40px] bigsm:text-[45px] midwidth::text-[35px] xl:text-[50px] 2xl:text-[70px] md:mr-3 mb-1">
        Sohan
      </div>
      <div className="flex font-[200] text-[30px] sm:text-[40px]  bigsm:text-[45px] midwidth::text-[35px] xl:text-[50px] 2xl:text-[70px] mb-1">
        Prabhath
      </div>
    </div>
  );
};

export default OnlyName;
