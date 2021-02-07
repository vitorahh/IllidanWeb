import React, { useState } from 'react';

import './styles.css'

import logoImg from '../../Assets/img/logo/logoWow.png';
import loginImg from '../../Assets/img/loginImg.svg'


//Form Components
import Register from './Register';
import Login from './LoginForm';


function LoginPage(){

    const [FormButtons, setFormButtons] = useState(true);
    
    return (
        <div id="page-login">
            <div className="page-login-content" id="container">
                <img src={logoImg} alt="Logo Super Nova" className="logo-img"/>
                <div className="logo-container">
                   <img src={loginImg} alt="Login Super Nova"/> 
                    {FormButtons ? <Login status={setFormButtons}/> : <Register status={setFormButtons}/>}
                </div>
                <h2>Chat Interativo com Web Socket</h2>
            </div>
        </div>
    )
}
export default LoginPage;