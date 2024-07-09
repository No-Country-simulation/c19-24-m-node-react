import PetModel from '../models/PetModel.js';

class Pet {
    static getPets = async(req,res)=>{
        try {
            const pets = await PetModel.find();

            if (!pets) {
                return res.status(500).send({
                    status : "error",
                    payload : "No se logro obtener todas las mascotas"
                })
            }

            res.send({
                status : "success",
                payload : pets
            })

        } catch (error) {
            console.log(error);
        }
    }

    static getPetById = async(req,res)=>{
        try {
            const id = req.params.id;
            // const {idPet} = req.body; esto dependera por donde se mande el id de la mascota

            const pet = await PetModel.findOne({id}); //puede ser q tengas q pasar el objeto como {_id : id}

            if (!pet) {
                return res.status(500).send({
                    status : "error",
                    payload : `No se logro obtener la mascota con el ID: ${id}`
                })
            }

            res.send({
                status : "success",
                payload : pet
            })            

        } catch (error) {
            console.log(error);
        }
    }

    static createPet = async(req,res)=>{
        try {
            const newPet = await PetModel.create({});

            if (!newPet) {
                return res.status(500).send({
                    status : "error",
                    payload : "Error al intentar añadir un nuevo animalito a la DB"
                })
            }

            res.send({
                status : "success",
                payload : newPet
            })  

        } catch (error) {
            console.log(error);
        }
    }

    static updatePet = async(req,res)=>{
        try {
            const id = req.params.id;
            // const {idPet} = req.body; 
            
            const filter = {id}; //puede ser q tengas q pasar el objeto como {_id : id}
            const update = {...req.body};

            const updatedPet = await PetModel.findOneAndUpdate(filter,update);

            if (!updatedPet) {
                return res.status(500).send({
                    status : "error",
                    payload : `No se logro actualizar el animalito con el ID: ${id}`
                })
            }

            res.send({
                status : "success",
                payload : updatedPet
            }) 

        } catch (error) {
            console.log(error);
        }
    }

    static deletePet = async(req,res)=>{
        try {
            const id = req.params.id;

            const deletedPet = await PetModel.deleteOne({id}); //puede ser q tengas q pasar el objeto como {_id : id}

            if (!deletedPet) {
                return res.status(500).send({
                    status : "error",
                    payload : `No se logro actualizar el animalito con el ID: ${id}`
                })
            }

            res.send({
                status : "success",
                payload : updatedPet
            }) 
            
        } catch (error) {
            console.log(error);
        }
    }
}

export {Pet}