import React from "react";

const DocSlider = () => {
  const names = ["akd", "KOA", "HUWI"];
  return (
    <div className="flex  relative items-center bg-yellow-400 size-[500px] overflow-hidden ">
      <div className="flex justify-between gap-x-10 pl-5 pr-5  animate-docslider ">
        {names.map((name, index) => (
          <div key={index} className="bg-green-500 size-[350px] ">
            {name}
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-x-10 pl-5 pr-5  animate-docslider">
        {names.map((name, index) => (
          <div key={index} className="bg-green-500 size-[350px] ">
            {name}
          </div>
        ))}
      </div>

      {/* Shadow overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="w-full h-full shadow-docslider"></div> */}
        <div className="w-full h-full bg-gradient-to-r from-background to-transparent to-20% z-40" />
        <div className="w-full h-full bg-gradient-to-r from-transparent to-background to-[100%] from-[80%] z-30"></div>
      </div>
    </div>
  );
};

export default DocSlider;
