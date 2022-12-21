import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const RecipeForm = props => {

    // const [recipeName, setRecipeName] = useState('');

    // //button click handler
    // const createRecipe = (e) => {
    //     // e.preventDefault();
    //     // console.log(e.target);
    //     const recipe = { name: 'test', ingredient1: 'test ingredient', measure1: 'test measure' };
    //     fetch('http://localhost:3000/recipe/create', {
    //         mode: 'no-cors',
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8',
    //         },
    //         body: JSON.stringify(recipe),
    //     })
    //         .then(data => console.log('data', data))
    // };
    // console.log('recipe form hello')

    return (
        <div className="RecipeForm">
            Create Recipe
            <form method='POST' action='http://localhost:3000/recipe/create'>
                <input name="name" type="text" placeholder="Recipe Name"></input>
                <input name="image" type="file"></input>
                <input name="ingredient1" type="text" placeholder="Ingredient"></input>
                <input name="measure1" type="text" placeholder="Volume"></input>
                <input type="submit" value='Submit'/>
                {/* <button type="submit" onClick={createRecipe}>Create Recipe</button> */}
            </form>
            {/* <button type="submit" onClick={createRecipe}>Create Recipe</button> */}
        </div>
    )
};

export default RecipeForm;