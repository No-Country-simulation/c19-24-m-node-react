import { AdoptionRequestManager } from '../managers/adoptionRequestDB.js';

const ARM = new AdoptionRequestManager();

class AdoptionRequests {
    static getAdoptionRequests = async (req, res) => {
        try {
            const adoptionRequests = await ARM.getAdoptionRequests();

            if (!adoptionRequests) {
                return res.status(500).send({
                    status: "error",
                    payload: "No se logro obtener todos las solicitudes de adopcion",
                });
            }

            res.send({
                status: "success",
                payload: adoptionRequests,
            });
        } catch (error) {
            console.log(error);
        }
    };

    static getAdoptionRequestById = async (req, res) => {
        try {
            const id = req.params.id;
            // const {idTestimonial} = req.body; esto dependera por donde se mande el id de la mascota

            const adoptionRequest = await ARM.getAdoptionRequestById(id); //puede ser q tengas q pasar el objeto como {_id : id}

            if (!adoptionRequest) {
                return res.status(500).send({
                    status: "error",
                    payload: `No se logro obtener la solicitud de adopcion con ID: ${id}`,
                });
            }

            res.send({
                status: "success",
                payload: adoptionRequest,
            });
        } catch (error) {
            console.log(error);
        }
    };
    
    static createAdoptionRequest = async (req, res) => {
        try {
            const adoptionRequest = {...req.body};
            const newAdoptionRequest = await ARM.createAdoptionRequest(adoptionRequest);

            if (!newAdoptionRequest) {
                return res.status(500).send({
                    status: "error",
                    payload: "Error al intentar añadir una nueva solicitud de adopcion a la DB",
                });
            }

            res.send({
                status: "success",
                payload: newAdoptionRequest,
            });
        } catch (error) {
            console.log(error);
        }
    };

    
    static deleteAdoptionRequest = async (req, res) => {
        try {
            const id = req.params.id;

            const deletedAdoptionRequest= await ARM.deleteAdoptionRequest(id);

            if (!deletedAdoptionRequest) {
                return res.status(500).send({
                    status: "error",
                    payload: `No se logro eliminar la solicitud de adopcion con ID: ${id}`,
                });
            }

            res.send({
                status: "success",
                payload: deletedAdoptionRequest,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export { AdoptionRequests };