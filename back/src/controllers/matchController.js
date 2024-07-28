import { UserManager } from "../managers/userManagerDB.js";
import { MatchManager } from "../managers/matchManagerDB.js";
import jwt from 'jsonwebtoken';

const UM = new UserManager();
const MM = new MatchManager();

class MatchController {
    static addPetLike = async (req, res) => {
        try {
            const petId = req.params.id;
            const authHeader = req.headers.authorization;

            if (!authHeader) {
                return res.status(401).send({
                    status: "error",
                    payload: "No token provided"
                });
            }

            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, "jwt-secret-word");

            if (!decoded) {
                return res.status(401).send({
                    status: "error",
                    payload: "Invalid token"
                });
            }

            const userId = decoded.id;

            const result = await MM.addPetLike(userId, petId);

            if (result.status === "error") {
                return res.status(400).send(result);
            }

            res.send({
                status: "success",
                payload: result
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                status: "error",
                payload: "Server error"
            });
        }
    };

    static addPetNotLike = async (req, res) => {
        try {
            const petId = req.params.id;

            // const { petId } = req.body;

            const tokenInfo = req.cookies["jwt-cookie"];

            const decodedInfo = jwt.decode(tokenInfo);

            const { id, rol, email } = decodedInfo; //id de usuario

            // let id = "669faf2661d609c77d3e789e";

            let aux = "";

            // if (id !== undefined) {
            //     aux = await MM.addPetNotLike(id, petId);
            // }
            // else {
            //     aux = await MM.addPetNotLike(id, petId);
            // }

            aux = await MM.addPetNotLike(id, petId);


            res.send({
                status : "success",
                payload : aux
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export { MatchController };