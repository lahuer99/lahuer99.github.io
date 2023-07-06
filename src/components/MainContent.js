import React from 'react'
import Home from './Home'
import Career from './Career'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'

const MainContent = () => {
  return (
    <div className='snap-x'>
    <Home/>
    <Career/>
    <Projects/>
    <Skills/>
    <Footer/>
  </div>
  )
}

export default MainContent