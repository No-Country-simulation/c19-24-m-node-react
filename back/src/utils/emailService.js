import nodemailer from 'nodemailer';
import {options} from '../config/config.js';

// PetMatchNoCountry123
const ADMIN_EMAIL = options.ADMIN_EMAIL || "petmatchnocountry@gmail.com";
const ADMIN_PASSWORD_NODEMAILER = options.ADMIN_PASSWORD_NODEMAILER || "lucmbqckeilagssm";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: ADMIN_EMAIL,
        pass: ADMIN_PASSWORD_NODEMAILER,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export const emailSender = async (email, template, subject = "Atencion al cliente") => {
    try {
        const contenido = await transporter.sendMail({
            //Estructura del correo
            from: "PetMatch",
            to: email,
            subject,
            html: template
        })

        return true;

    } catch (error) {
        console.log(error.message);

        return false;
    }
}