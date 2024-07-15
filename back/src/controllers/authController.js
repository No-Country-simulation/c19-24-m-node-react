import { ClientError } from "../errors/Errors.js";
import { UserManager } from "../managers/userManagerDB.js";
import { tryCatch } from "../utils/tryCatch.js";

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
        const userInstance = new UserManager();
    }

    static ejemploManejoDeErrores = tryCatch(async(req,res)=>{
        const {username, password} = req.body
    
        if(!username) {
             throw new ClientError("username not found", 403)
        }
    
        res.json({message: "no errors"})
    })
}



export {Auth};