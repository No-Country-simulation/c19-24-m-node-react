import { UserManager } from "../managers/userManagerDB.js";
import jwt from 'jsonwebtoken';
import { createHashPassword, isValidPassword } from "../utils/handlerPassword.js";
import { options } from "../config/config.js";
import { emailSender } from "../utils/emailService.js";
import { ClientError } from "../errors/Errors.js";
import { tryCatch } from "../utils/tryCatch.js";

const UM = new UserManager();

class Auth {
    static login = async (req, res) => {
        try {
            const { email, password } = req.body;

            let auxId = 0;

            if (!email) {
                return res.status(400).send({
                    status: "error",
                    payload: "Usuario no encontrado"
                });
                // throw new ClientError("Usuario no encontrado",400);
            }

            if (!password) {
                return res.status(400).send({
                    status: "error",
                    payload: "Contraseña invalida"
                });

                // throw new ClientError("Contraseña invalida",400);
            }

            let user = {
                email,
                rol: "user"
            }

            if (options.ADMIN_EMAIL === email && options.ADMIN_PASSWORD === password) {
                user = {
                    email,
                    rol: "admin"
                }
            }
            else {
                const userFind = await UM.getUserByEmail(email);

                console.log(userFind);

                if (!userFind) {
                    return res.status(400).send({
                        status: "error",
                        payload: "El usuari no se encuentra registrado"
                    });

                    // throw new ClientError("El usuari no se encuentra registrado",400);
                }

                const { id } = userFind;
                auxId = id;

                console.log(id);

                const isValid = await isValidPassword(password, userFind);

                if (!isValid) {
                    return res.status(400).send({
                        status: "error",
                        payload: "La contraseña es invalida"
                    });

                    // throw new ClientError("La contraseña es invalida",400);
                }

                user = {
                    id,
                    email,
                    rol: "user"
                }
            }

            const token = jwt.sign(user, "jwt-secret-word", { expiresIn: "8h" }); //el exprire podriamos sacarlo, es mas q nada para q se te desconecte automaticamente pasada cierta cantidad de tiempo
            console.log('token', token)

            //setamos la cookie
            //con maxAge indicamos el tiempo de vida osea cuando expira
            //HttpOnly atributo de navegador creado para impedir que las aplicaciones del lado del cliente, creo q ademas evita q puedas sobreescribir la cookie (osea si la modificas q te tire de la pagina y te mande al login devuelta)
            res.cookie("jwt-cookie", token, { httpOnly: false, maxAge: 3600000 }).json({ //capaz q para deploy haya q cambiar el httoOnly por true
                status: "success",
                payload: token,
                id : auxId
            });

            // res.cookie('jwt-cookie', token, {
            //     httpOnly: true,
            //     expiresIn: "2h",
            //     sameSite:'none',
            //     secure:true,
            //     }).status(200).json({ status : "success", token})

        } catch (error) {
            console.log(error);
        }
    }

    static register = async (req, res) => {
        try {
            const { first_name, last_name, email, date_of_birth, password, passwordRepeat, street, number, city } = req.body;

            const users = await UM.getUsers();

            //check para ver si falta algun dato
            if (!email || !first_name || !last_name || !password || !passwordRepeat) {
                return res.status(400).send({
                    status: "error",
                    payload: "Alguno de los datos no esta completo"
                });
            }

            //compruebo si el email esta ya registrado
            if (users.find(user => user.email === email)) {
                return res.status(409).send({
                    status: "error",
                    payload: `El email: ${email} ya se encuentra en uso`
                });
            }

            //check para ver si las contraseñas coinciden
            if (password !== passwordRepeat) {
                return res.status(400).send({
                    status: "error",
                    payload: "Las contraseñas no coinciden"
                });
            }

            //hash la contraseña
            const hashPassword = await createHashPassword(password);

            const user = {
                first_name,
                last_name,
                email,
                date_of_birth, //aca podria cambiarse por edad
                password: hashPassword,
                address: {
                    street,
                    number,
                    city
                },
                pets_like : [],
                pets_not_like : [],
            }

            //creamos el usuario y lo guardamos en la DB
            const newUser = await UM.createUser(user);

            const response = await emailSender(email, "Te incirbiste con exito a PetMatch", "Registro con existoso");

            res.send({
                status: "success",
                payload: newUser
            });

        } catch (error) {
            console.log(error);
        }
    }

    static ejemploManejoDeErrores = tryCatch(async (req, res) => {
        const { username, password } = req.body

        if (!username) {
            throw new ClientError("username not found", 403)
        }

        res.json({ message: "no errors" })
    })
}



export { Auth };