import React from 'react';

const RecipeBox = props => {
    return (
        <div className="RecipeBox">
            <div className="overFlow"></div>
            <img src={props.image} alt={props.cocktail}></img>
            <p>{props.cocktail}</p>
          </div>
    )
};

export default RecipeBox;
