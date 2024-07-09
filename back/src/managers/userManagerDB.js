import UserModel from "../models/UserModel.js";

class User {
    static getUsers = async (req, res) => {
        try {
            const users = await UserModel.find();

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

    static getUserById = async (req, res) => {
        try {
            const id = req.params.id;
            // const {idUser} = req.body; esto dependera por donde se mande el id de la mascota

            const user = await UserModel.findOne({ id }); //puede ser q tengas q pasar el objeto como {_id : id}

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

    static createPet = async (req, res) => {
        try {
            const newUser = await UserModel.create({});

            if (!newUser) {
                return res.status(500).send({
                    status: "error",
                    payload: "Error al intentar añadir un nuevo usuario a la DB",
                });
            }

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

            const filter = { id }; //puede ser q tengas q pasar el objeto como {_id : id}
            const update = { ...req.body };

            const updatedUser = await UserModel.findOneAndUpdate(filter, update);

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

    static deletePet = async (req, res) => {
        try {
            const id = req.params.id;

            const deletedUser = await UserModel.deleteOne({ id }); //puede ser q tengas q pasar el objeto como {_id : id}

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
