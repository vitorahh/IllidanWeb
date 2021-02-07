import React from 'react';
import { Link } from 'react-router-dom'
import entrarImg from '../../../Assets/img/icons/ButtonEntrar.svg'

import {propsForm} from '../InterfaceLogin';

function LoginForm(props:propsForm){

    return (
        <form id="login-super-nova"className="LoginSuperNova" action="">
            <div className="input-block">
                <input type="text" className="usuario" placeholder="Usuario"/>
                <input type="password" className="Senha"placeholder="Senha"/>
            </div>
            <div className="button-container">
                <Link to="#" className="cadastrar" onClick={() => props.status(false)}>
                    Cadastrar-se
                </Link>
                <Link to="/Home" className="login">
                    <img src={entrarImg} alt="Logar"/>
                Entrar
                </Link>
            </div>
        </form>

    )
}
export default LoginForm;