import React from "react";

const DocSlider = () => {
  const names = ["akd", "KOA", "HUWI"];
  return (
    <div className="flex relative justify-center items-center bg-yellow-400 size-[500px] overflow-hidden ">
      <div className="flex justify-between gap-x-10  ">
        {names.map((name, index) => (
          <div
            key={index}
            className="bg-green-500 size-[350px] animate-docslider"
          >
            {name}
          </div>
        ))}
      </div>
      {/* Shadow overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full shadow-docslider"></div>
      </div>
    </div>
  );
};

export default DocSlider;
