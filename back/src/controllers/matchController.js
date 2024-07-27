import { UserManager } from "../managers/userManagerDB.js";
import { MatchManager } from "../managers/matchManagerDB.js";
import jwt from 'jsonwebtoken';

const UM = new UserManager();
const MM = new MatchManager();

class MatchController {
    static addPetLike = async (req, res) => {
        try {
            const petId = req.params.id;

            // const { petId } = req.body;

            const tokenInfo = req.cookies["jwt-cookie"];

            if (!tokenInfo) {
                return res.status(401).send({
                    status: "error",
                    payload: "No token provided"
                });
            }

            const decodedInfo = jwt.decode(tokenInfo);

            const { id, rol, email } = decodedInfo; //id de usuario

            // let id = "669faf2661d609c77d3e789e";

            let aux = "";

            aux = await MM.addPetLike(id, petId); //pasarle toda la info y q el manager haga el cambio o hacer el cambio aca y q el manager de match actulize, si haces la 2 no te hace falta un match manager ya q podes usar el userupdate del user manager
            
            console.log(aux);

            res.send({
                status : "success",
                payload : aux
            })

        } catch (error) {
            console.log(error);
        }
    }

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