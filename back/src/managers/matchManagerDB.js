import { UserManager } from './userManagerDB.js';
import { PetManager } from './petManagerDB.js';

const UM = new UserManager();
const PM = new PetManager();

class MatchManager {
    addPetLike = async (userId, petId) => {
        try {
            const userManager = new UserManager();
            const petManager = new PetManager();

            const user = await userManager.getUserById(userId);

            if (!user) {
                return {
                    status: "error",
                    payload: "User not found"
                };
            }

            const pet = await petManager.getPetById(petId);

            if (!pet) {
                return {
                    status: "error",
                    payload: "Pet not found"
                };
            }

            user.pets_like.push({ like: pet._id });
            await user.save();

            return {
                status: "success",
                payload: user.pets_like
            };
        } catch (error) {
            console.log(error);
            return {
                status: "error",
                payload: "Error adding pet like"
            };
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

            user.pets_not_like.push({ not_like: pet._id });

            await user.save();
            
            return user;

        } catch (error) {
            console.log(error);
        }
    }
}

export { MatchManager }