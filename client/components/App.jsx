import React from 'react';
import { render } from 'react-dom';
//importing the Main Container 
import HeaderMenu from './HeaderMenu.jsx';
import MainContainer from '../containers/MainContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeForm from './RecipeForm.jsx';
import { Navigate } from 'react-router-dom';
import Footer from './Footer.jsx';

const App = (props) => {

  return (
    <div className="App">
      <HeaderMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<MainContainer />} />
          <Route path="/recipe/create" element={<RecipeForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;