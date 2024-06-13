import React, { forwardRef } from "react";
import Image from "next/image";
import reactim from "../../../public/react.webp";
import nextim from "../../../public/next.webp";
import tailwindim from "../../../public/tailwind.webp";
import nodeim from "../../../public/node.webp";
import postmanim from "../../../public/postman.webp";
import firebaseim from "../../../public/firebase.webp";
import mongoim from "../../../public/mongodb.webp";
import figmaim from "../../../public/figma.webp";
import psim from "../../../public/ps.webp";
import flutterweb from "../../../public/flutter.webp";
import Bar from "./Bar";

const Skills = forwardRef((props, skillsRef) => {
  const mixers = [
    {
      name: "ReactJS",
      url: reactim,
      amount: 85,
    },
    {
      name: "NextJs",
      url: nextim,
      amount: 70,
    },
    {
      name: "Tailwind CSS",
      url: tailwindim,
      amount: 80,
    },
    {
      name: "Flutter",
      url: flutterweb,
      amount: 70,
    },
    {
      name: "NodeJs",
      url: nodeim,
      amount: 50,
    },
    {
      name: "Postman",
      url: postmanim,
      amount: 60,
    },
    {
      name: "Firebase",
      url: firebaseim,
      amount: 40,
    },
    {
      name: "MongoDB",
      url: mongoim,
      amount: 45,
    },
    {
      name: "Figma",
      url: figmaim,
      amount: 80,
    },
    {
      name: "Photoshop",
      url: psim,
      amount: 95,
    },
  ];
  return (
    <>
      <div className="w-[100%]">
        <div className="flex  w-[100%] items-center sm:mb-10 mb-5  mt-12">
          <div ref={skillsRef} className="text-[22px] flex font-[600] mr-5">
            Skills
          </div>
          <div className="flex flex-1 bg-[#939393] h-[3px]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:place-Skills-between xs:gap-5 gap-x-10 md:gap-x-14 sm:gap-x-12 ">
          {mixers.map((mixer, index) => (
            <div key={index} className="flex flex-row mb-5">
              <div className="flex xxs:w-[80px] w-[60px] xxs:h-[60px] h-[40px] rounded-lg bg-[#ededed] shadow-md border-2 border-[white] mr-3">
                <Image
                  src={mixer.url}
                  loading="lazy"
                  alt={mixer.name}
                  className="w-[100%] object-contain"
                />
              </div>

              <Bar widthAmount={mixer.amount} title={mixer.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

Skills.displayName = "Skills";

export default Skills;
