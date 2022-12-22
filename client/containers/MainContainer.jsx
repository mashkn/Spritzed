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

        <p id="title">Cocktails</p>
        <p>Making cocktails is about sharing moments with friends. Browse numerous cocktails that are delicious and share your own recipes. Mix things up with one of the custom recipes from community contributors or choose from the main library, so you can impress guests at your next party, or just enjoy an apertif after a long day.</p>

      </div>
      <SearchBox />

      <FeaturedRecipes />
      <RecipeContainer />

    </div>
  )
}

export default MainContainer;