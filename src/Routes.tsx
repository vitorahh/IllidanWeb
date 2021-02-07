
//Import do React
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import './Assets/css/global.css';

//Pages
import login from './Pages/Login';

function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={login} />
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Routes;
  