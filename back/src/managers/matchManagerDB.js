import {UserManager} from './userManagerDB.js';

const UM = new UserManager();

class MatchManager {
    addPet  = async (idUser, idPet)=>{
        try {
            //para buscar solo el user
            //el id del pet solo para agregarlo al array de user de like o not_like mirar el modelo de user
            return "";
        } catch (error) {
            console.log(error);
        }
    } 
}

export {MatchManager}