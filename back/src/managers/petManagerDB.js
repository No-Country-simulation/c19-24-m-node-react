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
            const pet = await PetModel.findOne({ _id : id }); //puede ser q tengas q pasar el objeto como {_id : id}

            return pet;

        } catch (error) {
            console.log(error);
        }
    }

    createPet = async (pet) => {
        try {
            const newPet = await PetModel.create(pet);

            return newPet;

        } catch (error) {
            console.log(error);
        }
    }

    getRandomPet = async () =>{
        try{
            const pets = await PetModel.find();

            const randomPet = pets[Math.floor(Math.random() * pets.length)];
            return randomPet
        } catch (error){
            console.log(error)
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

            const deletedPet = await PetModel.deleteOne({ _id : id }); //puede ser q tengas q pasar el objeto como {_id : id}
            return deletedPet;

        } catch (error) {
            console.log(error);
        }
    }
}

export { PetManager }