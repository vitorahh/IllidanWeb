
//Import do React
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import './Assets/css/global.css';

//Pages
import login from './Pages/Login';
import home from './Pages/Home';

function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={login} />
          <Route path="/home" component={home} />
        </Switch>
      </BrowserRouter>
      
    );
  }
  
  export default Routes;
  