import { listarPersonagens } from "../../Services/Personagens/Personagens";

import { Personagens } from "../../Interfaces/Personagens";


export  function DropDownPersonagens(){
  const friendOptions:Array<Object> = []
    listarPersonagens()
      .then((response:Array<Personagens>) => {
          response.map((personagem:Personagens) => {
            const Object = {
              key: personagem.ID_PERSONAGEM.toString(),
              text: personagem.DS_PERSONAGEM,
              value: personagem.ID_PERSONAGEM.toString(),
              image: { avatar: true, src: personagem.DS_URL_IMG },
            }
            return friendOptions.push(Object)
          });
      });
  return friendOptions;
}