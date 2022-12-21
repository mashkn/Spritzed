import React from 'react';
import { render } from 'react-dom';
//importing the Main Container 
import Main from './Main.jsx';
import HeaderMenu from './HeaderMenu.jsx';
import MainContainer from '../containers/MainContainer.jsx';

const App = (props) => {

    return (
      <div className = "App">
        {/* <HeaderMenu/> */}
        <HeaderMenu/>
        <MainContainer/>
      </div>
    );
}

export default App;