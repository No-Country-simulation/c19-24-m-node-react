import PetModel from '../models/PetModel.js';

class PetManager {
    getPets = async () => {
        try {
            const pets = await PetModel.find();

            return pets;

        } catch (error) {
            console.log(error);
        }
    }

    getPetById = async (id) => {
        try {
            const pet = await PetModel.findOne({ id }); //puede ser q tengas q pasar el objeto como {_id : id}

            return pet;

        } catch (error) {
            console.log(error);
        }
    }

    createPet = async () => {
        try {
            const newPet = await PetModel.create({});

            return newPet;

        } catch (error) {
            console.log(error);
        }
    }

    updatePet = async (filter, bodyUpdate) => {
        try {
            const updatedPet = await PetModel.findOneAndUpdate(filter, bodyUpdate);

            return updatedPet;

        } catch (error) {
            console.log(error);
        }
    }

    deletePet = async (id) => {
        try {

            const deletedPet = await PetModel.deleteOne({ id }); //puede ser q tengas q pasar el objeto como {_id : id}
            return deletedPet;

        } catch (error) {
            console.log(error);
        }
    }
}

export { PetManager }