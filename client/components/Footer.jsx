import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import footerLogo from '../assets/footerLogo.png';


const Footer = props => {

  

  return (
    <div className='footer'>
      <div className="footerLeft">
      <p id="title">Company</p>
        <p>About</p>
        <p>Contact</p>
        <p>Press</p>
      
      </div>
      <div className="footerLeft">
      <p id="title">Explore</p>
        <p>Browse Recipes</p>
        <p>Create a Recipe</p>
        <p>Community</p>
        <p>Home</p>
      
      </div>
      <img src={footerLogo} alt="Spritzed Footer Logo"/>
      <div className="footerRight">
      <p id="title">Sign Up</p>
        <p>Options to join</p>
        <p>our cocktail community</p>
        <p>coming soon!</p>
        <p>All rights reserved.</p>
      
      </div>
  </div>
  )
}

export default Footer;