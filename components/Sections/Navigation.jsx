import React, { forwardRef, useState } from "react";
import Image from "next/image";
import logo from "@/public/branding/sohan.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidDownArrow } from "react-icons/bi";

const Navigation = forwardRef(
  ({
    scrollToSection,
    scrollToTop,
    aboutRef,
    skillsRef,
    projectsRef,
    contentsRef,
    experienceRef,
  }) => {
    const [mobileNavActive, setMobileNavActive] = useState(false);

    const sections = [
      {
        name: "About",
        url: aboutRef,
      },
      {
        name: "Experience",
        url: experienceRef,
      },
      {
        name: "Sklls",
        url: skillsRef,
      },
      {
        name: "Projects",
        url: projectsRef,
      },
      {
        name: "Content Creation",
        url: contentsRef,
      },
    ];

    const pcHandleClick = (url) => {
      if (url != aboutRef) {
        return scrollToSection(url);
      }

      return scrollToTop();
    };

    const mobileOnClickHandle = (url) => {
      if (url != aboutRef) {
        scrollToSection(url);
        setMobileNavActive(!mobileNavActive);
      } else {
        scrollToTop();
        setMobileNavActive(!mobileNavActive);
      }
    };

    return (
      <>
        <div className="flex first-letter bg-[#93939311] xs:w-[80vw] w-[85vw] backdrop-blur-xl rounded-md shadow-md fixed z-50 mt-2 xl:mb-4 border-2 border-[white] justify-between">
          <div className="flex  w-[200px]  xs:pl-[30px] pl-[20px] items-center">
            <Image
              alt=""
              loading="lazy"
              className="xs:h-[70%] xs:w-[70%] h-[60%] w-[60%] object-contain "
              src={logo}
            />
          </div>

          {/**pc version**/}
          <BiSolidDownArrow
            onClick={() => setMobileNavActive(!mobileNavActive)}
            className={` ${
              mobileNavActive ? "rotate-180" : "rotate-0"
            } xs:mx-[30px] mx-[20px] my-3  text-[20px] flex midwidth:hidden transition-all duration-700`}
          />
          <div className="midwidth:flex hidden px-1 ">
            {sections.map((section, index) => (
              <div
                onClick={() => pcHandleClick(section.url)}
                className="flex mx-2 font-[500] my-4  text-[6px] xs:text-[7px] sm:text-[10px] md:text-[14px] xl:text-[16px] md:mx-4 md:hover:border-b-[3px] md:hover:border-[black] border-b-[3px] border-transparent pt-1 duration-700 cursor-pointer"
                key={index}
              >
                {section.name}
              </div>
            ))}
          </div>
        </div>

        {/**mobile version**/}
        <div
          className={` ${
            mobileNavActive ? "opacity-100" : "opacity-0 -z-20"
          } transition-all duration-700 flex flex-col fixed top-[80px] xs:right-[10%] right-[8%]  items-center bg-[#93939311] backdrop-blur-xl rounded-md z-50 border-2 border-[white] shadow-md`}
        >
          {sections.map((section, index) => (
            <div
              onClick={() => mobileOnClickHandle(section.url)}
              className="flex justify-center mx-4  font-[500] my-4 text-[14px] md:mx-4  cursor-pointer "
              key={index}
            >
              {section.name}
            </div>
          ))}
        </div>
      </>
    );
  }
);

Navigation.displayName = "Navigation";
export default Navigation;
