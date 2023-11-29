"use client"

import Image from 'next/image'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Content from './components/Content'
import Navigation from './components/Navigation'
import { useRef } from 'react'

export default function Home() {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contents = useRef(null);

  const scrollToSection = (elementRef)=>{
    if (elementRef && elementRef.current) {
      const targetOffset = elementRef.current.offsetTop - 100;
    window.scrollTo({
      top:targetOffset,
      behavior:'smooth'
    })
  }
}
  return (
    <>
    <div className='flex flex-col justify-center w-[100vw] items-center'>
      <div className='flex flex-col items-center'>
        <Navigation 
            scrollToSection={scrollToSection} 
            aboutRef={about}
            skillsRef={skills}
            projectsRef={projects}
            contentsRef={contents} />
        <Hero ref={about}/>
        <Skills ref={skills}/>
        <Projects ref={projects}/>
        <Content ref={contents}/>
      </div>
   </div>
    </>
  )
}

