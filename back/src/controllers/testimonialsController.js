import { TestimonialManager } from '../managers/testimonialManagerDB.js';

const TM = new TestimonialManager();

class Testimonials {
    static getTestimonials = async (req, res) => {
        try {
            const testimonials = await TM.getTestimonials();

            if (!testimonials) {
                return res.status(500).send({
                    status: "error",
                    payload: "No se logro obtener todos los testimonios",
                });
            }

            res.send({
                status: "success",
                payload: testimonials,
            });
        } catch (error) {
            console.log(error);
        }
    };

    static getTestimonialById = async (req, res) => {
        try {
            const id = req.params.id;
            // const {idTestimonial} = req.body; esto dependera por donde se mande el id de la mascota

            const testimonial = await TM.getTestimonialById(id); //puede ser q tengas q pasar el objeto como {_id : id}

            if (!testimonial) {
                return res.status(500).send({
                    status: "error",
                    payload: `No se logro obtener al testimonio con el ID: ${id}`,
                });
            }

            res.send({
                status: "success",
                payload: testimonial,
            });
        } catch (error) {
            console.log(error);
        }
    };
    
    static createTestimonial = async (req, res) => {
        try {
            const testimonial = {...req.body};
            const newTestimonial = await TM.createTestimonial(testimonial);

            if (!newTestimonial) {
                return res.status(500).send({
                    status: "error",
                    payload: "Error al intentar añadir un nuevo testimonio a la DB",
                });
            }

            res.send({
                status: "success",
                payload: newTestimonial,
            });
        } catch (error) {
            console.log(error);
        }
    };

    static updateTestimonial = async (req, res) => {
        try {
            const id = req.params.id;
            // const {idPet} = req.body;

            const filter = { _id: id }; //puede ser q tengas q pasar el objeto como {_id : id}
            const update = { ...req.body };

            const updatedTestimonial = await TM.updateTestimonial(filter, update);

            if (!updatedTestimonial) {
                return res.status(500).send({
                    status: "error",
                    payload: `No se logro actualizar el testimonio con el ID: ${id}`,
                });
            }

            res.send({
                status: "success",
                payload: updatedTestimonial,
            });
        } catch (error) {
            console.log(error);
        }
    };

    static deleteTestimonial = async (req, res) => {
        try {
            const id = req.params.id;

            const deletedTestimonial = await TM.deleteTestimonial(id); //puede ser q tengas q pasar el objeto como {_id : id}

            if (!deletedTestimonial) {
                return res.status(500).send({
                    status: "error",
                    payload: `No se logro eliminar el testimonio con el ID: ${id}`,
                });
            }

            res.send({
                status: "success",
                payload: deletedTestimonial,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export { Testimonials };