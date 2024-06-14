"use client";
import React, { useRef, useState, useEffect } from "react";
import Navigation from "@/components/Sections/Navigation";
import Hero from "@/components/Sections/Hero";
import Skills from "@/components/Sections/Skills";
import Projects from "@/components/Sections/Projects";
import Content from "@/components/Sections/Content";
import Foooter from "@/components/Sections/Foooter";
import Experience from "@/components/Sections/Experience";
import NewHero from "@/components/Sections/NewHero";
import Loader from "@/components/Sections/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contents = useRef(null);
  const experience = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      const targetOffset = elementRef.current.offsetTop - 100;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  };

  // console.log(loading);

  // useEffect(() => {
  //   const hideLoader = () => {
  //     setLoading(false);

  //   };

  //   window.addEventListener('DOMContentLoaded', hideLoader);

  //   return () => {
  //     window.removeEventListener('DOMContentLoaded', hideLoader);
  //   };
  // }, []);

  // console.log(loading);

  useEffect(() => {
    const hideLoader = () => {
      setLoading(false);
    };

    // Simulating a delay for testing purposes
    const timeoutId = setTimeout(() => {
      hideLoader();
    }, 4000);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  console.log(loading);
  return (
    <>
      <Loader />
      {/* <Loader className={`loader ${loading ? '' : 'hidden'}`} /> */}
      {/*       
        <div className= 'flex flex-col justify-center w-[100%] items-center top-0'> */}
      <div
        className={
          loading
            ? "hidden"
            : "flex flex-col justify-center w-[100%] items-center top-0"
        }
      >
        <div className="flex flex-col items-center">
          <Navigation
            scrollToSection={scrollToSection}
            aboutRef={about}
            skillsRef={skills}
            projectsRef={projects}
            contentsRef={contents}
            experienceRef={experience}
          />
        </div>

        <div className="xs:w-[80vw] w-[85vw]">
          <div className="mt-[220px] sm:mt-[300px] midwidth:mt-[200px] lg:mt-[250px]">
            <NewHero />
          </div>

          {/* <Hero ref={about} /> */}
          <Experience ref={experience} />
          <Skills ref={skills} />
          <Projects ref={projects} />
          <Content ref={contents} />
          <Foooter />
        </div>
      </div>
    </>
  );
}
