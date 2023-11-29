import Image from 'next/image'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Content from './components/Content'

export default function Home() {
  return (
    <>
    <div className='flex flex-col justify-center w-[100vw] items-center mt-[10%]'>
      <div className='flex flex-col items-center'>
        <Hero/>
        <Skills/>
        <Projects/>
        <Content/>
      </div>
   </div>
    </>
  )
}
