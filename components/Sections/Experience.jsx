import React, { forwardRef } from "react";
import ncloud from "@/public/companies/ncloud.png";
import itum from "@/public/companies/itum.png";
import Image from "next/image";
import Link from "next/link";

const Experience = forwardRef((props, experienceRef) => {
  const experiences = [
    {
      companyLogo: ncloud,
      companyName: "nCloud Solutions",
      position: "Trainee Software Engineer",
      duration: "Feb 2024 - Present",
      url: "https://ncloud.lk/",
    },
    {
      companyLogo: itum,
      companyName: "Institute of Technology University of Moratuwa - (ITUM)",
      position: "Undergraduate",
      duration: "Nov 2021 - Jan 2024",
      url: "https://itum.mrt.ac.lk/",
    },
  ];
  return (
    <>
      <div className="w-[100%]">
        <div className="flex my-10 w-[100%] items-center sm:mb-10 mb-5 mt-12 ">
          <div
            ref={experienceRef}
            className="xs:text-[22px] text-[20px] flex font-[600] mr-5"
          >
            Experience
          </div>
          <div className="flex flex-1 bg-[#939393] h-[3px]"></div>
        </div>
      </div>

      <div className="relative ">
        <div className="absolute  bigmd:w-[5px] w-[4px] bg-black top-7 bottom-7 bigmd:translate-x-12 xs:translate-x-[38px] xxs:translate-x-8 translate-x-7 z-10" />
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex bigmd:my-6 my-4 xs:gap-x-5 gap-x-3 items-center"
          >
            <Link
              href={experience.url}
              target="_blank"
              className="z-20 bg-background bigmd:size-[100px] xs:size-[80px] xxs:size-[70px] size-[60px] overflow-hidden rounded-full xxs:border-[3px] border-[2px] border-white shadow-md"
            >
              <Image
                src={experience.companyLogo}
                alt="logo of the company"
                className="size-[100%] object-contain xs:p-2 p-[6px]"
              />
            </Link>
            <div className="flex flex-col flex-1">
              <div className="font-[500] xs:text-[18px] xxs:text-[16px] text-[15px]">
                {experience.position}
              </div>
              <Link
                href={experience.url}
                target="_blank"
                className="font-[400] xs:text-[15px] xxs:text-[14px] text-[13px]"
              >
                {experience.companyName}
              </Link>
              <div className="font-[300] xs:text-[13px] xxs:text-[12px] text-[11px] text-secondary">
                {experience.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});

Experience.displayName = "Experience";

export default Experience;
