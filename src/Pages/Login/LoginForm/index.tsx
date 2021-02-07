import React from 'react';

//import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
//Import Controller
import { doLogin } from '../../../Controllers/Login/LoginControllers';
//Import Interface
import {login} from '../../../Interfaces/Login';

//import React Router Dom e Form
import {  useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


//Configurações do Componente

import {propsForm} from '../InterfaceStateLogin';
function LoginForm(props:propsForm){

    localStorage.removeItem("AccessToken");

    //Formulario
    let history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: login) => {
        const user:login = {
            username:data.username,
            password:data.password
        }
        doLogin(user)
        .then((response) => {
            if(response === true)
            history.push("/Home");
        })
    } 

    return (
        <form 
            id="login-Illidan"
            className="LoginSuperNova" 
            onSubmit={handleSubmit(onSubmit)}>
                <div className="input-block">
                    <input type="text" 
                        className="usuario" 
                        id="username"
                        name="username" 
                        ref={register} 
                        placeholder="Usuario"/>
                    <input type="password" 
                        className="Senha" 
                        id="password"
                        name="password"
                        ref={register({ required: true })}
                        placeholder="Senha"/>
                </div>
                <div className="button-container">
                    <button className="btn-link" onClick={() => props.status(false)}>
                        Cadastrar-se
                    </button>
                    <button className="btn-success" type="submit">
                        <FontAwesomeIcon icon={faSignInAlt} />
                            Entrar
                    </button>
                </div>
        </form>

    )
}
export default LoginForm;