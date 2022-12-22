import React, { useState, useEffect } from 'react';

const RecipeView = props => {

    return (
        <div className="RecipeForm">
            
            <div className="MainForm">
            <h2>Create a Recipe</h2>
            <hr/>
            <form method='POST' action='http://localhost:3000/recipes/create'>
                <input name="name" type="text" placeholder="Recipe Name"></input>
                <input name="image" type="file"></input>
                <input name="ingredient1" type="text" placeholder="Ingredient"></input>
                <input name="measure1" type="text" placeholder="Volume"></input>
                <input type="submit" value='Submit'/>
                {/* <button type="submit" onClick={createRecipe}>Create Recipe</button> */}
            </form>
            </div>
            {/* <button type="submit" onClick={createRecipe}>Create Recipe</button> */}
        </div>
    )
};

export default RecipeView;