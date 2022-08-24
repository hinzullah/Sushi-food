import React from 'react'
import homepic from '../Assets/homepic.png'
import Button from '../Components/Button'
import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div className='home'>
        <div className='home-image'>
        <img src={homepic} alt='background'/>
        </div>
        <div className='home-text'>
            <h1>Welcome to Sushi Restaurant</h1>
            <p>People eat with their eyes and Sushi creates an easy way for customers to order when they can see beautiful photos of your food</p>

            <div className='home-text-action'>
            <Link to="/menu"><Button text={'MENU'} /></Link>
            <Link to="/cart"><Button text={'CART'} /></Link>
        </div>
        </div>
        
    </div>
  )
}

export default Homepage