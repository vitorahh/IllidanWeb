import Axios from '../API';

export function listarPersonagens(){
    return Axios.get(`https://illidanapp.herokuapp.com/Personagem/`)
        .then((response)=>{
            return response.data.Produtos;
        })
        .catch((err)=>{
            return err.message;
        })
}