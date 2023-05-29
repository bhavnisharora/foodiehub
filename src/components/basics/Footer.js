import React from 'react'
import './Footer.css'
import foodie from './foodie.png'
// import logo from './logo.jpg'
const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <img src={foodie} alt="" style={{ height: '150px' }} />
                <p>&copy; 2023 FoodieHub</p>
            </div>
        </>
    )
}

export default Footer
