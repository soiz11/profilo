import React, { ForwardedRef, forwardRef } from "react";
import Image from "next/image";
import reactim from "../../../public/skills/react.webp";
import nextim from "../../../public/skills/next.webp";
import tailwindim from "../../../public/skills/tailwind.webp";
import reduxim from "../../../public/skills/redux.webp";
import nodeim from "../../../public/skills/node.webp";
import postmanim from "../../../public/skills/postman.webp";
import firebaseim from "../../../public/skills/firebase.webp";
import mongoim from "../../../public/skills/mongodb.webp";
import dockerim from "../../../public/skills/docker.webp";
import nginx from "../../../public/skills/nginx.png";
import githubactions from "../../../public/skills/githubactions.png";
import figmaim from "../../../public/skills/figma.webp";
import psim from "../../../public/skills/ps.webp";
import flutterweb from "../../../public/skills/flutter.webp";
import postgres from "../../../public/skills/postgres.webp";
import Bar from "@/components/Standalone/Bar";
import OptimizeImage from "../Standalone/OptimizeImage";

const Skills = forwardRef<HTMLDivElement, {}>(
  (props, skillsRef: ForwardedRef<HTMLDivElement>) => {
    const mixers = [
      {
        name: "ReactJS",
        url: reactim,
        amount: 80,
      },
      {
        name: "NextJs",
        url: nextim,
        amount: 85,
      },
      {
        name: "Tailwind CSS",
        url: tailwindim,
        amount: 80,
      },
      {
        name: "Redux",
        url: reduxim,
        amount: 70,
      },
      {
        name: "Flutter",
        url: flutterweb,
        amount: 40,
      },
      {
        name: "NodeJs",
        url: nodeim,
        amount: 70,
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
        amount: 75,
      },
      {
        name: "PostgreSQL",
        url: postgres,
        amount: 75,
      },
      {
        name: "Docker",
        url: dockerim,
        amount: 50,
      },
      {
        name: "Ngnix",
        url: nginx,
        amount: 50,
      },
      {
        name: "Github Actions",
        url: githubactions,
        amount: 50,
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
        <div className="flex w-[100%] items-center sm:mb-10 mb-5 midwidth:mt-12 mt-9">
          <div
            ref={skillsRef}
            className="xs:text-[22px] text-[20px] flex font-[600] mr-5"
          >
            Skills
          </div>
          <div className="flex flex-1 bg-[#939393] h-[3px]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:place-Skills-between xs:gap-5 gap-x-10 md:gap-x-14 sm:gap-x-12 ">
          {mixers.map((mixer, index) => (
            <div key={index} className="flex flex-row mb-5">
              <div className="relative flex xxs:w-[80px] w-[60px] xxs:h-[70px] h-[50px] rounded-lg bg-[#ededed] shadow-md border-2 border-[white] mr-3">
                {/* <Image
                  src={mixer.url}
                  loading="lazy"
                  alt={mixer.name}
                  className="w-[100%] object-contain"
                /> */}
                <OptimizeImage
                  src={mixer.url}
                  alt={mixer.name}
                  className="w-[100%] object-contain -left-1/2 translate-x-1/2 top-1/2 -translate-y-1/2"
                />
              </div>

              <Bar widthAmount={mixer.amount} title={mixer.name} />
            </div>
          ))}
        </div>
      </>
    );
  }
);

Skills.displayName = "Skills";

export default Skills;
