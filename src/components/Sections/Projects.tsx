"use client";
import React, { forwardRef } from "react";
import taxiairportlogo from "../../../public/projects/taxiairport-logo.png";

import ute from "../../../public/projects/ute.png";
import stationary from "../../../public/projects/stationary.png";
import pikdy from "../../../public/projects/pikdy.png";
import ncloud from "../../../public/projects/ncloud.png";
import paint from "../../../public/projects/paint.png";
import digitz from "../../../public/projects/digitz.png";
import costiqo from "../../../public/projects/costiqo.png";
import cabs from "../../../public/projects/airportcab-logo.png";

import Bar from "@/components/Standalone/Bar";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";
import OptimizeImage from "../Standalone/OptimizeImage";

//import vid from "../../../public/vid.mp4"

interface projectProps {
  projectLogo: String;
  projectName: string;
  projectType: string;
  frameworks: string;
  contribution: number;
  url: string;
}

const Projects = forwardRef<HTMLDivElement, {}>((props, projectsRef) => {
  const handleButtonClick = (myproject: projectProps) => {
    window.open(myproject.url, "_blank");
  };

  const myprojects = [
    {
      projectLogo: ncloud,
      projectName: "Service One",
      projectType: "Professional Project (ncloud solutions)",
      frameworks: "Next.js , MongoDB ,  Tanstack Query, Auth.js",
      contribution: 99,
      url: "ongoing",
    },
    {
      projectLogo: costiqo,
      projectName: "Costiqo",
      projectType: "Personal Project",
      frameworks: "Next.js , MongoDB , Auth.js",
      contribution: 99,
      url: "https://www.costiqo.com/",
    },
    {
      projectLogo: paint,
      projectName: "My Online Paint",
      projectType: "Personal Project",
      frameworks: "Next.js , MongoDB , Auth.js",
      contribution: 99,
      url: "https://www.myonlinepaint.com/",
    },
    {
      projectLogo: digitz,
      projectName: "Digitz",
      projectType: "Professional Project (ncloud solutions)",
      frameworks: "Next.js , MongoDB , Redux , Onepay, Auth.js",
      contribution: 99,
      url: "https://www.digitz.lk/",
    },
    {
      projectLogo: cabs,
      projectName: "Airport Cab LK",
      projectType: "Professional Project (ncloud solutions)",
      frameworks: "Next.js , NodeMailer, Google Place Api",
      contribution: 99,
      url: "https://www.airportcab.lk/",
    },
    {
      projectLogo: taxiairportlogo,
      projectName: "Taxi Airport LK",
      projectType: "Professional Project (ncloud solutions)",
      frameworks: "Next.js , NodeMailer, Google Place Api",
      contribution: 99,
      url: "https://www.taxiairport.lk/",
    },
    {
      projectLogo: ute,
      projectName: "UTE CAT Solar",
      projectType: "Professional Project (ncloud solutions)",
      frameworks: "React.js , Javascript",
      contribution: 35,
      url: "https://www.ute.lk/solar/solar-calculator/",
    },
    {
      projectLogo: stationary,
      projectName: "Stationary Mgmt. System",
      projectType: "University Project (ITUM)",
      frameworks: "React.js , Firebase",
      contribution: 60,
      url: "https://github.com/soiz11/StationaryMS",
    },
    {
      projectLogo: pikdy,
      projectName: "Smart Try On App (PIKDY)",
      projectType: "University Project (ITUM)",
      frameworks: "Flutter , Firebase , Python",
      contribution: 40,
      url: "https://github.com/soiz11/smart-fiton",
    },
  ];

  return (
    <>
      <div className="w-[100%]">
        <div className="flex my-10 w-[100%] items-center sm:mb-10 mb-5 midwidth:mt-12 mt-9">
          <div
            ref={projectsRef}
            className="xs:text-[22px] text-[20px] flex font-[600] mr-5"
          >
            Projects
          </div>
          <div className="flex flex-1 bg-[#939393] h-[3px]"></div>
        </div>
      </div>

      <div className=" grid grid-cols-1 bigmd:grid-cols-2 3xl:grid-cols-3  3xl:gap-x-5 2xl:gap-x-24  gap-x-5 2xl:gap-y-10 gap-y-5">
        {myprojects.map((myproject, index) => (
          <div
            key={index}
            className="flex xl:flex-row bigmd:flex-col flex-row bg-[#ededed] border-2 shadow-lg rounded-lg border-[white]  overflow-hidden 3xl:p-5 2xl:px-10 bigmd:px-5 bigsm:px-10  px-5 py-5 3xl:gap-x-5 2xl:gap-x-10 bigmd:gap-x-5 bigsm:gap-x-10 gap-x-5 items-center relative"
          >
            {myproject.url == "ongoing" ? (
              <div className="xs:text-[14px] text-[12px] text-white bg-black rounded-md xs:px-2 px-1 py-[1px] xs:py-[2px] absolute xs:right-3 xs:top-3 xxs:top-12 top-11 right-2 xxs:right-3 z-10">
                ongoing
              </div>
            ) : (
              <a
                target="_blank"
                href={myproject.url}
                className="absolute right-3 top-3 z-10 cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaCircleArrowRight
                  size={22}
                  className="cursor-pointer bg-white rounded-full xs:translate-x-0  xs:translate-y-0 translate-y-7 xs:p-0 p-[2px]"
                />
              </a>
            )}
            <div className="absolute  right-3 top-3 xxs:size-[50px] size-[40px]  xs:hidden  rounded-full xs:border-[3px] border-[1px] border-white flex justify-center items-center xxs:p-1 p-[2px] shadow-md">
              {/* <Image
                src={myproject.projectLogo}
                alt=""
                className="object-cover"
              /> */}
              <OptimizeImage
                src={myproject.projectLogo}
                alt=""
                className="object-cover"
              />
            </div>

            <div className="relative 3xl:size-[150px] 2xl:size-[170px] xl:size-[150px] bigmd:size-[180px] bigsm:size-[150px] bxs:size-[130px] xs:size-[80px]  hidden  xl:my-0  bigmd:my-5 my-0 rounded-full border-[3px] border-white  xs:flex justify-center items-center p-1 shadow-md">
              <OptimizeImage
                src={myproject.projectLogo}
                alt=""
                className="object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 gap-y-[10px] xl:mb-0 bigmd:mb-5 mb-0 z-10">
              <div>
                <div className="xs:text-[16px] text-[14px] font-semibold">
                  Project Name
                </div>
                <div className="xs:text-[20px] text-[18px] leading-5">
                  {myproject.projectName}
                </div>
              </div>
              <div>
                <div className="xs:text-[16px] text-[14px] font-semibold">
                  Project Type
                </div>
                <div className="text-[14px]">{myproject.projectType}</div>
              </div>
              <div>
                <div className="xs:text-[16px] text-[14px] font-semibold">
                  Frameworks / Packages
                </div>
                <div className="text-[14px] text-[#5a5f61] ">
                  {myproject.frameworks}
                </div>
              </div>
              <div>
                <div className="xs:text-[16px] text-[14px] font-semibold mb-1 flex justify-between">
                  <div>Contribution</div>
                  <div>{myproject.contribution} %</div>
                </div>
                <Bar widthAmount={myproject.contribution} />
              </div>
            </div>
            {/* <div className=" h-[200px] xs:h-[250px]  w-[100%] relative rounded flex md:h-[0] md:group-hover:h-[300px] xl:group-hover:h-[350px] duration-1000 ">
            <div
              onClick={() => handleButtonClick(myproject)}
              className=" rounded absolute z-10 bottom-4 right-4 md:right-10 md:bottom-6 md:px-8 md:py-2 bg-[black] text-[white] md:border-[3px] border-[2px] md:text-[18px] md:group-hover:opacity-100 duration-1000  md:opacity-0 text-[10px] px-4 py-1 border-[white] cursor-pointer"
            >
              Dive to the Github
            </div>
            <Image
              alt=""
              loading="lazy"
              src={myproject.imgurl}
              width="100%"
              height="100%"
              loop
              muted
              autoPlay
              className="object-cover brightness-55 p-2 group-hover:shadow-lg"
            />
          </div>
          <div className="flex mt-2">
            <div className="hidden md:w-[25%] md:flex md:px-2 md:group-hover:w-[0] duration-1000">
              <Image
                alt=""
                loading="lazy"
                src={myproject.imgurl}
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="flex flex-col px-[10px] w-[100%] ">
              <div className="font-[500] py-3 text-[18px] xs:text-[20px] md:text-[22px]">
                {myproject.name}
              </div>
              <div className="text-[10px] pb-3 xs:text-[12px] md:text-[14px] xl:text-[16px] text-[#5a5f61] flex">
                {myproject.description}
              </div>
            </div>
          </div> */}
          </div>
        ))}
      </div>
    </>
  );
});

Projects.displayName = "Projects";

export default Projects;
