import mongoose from 'mongoose';

const testimonialsSchema = new mongoose.Schema({
    img : {
        type : String
    },
    comment : {
        type : String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
})

const TestimonialModel = mongoose.model("Testimonials",testimonialsSchema);

export default TestimonialModel;