
import { login, registerLogin } from '../../Interfaces/Login';
import * as LoginServices from '../../Services/User/User';
import { AlertError } from '../../Services/SweetAlerts/Alerts';
import { ValidationRegister } from '../../Validation/LoginValidation';


export function doLogin(user:login){
    return LoginServices.doLogin(user)
        .then((response) => {
            localStorage.setItem('AccessToken', JSON.stringify(response.AccessToken))
            return true;
        })
        .catch((err) => {
            AlertError(err.message);
        });
}

export async function registerUser(user:registerLogin){
    try{

        await ValidationRegister(user)

        const IdUser = await LoginServices.register(user)
            .then((response) => {
                return response.IdUser;
            })
            .catch((err) => {
                AlertError(err.message);
            });
        
        return IdUser;

    }catch(err){
        AlertError(err.message);
        return 0
    }
}