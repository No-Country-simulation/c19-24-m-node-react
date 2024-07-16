import {PetManager} from '../managers/pet2ManagerDB.js'

const PM = new PetManager();
// Crear una nueva mascota
export const createPet = async (req, res) => {
    try {
        const petData = req.body;
        const newPet = await PM.createPet(petData);

        return res.status(201).json(newPet);
    } catch (error) {
        return res.status(500).json({ message: 'Error creando la mascota', error });
    }
};

// Obtener todas las mascotas
export const getPets = async (req, res) => {
    try {
        const pets = await PM.getPets();
        
        return res.status(200).json(pets);
    } catch (error) {
        return res.status(500).json({ message: 'Error obteniendo las mascotas', error });
    }
};

// Obtener una mascota específica
export const getPetById = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await PM.getPetById(id);

        if (!pet) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }

        return res.status(200).json(pet);
    } catch (error) {
        return res.status(500).json({ message: 'Error obteniendo la mascota', error });
    }
};

// Eliminar una mascota
export const deletePet = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await PM.deletePet(id)

        if (!pet) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }

        // await pet.remove();
        return res.status(204).send(); // Sin contenido
    } catch (error) {
        return res.status(500).json({ message: 'Error eliminando la mascota', error });
    }
};

// Actualizar una mascota
export const updatePet = async (req, res) => {
    try {
        const { id } = req.params;
        const petData = req.body;

        const updatedPet = await PM.updatePet(id, petData);

        if (!updatedPet) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }

        return res.status(200).json(updatedPet);
    } catch (error) {
        return res.status(500).json({ message: 'Error actualizando la mascota', error });
    }
};
