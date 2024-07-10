import UserModel from "../models/UserModel.js";

class UserManager {
    getUsers = async () => {
        try {
            const users = await UserModel.find();

            return users;

        } catch (error) {
            console.log(error);
        }
    };

    getUserById = async (id) => {
        try {
            const user = await UserModel.findOne({ id }); //puede ser q tengas q pasar el objeto como {_id : id}

            return user;

        } catch (error) {
            console.log(error);
        }
    };

    createUser = async () => {
        try {
            const newUser = await UserModel.create({});

            return newUser;

        } catch (error) {
            console.log(error);
        }
    };

    updateUser = async (filter, bodyUpdate) => {
        try {

            const updatedUser = await UserModel.findOneAndUpdate(filter, bodyUpdate);

            return updatedUser;

        } catch (error) {
            console.log(error);
        }
    };

    deleteUser = async (id) => {
        try {
            const deletedUser = await UserModel.deleteOne({ id });

            return deletedUser;

        } catch (error) {
            console.log(error);
        }
    };
}

export { UserManager };
