import "./Heroimagestyle.css"
import React from 'react'
import background from "../assets/background.jpg"
import { Link } from "react-router-dom"
const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="bg" src={background} alt="missing"/>
        </div>
        <div className="content">
            <p>HI, I AM A FREELACER</p>
            <h1>React Developer.</h1>
            <Link to="/Project" className="btn">Project</Link>
            <Link to="/Contact" className="btn-light">Contact</Link>
        </div>
    </div>
  )
}

export default Heroimage