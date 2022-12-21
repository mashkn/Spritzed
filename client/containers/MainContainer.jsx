import React from 'react';
// import { render } from 'sass';
// import { connect } from 'react-redux';

import RecipeContainer from './RecipeContainer.jsx';
import FeaturedRecipes from '../components/FeaturedRecipes.jsx';
import SearchBox from '../components/SearchBox.jsx';

const MainContainer = props => {
  return (
  <div className="innerBody">
    <div className="welcomeText">
      <h3>Welcome to the cocktail place!</h3>
      <SearchBox/>
      </div>
      <FeaturedRecipes />
      <RecipeContainer />
    
  </div>
  )
}

export default MainContainer;