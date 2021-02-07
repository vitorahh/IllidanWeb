import { login, Register } from '../../Interfaces/Login';
import Axios from '../API';


export function doLogin(props:login){
    return Axios.post(`/User/Authenticate/`, props)
        .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            throw new Error(JSON.parse(err.request.response).message);
        })
}
export function register(props:Register){
    return Axios.post(`/User/Register/`, props)
        .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            throw new Error(JSON.parse(err.request.response).message);
        })
}