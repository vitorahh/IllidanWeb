import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css'

function Home(){
    let history = useHistory();
    if(!localStorage.getItem("AccessToken")){
        history.push("/");
    }
        
    return (
       <div>
           <h1>LOGUEI</h1>
       </div>
    )
}
export default Home;