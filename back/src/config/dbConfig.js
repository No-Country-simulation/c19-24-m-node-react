import mongoose from 'mongoose';
import {options} from './config.js';

//esto de momento mientras estemos en DEV dejarlo asi
//una ves q este montado en vercel o render por ejem
//dejar solo el process.env.MONGO_URL q va a ser una variable de entorno q le vamos a pasar a vercel o render cuando subamos el servidor
const MONGO_URL = process.env.MONGO_URL || options.DATABASE_URL;

export const connectDB = async ()=>{
    try {
        await mongoose.connect(MONGO_URL);
    } catch (error) {
        console.log("No se logro conectar a la DB, el error es:", error);
    }
} 