import { Router } from 'express';
import { AdoptionRequests } from '../controllers/AdoptionRequestController.js';

const router = Router();

//obtener todas las solicitudes de adopcion
router.get('/', AdoptionRequests.getAdoptionRequests);

//obtener la solicitud de adopcion por id
router.get('/:id', AdoptionRequests.getAdoptionRequestById);

//Crear un nueva solicitud de adopcion
router.post('/', AdoptionRequests.createAdoptionRequest);

//Eliminar solicitud de adopcion por id
router.delete('/:id', AdoptionRequests.deleteAdoptionRequest);

export default router;