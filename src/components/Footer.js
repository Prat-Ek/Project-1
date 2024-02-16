import "./Footerstyles.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location ">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div><p>Koteshwor,Narephant</p>
                    <p>Nepal</p>
                    </div>
                   </div>
                
                <div className="phone">
               <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>9861443894</h4>
                </div>
                <div className="gmail">
               <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/> pratik12.pa.@gmail</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>
                
    This is an It company recruiting young web developers.
    Koteshwor, Narephant
    
                </p>
                <div className="logo">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer