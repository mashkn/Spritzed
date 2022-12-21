import React from 'react';
import { render } from 'react-dom';
import RecipeForm from './components/RecipeForm.jsx';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <RecipeForm /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
  ), document.getElementById('root')
);