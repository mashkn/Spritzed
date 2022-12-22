import React from 'react';
import {CiSearch} from 'react-icons/ci'


const SearchBox = props => {
    return (
        <div className="searchBox">

            
            <input placeholder="I have a cocktail in mind..." /><CiSearch id="icon"/>

        </div>
    )
}
{/* <NavLink to={'view/all'}>
<FaCocktail />
<h4>All Cocktails</h4>
</NavLink>
<NavLink to={'view/non-alcoholic'}>
<MdNoDrinks />
<h4>Non-Alcoholic</h4>
</NavLink>
<NavLink to={'view/christmas'}>
<GiSnowBottle />
<h4>Christmas Cocktails</h4>
</NavLink>
<NavLink to={'view/random'}>
<GiPerspectiveDiceSixFacesRandom />
<h4>Surprise Me</h4>
</NavLink> */}

export default SearchBox;