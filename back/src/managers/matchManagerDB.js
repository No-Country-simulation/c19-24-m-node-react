import { UserManager } from './userManagerDB.js';
import { PetManager } from './petManagerDB.js';

const UM = new UserManager();
const PM = new PetManager();

class MatchManager {
    addPetLike = async (idUser, idPet) => {
        try {

            const user = await UM.getUserById(idUser);

            if (!user) {
                return "No se logro encontrar al usuario";
            }

            const pet = await PM.getPetById(idPet);

            if (!pet) {
                return "No se encontro la mascota";
            }

            user.pets_like.push({like : pet._id});

            user.save();

            // const filter = { _id: id };
            // const update = { ...req.body };

            // const updatedUser = await UM.updateUser(filter, bodyUpdate);
            //para buscar solo el user
            //el id del pet solo para agregarlo al array de user de like o not_like mirar el modelo de user
            return user;

        } catch (error) {
            console.log(error);
        }
    }

    addPetNotLike = async (idUser, idPet) => {
        try {

            const user = await UM.getUserById(idUser);

            if (!user) {
                return "No se logro encontrar al usuario";
            }

            const pet = await PM.getPetById(idPet);

            if (!pet) {
                return "No se encontro la mascota";
            }

            user.pets_not_like.push({not_like : pet._id});

            user.save();
            
            return user;

        } catch (error) {
            console.log(error);
        }
    }
}

export { MatchManager }