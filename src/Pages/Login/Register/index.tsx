import React from 'react';
import { Link } from 'react-router-dom'

import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import ArthasLogo from '../../../Assets/img/Person/ArthasLogo.jpg'
import IllidanLogo from '../../../Assets/img/Person/IllidanLogo.jpg'
import RegisterIcon from '../../../Assets/img/icons/edit.svg'

import {propsForm} from '../InterfaceLogin';

import './styles.css'

function RegisterForm(props:propsForm){

    const friendOptions = [
        {
          key: '1',
          text: 'Arthas Menethil',
          value: '1',
          image: { avatar: true, src: ArthasLogo },
        },
        {
          key: '2',
          text: 'Illidan Tempesfuria',
          value: '2',
          image: { avatar: true, src: IllidanLogo },
        }
      ]

    return (
            <form id="Register-Illidan"className="LoginSuperNova" action="">
                <div className="input-block">
                    <input type="text" className="usuario" placeholder="Nome"/>
                    <input type="text" className="usuario" placeholder="Usuario"/>
                    <input type="password" className="Senha"placeholder="Senha"/>
                    <input type="password" className="Senha"placeholder="Confirma senha"/>
                    <Dropdown
                        placeholder='Selecione um Personagem'
                        fluid
                        className="dropdownPerson"
                        selection
                        options={friendOptions}
                    />
                </div>
                <div className="button-container">
                    <Link to="#" className="cadastrar" onClick={() => props.status(true)}>
                        Voltar
                    </Link>
                    <Link to="/Home" className="login">
                        <img src={RegisterIcon} alt="Cadastrar"/>
                        Cadastrar
                    </Link>
                </div>
            </form>
    )
}
export default RegisterForm;