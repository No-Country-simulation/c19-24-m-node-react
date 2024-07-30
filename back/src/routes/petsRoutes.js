import { Router } from 'express'
import { PetController } from '../controllers/petController.js';
import { authCheck } from '../middelwares/authCheck.js';

const router = Router();

//obtener todos las mascotasª
router.get('/', PetController.getPets);

//obtener un numero determinado de mascotas 
router.get('/petsQuantity/:num',  PetController.getNumPets);

//Mascota aleatoria
router.get('/randomPet', PetController.getRandomPet);

//obtener mascota por id
router.get('/:id', PetController.getPetById);

//Crear una nueva mascota
router.post('/', PetController.createPet);

//Eliminar mascota por id
router.delete('/:id', PetController.deletePet);

//Actualizar mascota por id
router.put('/:id', PetController.updatePet);

export default router;