import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ADMIN_PASSWORD_NODEMAILER = process.env.ADMIN_PASSWORD_NODEMAILER;
const COOKIE_WORD = process.env.COOKIE_WORD;


export const options = {
    PORT,
    DATABASE_URL,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    ADMIN_PASSWORD_NODEMAILER,
    COOKIE_WORD,
}