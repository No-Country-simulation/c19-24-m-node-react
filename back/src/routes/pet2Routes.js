import express from 'express';
import {
    createPet,
    getPets,
    getPetById,
    deletePet
} from '../controllers/pet2Controller.js'; // Asegúrate de que la ruta sea correcta

const router = express.Router();

router.post('/', createPet); // Ruta para crear una mascota
router.get('/', getPets); // Ruta para obtener todas las mascotas
router.get('/:id', getPetById); // Ruta para obtener una mascota por ID
router.delete('/:id', deletePet); // Ruta para eliminar una mascota

export default router;
