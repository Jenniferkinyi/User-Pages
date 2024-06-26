import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>FARMER'S CHOICE</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Popular</p>
                </div>
                <p>Trusted</p>
                <p>By Farmers</p>
            </div>
            <div className="hero-latest-btn">
                <div>New Stock</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}
