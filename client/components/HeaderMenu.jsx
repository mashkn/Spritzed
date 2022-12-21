import React from 'react';
import { Route, Link, Routes, useLocaiton } from "react-router-dom";
import { IoIosAddCircleOutline } from 'react-icons/io';


const HeaderMenu = props => {

  

  return (
    <div className='header'>

      <section className='headerRight'>
        <a href="recipe/create">
        <button>
        <IoIosAddCircleOutline/>
        <h4>Add New</h4>
        </button>
        </a>
      </section>
      <section className='headerLeft'>
      </section>

  </div>
  )
}

export default HeaderMenu;