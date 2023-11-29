import Image from 'next/image'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Content from './components/Content'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <>
    <div className='flex flex-col justify-center w-[100vw] items-center'>
      <div className='flex flex-col items-center'>
        <Navigation/>
        <Hero/>
        <Skills/>
        <Projects/>
        <Content/>
      </div>
   </div>
    </>
  )
}
