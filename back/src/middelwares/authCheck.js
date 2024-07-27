import jwt from 'jsonwebtoken';

export const authCheck = ()=>{
    return (req,res,next)=>{

        console.log(req);
        console.log(req.cookies);
        console.log(req.cookies["jwt-cookie"]);

        const tokenInfo = req.cookies["jwt-cookie"]; //nombre provicinal

        const decodedInfo = jwt.decode(tokenInfo);

        console.log(decodedInfo);

        if (!decodedInfo) {
            return res.status(404).send({
                status : "error",
                payload : "El usuario no inicio secion"
            })
        }

        next();
    }
}