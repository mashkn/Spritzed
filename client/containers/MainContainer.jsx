import React from 'react';
// import { render } from 'sass';
// import { connect } from 'react-redux';

import RecipeContainer from './RecipeContainer.jsx';
import FeaturedRecipes from '../components/FeaturedRecipes.jsx';
import SearchBox from '../components/SearchBox.jsx';
import Footer from '../components/Footer.jsx';

const MainContainer = props => {
  return (
  <div className="innerBody">
    <div className="outerBox">
      <SearchBox/>
      <FeaturedRecipes />
      <RecipeContainer />
      <Footer/>
    </div>
  </div>
  )
}

export default MainContainer;