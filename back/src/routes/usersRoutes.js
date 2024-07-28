import {Router} from 'express';
import {User} from '../controllers/userController.js';

const router = Router();

//obtener todos los usuarios
router.get('/', User.getUsers);

//obtener usuario por id
router.get('/:id', User.getUserById);

//Crear un nuevo usuario
router.post('/', User.createUser);

//login de usuario
router.post('/login', User.loginUser)

//Eliminar usuario por id
router.delete('/:id', User.deleteUser);

//Actualizar usuario por id
router.put('/:id', User.updateUser);

export default router;