import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage2 from '../components/Heroimage2'
import Aboutcontent from '../components/Aboutcontent'
const About = () => {
  return (
    <div>  
       <Navbar/>
       <Heroimage2 heading="ABOUT." text="I am a friendly front-end-developer"/>
       <Aboutcontent/>
           <Footer/>
    </div>
  )
}

export default About