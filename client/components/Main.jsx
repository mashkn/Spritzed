import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import MainContainer from '../containers/MainContainer.jsx';
import RecipeForm from './RecipeForm.jsx';
import HeaderMenu from './HeaderMenu.jsx';

const Main = () => {
    return (
        <div></div>
        // <Router>
        //     <HeaderMenu />
        //     <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        //         <Route path='/' element={<MainContainer />} />
        //         <Route path='/recipe/create' element={<RecipeForm />} />
        //     </Routes>
        // </Router>
    );
}

export default Main;
