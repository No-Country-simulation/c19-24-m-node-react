import { Router } from 'express';
import { Testimonials } from '../controllers/testimonialsController.js';

const router = Router();

//obtener todos los testimonios
router.get('/', Testimonials.getTestimonials);

//obtener testimonio por id
router.get('/:id', Testimonials.getTestimonialById);

//Crear un nuevo testimonio
router.post('/', Testimonials.createTestimonial);

//Actualizar testimonio por id
router.put('/:id', Testimonials.updateTestimonial);

//Eliminar testimonio por id
router.delete('/:id', Testimonials.deleteTestimonial);

export default router;