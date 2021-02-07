import { registerLogin } from "../Interfaces/Login";

export async function ValidationRegister(user:registerLogin){
    try{
        const regex = /[0-9]/;

        if(user.user.length < 3 )
            throw new Error("Nome Invalido!");
        if(regex.test(user.user))
            throw new Error("Nome possuie caracteres Invalidos!");
        if(user.password !== user.passwordConfirm)
            throw new Error("As senhas não estão iguais!");
        if(user.password.length < 8)
            throw new Error("A Senha deve conter pelo menos 8 caracteres!");
        if(user.username.length < 5)
            throw new Error("O Usuario deve conter pelo menos 5 caracteres!");
        if(!user.idPersonagem)
            throw new Error("Selecione um personagem!");
    }catch(err){
        throw err;
    }
}