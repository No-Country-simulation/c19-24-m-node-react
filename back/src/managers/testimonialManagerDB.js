import TestimonialModel from "../models/TestimonialModel.js";

class TestimonialManager {
    getTestimonials = async () => {
        try {
            const testimonials = await TestimonialModel.find();

            return testimonials;

        } catch (error) {
            console.log(error);
        }
    };

    getTestimonialById = async (id) => {
        try {
            const testimonial = await TestimonialModel.findOne({ _id: id }); //puede ser q tengas q pasar el objeto como {_id : id}

            return testimonial;

        } catch (error) {
            console.log(error);
        }
    };

    getTestimonialByEmail = async (email) => {
        try {
            const testimonial = await TestimonialModel.findOne({ email }); //puede ser q tengas q pasar el objeto como {_id : id}

            return testimonial;

        } catch (error) {
            console.log(error);
        }
    };

    createTestimonial = async (testimonial) => {
        try {
            const newTestimonial = await TestimonialModel.create(testimonial);

            return newTestimonial;

        } catch (error) {
            console.log(error);
        }
    };

    updateTestimonial = async (filter, bodyUpdate) => {
        try {

            const updatedTestimonial = await TestimonialModel.findOneAndUpdate(filter, bodyUpdate);

            return updatedTestimonial;

        } catch (error) {
            console.log(error);
        }
    };

    deleteTestimonial = async (id) => {
        try {
            const deletedTestimonial = await TestimonialModel.deleteOne({ _id: id });

            return deletedTestimonial;

        } catch (error) {
            console.log(error);
        }
    };
}

export { TestimonialManager };
