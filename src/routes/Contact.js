import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage2 from '../components/Heroimage2'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>   
      <Navbar/>
      <Heroimage2 heading="Contact" text="Lets have a chat"/>
      <Form/>
    <Footer/>
    </div>
  )
}

export default Contact