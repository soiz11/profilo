'use client'
import React, { useRef, useState, useEffect } from 'react';
import Loader from './Loader'; // Replace 'Loader' with the actual loader component
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Content from './components/Content';
import Foooter from './components/Foooter';

export default function Home() {
  const [loading, setLoading] = useState(true);


  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contents = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      const targetOffset = elementRef.current.offsetTop - 100;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
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
        
        <Loader/>
        {/* <Loader className={`loader ${loading ? '' : 'hidden'}`} /> */}
{/*       
        <div className= 'flex flex-col justify-center w-[100%] items-center top-0'> */}
         <div className={loading ? 'hidden' : 'flex flex-col justify-center w-[100%] items-center top-0'}> 
          <div className='flex flex-col items-center'>
            <Navigation
              scrollToSection={scrollToSection}
              aboutRef={about}
              skillsRef={skills}
              projectsRef={projects}
              contentsRef={contents}
            />
            <Hero ref={about} />
            <div className='w-[80vw]'>
            <Skills ref={skills} />
            <Projects ref={projects} />
            <Content ref={contents} />
            <Foooter />
            </div>
          </div>
        </div>
        
      
      
    </>
  );
}
