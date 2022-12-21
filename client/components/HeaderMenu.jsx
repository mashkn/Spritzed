import React from 'react';
import { Route, Link, Routes, useLocaiton } from "react-router-dom";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaCocktail } from "react-icons/fa";
import { MdNoDrinks } from "react-icons/md";
import { GiSnowBottle, GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { NavLink } from 'react-router-dom';


const HeaderMenu = props => {



  return (
    <div className='header'>

      <section className='headerRight'>
        <a href="recipe/create">
          <button>
            <IoIosAddCircleOutline />
            <h4>Add New</h4>
          </button>
        </a>
      </section>
      <section className='headerLeft'>
        <button className='icon'>
          <FaCocktail />
          <h4>All<br/>Cocktails</h4>
        </button>
        <button className="icon">
          <MdNoDrinks />
          <h4>Non<br/>Alcoholic</h4>
        </button>
        <button className="icon">
          <GiSnowBottle />
          <h4>Christmas<br/>Cocktails</h4>
        </button>
        <button className="icon">
          <GiPerspectiveDiceSixFacesRandom />
          <h4>Surprise Me</h4>
        </button>
      </section>

    </div>
  )
}

export default HeaderMenu;