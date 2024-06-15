import React from "react";
import OnlyName from "./OnlyName";

const NewNamecard = () => {
  return (
    <div className="flex flex-col midwidth:mt-0 mt-[80px] ">
      <div className="midwidth:flex hidden">
        <OnlyName />
      </div>

      <div className="text-justify text-[12px] xs:text-[14px] xl:text-[16px] flex mt-3  mb-3 xl:mb-5  text-[#5a5f61] w-full">
        Final year IT undergraduate at the Institute of Technology, University
        of Moratuwa, currently serving as a Trainee Software Engineer at nCloud
        Solutions. Driven by a passion for technology and innovation, I am eager
        to leverage my academic background and practical experience in software
        development to contribute effectively in dynamic and challenging
        environments. Committed to continuous learning and growth in the field
        of software engineering.
      </div>
    </div>
  );
};

NewNamecard.displayName = "NewNamecard";

export default NewNamecard;
