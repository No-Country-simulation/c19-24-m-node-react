import UserModel from '../models/UserModel.js';

class User{

    //2 formas de hacerlo podemos usar static para no tener q hacer la instancia
    static getUsers = async()=>{
        try {
            const users = await UserModel.find(); //me falta ver el tema de PRE y POPULATE (para las referencias con otros documentos)

            return users;
        } catch (error) {
            console.log(error);
        }
    }

    //o podemos hacerlo asi y tener q crear la instancia 
    //const UserInstance = new User();
    getUsers2 = async()=>{
        try {
            const users = await UserModel.find();

            return users;
        } catch (error) {
            console.log(error);
        }
    }
}

export {User};