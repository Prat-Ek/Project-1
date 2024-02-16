import { Link } from "react-router-dom"
import "./Aboutcontentstyles.css"
import React from 'react'
import reactjs from "../assets/reactjs.jpg"
import second from "../assets/second.jpg"
const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p> I'm a front end developer. I can create a responsive website for my clients according to their choices.</p>
        </div>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={reactjs} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={second} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent