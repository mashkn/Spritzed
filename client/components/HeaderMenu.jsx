import React from 'react';
import { Route, Link, Routes, useLocaiton } from "react-router-dom";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaCocktail } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";
import { GiSnowBottle, GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import image1 from '../assets/footerLogo.png';

const HeaderMenu = props => {



  return (
    <div className='header'>
      <img src={image1} alt="Spritzed header logo"/>
      <section className='headerLeft'>
        <button className='icon'>
          <FaCocktail />
          <h4>All<br/>Cocktails</h4>
        </button>
        <button className="icon">
          <RiCommunityLine />
          <h4>Community<br/>Additions</h4>
        </button>
        <button className="icon">
          <GiSnowBottle />
          <h4>Christmas<br/>Cocktails</h4>
        </button>
        <button className="icon">
          <GiPerspectiveDiceSixFacesRandom />
          <h4>Pick One</h4>
        </button>
      </section>
      <section className='headerRight'>
        <a href="http://localhost:8080/recipe/create">
          <button>
            <IoIosAddCircleOutline />
            <h4>Add New</h4>
          </button>
        </a>
      </section>
      

    </div>
  )
}

export default HeaderMenu;