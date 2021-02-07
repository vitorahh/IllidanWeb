import Axios from '../API';

export function listUser(){
    const lstUser:Array<userInterface> = [];
    return Axios.get(`apiUsuarios/ListarTodosUsuarios?idOrganizacao=${ConfigGeral.dadosOrganizacao.idOrganizacao}&idSistema=3`)
        .then((response)=>{
            
            
            response.data.map((Use:userInterface) => {
                const UserModel:userInterface ={
                    ID_USUARIO: Use.ID_USUARIO,
                    DS_NOME:Use.DS_NOME,
                    DS_EMAIL:Use.DS_EMAIL,
                    DS_LOGIN:Use.DS_LOGIN,
                    DT_ULTIMO_ACESSO:Use.DT_ULTIMO_ACESSO,
                    FL_ADMINISTRADOR:Use.FL_ADMINISTRADOR,
                    FL_ATIVO:Use.FL_ATIVO
                }
                return lstUser.push(UserModel);
            });

            return {valid:true, lstUser:lstUser}
               
        })
        .catch((err)=>{
            return {valid:false, lstUser:lstUser, message:err.message}
        })
}