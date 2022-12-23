import React from 'react';
import { Route, Link, Routes, useLocaiton } from "react-router-dom";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaCocktail } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";
import { GiSnowBottle, GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import headerLogo from '../assets/headerLogo.png';

const HeaderMenu = props => {



  return (
    <div className='header'>
      <a href="http://localhost:8080/home"><img id="logo" src={headerLogo} alt="Spritzed header logo" height="90"/></a>
      <section className='headerLeft'>
      <a href="http://localhost:8080/recipes/all"><button className='icon'>
          <FaCocktail />
          <h4>All<br/>Cocktails</h4>
        </button>
        </a>
        <a href="http://localhost:8080/recipes/community">
        <button className="icon">
          <RiCommunityLine />
          <h4>Community<br/>Additions</h4>
        </button>
        </a>
        <button className="icon">
          <GiSnowBottle />
          <h4>Christmas<br/>Cocktails</h4>
        </button>
        <a href="http://localhost:8080/recipes/pickone">
        <button className="icon">
          <GiPerspectiveDiceSixFacesRandom />
          <h4>Pick One</h4>
        </button>
        </a>
      </section>
      <section className='headerRight'>
        <a href="http://localhost:8080/recipes/create">
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