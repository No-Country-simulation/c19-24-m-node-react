import { User } from "../managers/userManagerDB.js";

class Auth {
    static login = async(req,res)=>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    static register = async(req,res)=>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    static prueba = async(req,res)=>{
        const userInstance = new User();
    }
}

export {Auth};