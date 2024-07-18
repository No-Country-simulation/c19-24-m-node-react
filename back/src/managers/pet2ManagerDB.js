import Pet from '../models/pet2Model.js';

class PetManager {
    getPets = async () => {
        try {
            const pets = await Pet.find();

            return pets

        } catch (error) {
            throw error;
        }
    }

    getPetById = async (id) => {
        try {
            const pet = await Pet.findById(id);
            return pet;

        } catch (error) {
            throw error;
        }
    }

    createPet = async (petData) => {
        try {
            const newPet = await Pet.create(petData);
            return newPet;

        } catch (error) {
            throw error;
        }
    }

    updatePet = async (id, petData) => {
        try {
            const updatedPet = await Pet.findByIdAndUpdate(id, petData, { new: true, runValidators: true });

            return updatedPet;

        } catch (error) {
            throw error;
        }
    }

    deletePet = async (id) => {
        try {

            const deletedPet = await Pet.deleteOne({ _id: id }); //puede ser q tengas q pasar el objeto como {_id : id}
            return deletedPet;

        } catch (error) {
            throw error;
        }
    }
}

export { PetManager }