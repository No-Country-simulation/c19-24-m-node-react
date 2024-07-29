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
            console.log(token);
            const decoded = jwt.verify(token, "jwt-secret-word");
            console.log(decoded);

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
    
            const user = await UM.getUserById(userId);
            if (!user) {
                return res.status(404).send({
                    status: "error",
                    payload: "User not found"
                });
            }
    
            if (!user.pets_not_like) {
                user.pets_not_like = [];
            }
    
            user.pets_not_like.push({ not_like: petId });
            await user.save();
    
            res.send({
                status: "success",
                payload: user.pets_not_like
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                status: "error",
                payload: "Server error"
            });
        }
    };
}

export { MatchController };