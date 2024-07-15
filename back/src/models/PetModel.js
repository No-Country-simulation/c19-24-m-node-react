import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
    pet_specie: { // Especie de mascota (por ejemplo: perro, gato, etc.)
        type: String,
        enum: ['perro', 'gato', 'tortuga', 'ave', 'pez', 'hamster'], // Valores permitidos para especie (ver que más se puede agregar)
        required: true
    },
    pet_size: { // Tamaño de la mascota
        type: String,
        enum: ['pequeño', 'mediano', 'grande'] // Valores permitidos para tamaño de mascota
    },
    pet_color: { // Color de la mascota
        type: String,
        required: true
    },
    pet_sex: {
        type: String,
        enum: ['macho', 'hembra'],
        required: true
    },
    pet_personality: {
        type: String,
        enum: ['tranquilo', 'enérgico'] // Valores permitidos para personalidad (ver que más se puede agregar)
    }
});

const PetModel = mongoose.model("pets", userSchema);

export default PetModel;