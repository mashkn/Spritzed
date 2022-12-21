import React from 'react';
import { FaCocktail } from "react-icons/fa";
import { MdNoDrinks } from "react-icons/md";
import { GiSnowBottle, GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const SearchBox = props => {
    return (
        <div className="searchBox">
            <section className="icons">
                <div className='icon'>
                    <FaCocktail />
                    <h4>All Cocktails</h4>
                </div>
                <div className="icon">
                    <MdNoDrinks />
                    <h4>Non-Alcoholic</h4>
                </div>
                <div className="icon">
                    <GiSnowBottle />
                    <h4>Christmas Cocktails</h4>
                </div>
                <div className="icon">
                    <GiPerspectiveDiceSixFacesRandom />
                    <h4>Surprise Me</h4>
                </div>
            </section>
            <p id="header">------ search box --------</p>
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