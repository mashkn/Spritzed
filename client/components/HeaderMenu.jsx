import React from 'react';
import { Route, Link, Routes, useLocaiton } from "react-router-dom";
import { IoIosAddCircleOutline } from 'react-icons/io';


const HeaderMenu = props => {

  

  return (
    <div className='header'>
      <Router>
      <section className='headerRight'>
        <Link to="/recipe/create">
        <button>
        <IoIosAddCircleOutline/>
        <h4>Add New</h4>
        </button>
        </Link>
      </section>
      <section className='headerLeft'>
      </section>
      <Routes>
        <Route path='/recipe/create' element={<RecipeForm />} />
        </Routes>
        </Router> 
  </div>
  )
}

export default HeaderMenu;