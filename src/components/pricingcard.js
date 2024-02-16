import { Link } from "react-router-dom"
import "./Pricingcardstyles.css"
import React from 'react'

const pricingcard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>--Basic--</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p> - 3Days - </p>
                <p> - 3Pages - </p>
                <p> - Featured - </p>
                <p> - Responsive Degin - </p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>--Permium--</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p> - 2Days - </p>
                <p> - 2Pages - </p>
                <p> - Featured - </p>
                <p> - Responsive Degin - </p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>--Bussiness--</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p> - 5Days - </p>
                <p> - 8Pages - </p>
                <p> - Featured - </p>
                <p> - Responsive Degin - </p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default pricingcard