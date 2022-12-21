import React, { useState } from 'react';
import Axios from 'axios';

const RecipeForm = props => {

    const [ recipeName, setRecipeName ] = useState('');

    //button click handler
    const createRecipe = () => {
        console.log(recipeName, 'HERE IS THE NAME OF THE RECIPE!')
    }

    return (
        <div className="RecipeForm">
            Create Recipe
            <form method='POST' action='/create'>
                <input name="name" type="text" placeholder="Recipe Name" onChange={(event) => setRecipeName(event.target.value)}></input>
                <input name="image" type="image"></input>
                <input name="ingredient1" type="text" placeholder="Ingredient"><input name="measure1" type="text" placeholder="Volume"></input></input>
                <button type="submit" value="create recipe" onClick={createRecipe}></button>
            </form>
        </div>
    )
};

export default RecipeForm;