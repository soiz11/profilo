import React from "react";
import OnlyName from "./OnlyName";

const NewNamecard = () => {
  return (
    <div className="flex flex-col midwidth:mt-0 mt-[80px] ">
      <div className="midwidth:flex hidden">
        <OnlyName />
      </div>

      <div className="text-justify text-[14px] xl:text-[18px] flex mt-3  mb-3 xl:mb-5  text-[#5a5f61] w-full">
        Software Engineer at nCloud Solutions with a strong passion for
        technology and innovation. With hands-on experience in software
        development, I thrive in dynamic and challenging environments. Dedicated
        to continuous learning and growth in the field of software engineering.
      </div>
    </div>
  );
};

NewNamecard.displayName = "NewNamecard";

export default NewNamecard;
