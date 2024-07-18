// models/PetModel.js
import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    specie: { 
        type: String, 
        enum: ['perro', 'gato'], //
        required: true 
    },
    breed: { type: String, required: true },
    size: { type: String, required: true }, // tamaño pequeño mediano grande
    energy_level: { type: String, required: true }, // bajo o muy energico
    good_with_kids: { type: Boolean, required: true },
    good_with_pets: { type: Boolean, required: true },
    description: { type: String }, 
    img: { type: String }, //url por eso lo colocamos como string
});

const Pet = mongoose.model('Pet', petSchema);
export default Pet;
