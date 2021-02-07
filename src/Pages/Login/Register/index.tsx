import React, { useEffect, useState } from 'react';

import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { useForm } from "react-hook-form";

//Components
import { AlertSuccess } from '../../../Services/SweetAlerts/Alerts';

//Controllers
import { DropDownPersonagens } from '../../../Controllers/Personagens/PersonagensController'
import { registerUser } from '../../../Controllers/Login/LoginControllers';

//Fonts Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

//Configuração de Componente
import {propsForm} from '../InterfaceStateLogin';

function RegisterForm(props:propsForm){
  
    const [DropdownPerson, setDropdownPerson] = useState<Array<object>>([])

    useEffect(() => {
        const listar = DropDownPersonagens();
        setDropdownPerson(listar);
    },[]);

    //Formulario
    const { register, handleSubmit } = useForm();
    const [idPersonagem, setIdPersonagem] = useState('')

    const handleDropdown = (event: any,data:any) => {
        setIdPersonagem(data.value);
    };

    const onSubmit = async (data:any) => {
        const user = {
            user:data.user,
            username: data.username,
            password:data.password,
            passwordConfirm:data.passwordConfirm,
            idPersonagem: parseInt(idPersonagem) 
        }
        const idUser = await registerUser(user)
        if(idUser > 0){
            AlertSuccess("Cadastro Efetuado com Sucesso!");
            props.status(true)
        }
            
    } 
    return (
            <form id="Register-Illidan" className="LoginSuperNova" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-block">
                    <input type="text" 
                        className="usuario" 
                        placeholder="Nome"
                        autoComplete="off"
                        name="user" 
                        ref={register} />
                    <input type="text" 
                        className="usuario" 
                        placeholder="Usuario"
                        autoComplete="off"
                        name="username" 
                        ref={register} />
                    <input type="password" 
                        className="Senha"
                        placeholder="Senha"
                        autoComplete="off"
                        name="password" 
                        ref={register} />
                    <input type="password" 
                        className="Senha"
                        placeholder="Confirma senha"
                        name="passwordConfirm" 
                        autoComplete="off"
                        ref={register} />
                    <Dropdown
                        placeholder='Selecione um Personagem'
                        fluid
                        className="dropdownPerson"
                        selection
                        options={DropdownPerson}
                        onChange={handleDropdown}
                    />
                </div>
                <div className="button-container">
                    <button className="btn-link" onClick={() => props.status(true)}>
                        Voltar
                    </button>
                    <button className="btn-success" type="submit">
                        <FontAwesomeIcon icon={faUserPlus} />
                        Cadastrar
                    </button>
                </div>
            </form>
    )
}
export default RegisterForm;