import {UserManager} from "../managers/userManagerDB.js";
import { createHashPassword } from "../utils/handlerPassword.js";
import bcrypt from 'bcrypt';
import { Auth } from "./authController.js";

const UM = new UserManager();

class User {
    static getUsers = async (req, res) => {
        try {
            const users = await UM.getUsers();

            if (!users) {
                return res.status(500).send({
                    status: "error",
                    payload: "No se logro obtener todos los usuarios",
                });
            }

            res.send({
                status: "success",
                payload: users,
            });
        } catch (error) {
            console.log(error);
        }
    };

    static async loginUser(req, res) {
        return Auth.login(req, res);
    }

    static getUserById = async (req, res) => {
        try {
            const id = req.params.id;
            // const {idUser} = req.body; esto dependera por donde se mande el id de la mascota

            const user = await UM.getUserById(id); //puede ser q tengas q pasar el objeto como {_id : id}

            if (!user) {
                return res.status(500).send({
                    status: "error",
                    payload: `No se logro obtener al usuario con el ID: ${id}`,
                });
            }

            res.send({
                status: "success",
                payload: user,
            });
        } catch (error) {
            console.log(error);
        }
    };
    //! para probar habria que crear la coleccion carts a la que se referencia en los
    //! usuarios
    static createUser = async (req, res) => {
        try {
            // const {password} = req.body;
            const { first_name, last_name, email, date_of_birth, address, password } = req.body;

            const existingUser = await UM.getUsers();
            if (existingUser.find(user => user.email === email)) {
                return res.status(409).send({
                    status: "error",
                    payload: `El email: ${email} ya se encuentra en uso`
                });
            }

            /* const user = {
                ...req.body,
                pets_like: [],
                pets_not_like: []
            }; */

            const hashPassword = await createHashPassword(password);
            
            const user = {
                first_name,
                last_name,
                email,
                date_of_birth,
                address,
                password: hashPassword,
                pets_like: [],
                pets_not_like: [],
                rol: 'user'
            };

            user.password = hashPassword;

            const newUser = await UM.createUser(user);

            if (!newUser) {
                return res.status(500).send({
                    status: "error",
                    payload: "Error al intentar añadir un nuevo usuario a la DB",
                });
            }

            console.log(newUser);

            res.send({
                status: "success",
                payload: newUser,
            });
        } catch (error) {
            console.log(error);
        }
    };

    static updateUser = async (req, res) => {
        try {
            const id = req.params.id;
            // const {idPet} = req.body;

            const filter = { _id: id }; //puede ser q tengas q pasar el objeto como {_id : id}
            const update = { ...req.body };

            const updatedUser = await UM.updateUser(filter, update);

            if (!updatedUser) {
                return res.status(500).send({
                    status: "error",
                    payload: `No se logro actualizar el usuario con el ID: ${id}`,
                });
            }

            res.send({
                status: "success",
                payload: updatedUser,
            });
        } catch (error) {
            console.log(error);
        }
    };

    static deleteUser = async (req, res) => {
        try {
            const id = req.params.id;

            const deletedUser = await UM.deleteUser(id); //puede ser q tengas q pasar el objeto como {_id : id}

            if (!deletedUser) {
                return res.status(500).send({
                    status: "error",
                    payload: `No se logro actualizar el animalito con el ID: ${id}`,
                });
            }

            res.send({
                status: "success",
                payload: deletedUser,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export { User };
