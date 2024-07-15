import mongoose from 'mongoose';

<<<<<<< HEAD
const PetSchema = new mongoose.Schema({
    pet_specie: { // Especie de mascota (por ejemplo: perro, gato, etc.)
=======
const petSchema = new mongoose.Schema({
    // Agregar url string para foto
    name: {
        type: String,
        required: true // Requerido, pero si el animal es muy cachorro, se puede poner "Sin nombre"
    },
    date_of_birth: {
        type: Date //Agregar un estimado en caso que se desconozca
    },
    specie: {
>>>>>>> 7025583f7eeb042eaeae08c93b14702ef2b4d747
        type: String,
        enum: ['perro', 'gato', 'tortuga', 'ave', 'pez', 'hamster'], // Valores permitidos para especie (ver que más se puede agregar)
        required: true
    },
<<<<<<< HEAD
    pet_size: { // Tamaño de la mascota
        type: String,
        enum: ['pequeño', 'mediano', 'grande'] // Valores permitidos para tamaño de mascota
    },
    pet_color: { // Color de la mascota
        type: String,
        required: true
    },
    pet_sex: {
=======
    breed: { // Raza del animal (por ejemplo: chihuahua, gran danés, siamés, etc.)
        type: String
    },
    size: {
        current: {
            type: String,
            enum: ['pequeño', 'mediano', 'grande'],
            required: true
        },
        estimated: {
            type: String,
            enum: ['pequeño', 'mediano', 'grande', 'desconocido'],
            required: true
        }
    },
    color: {
        type: String,
        required: true
    },
    sex: {
>>>>>>> 7025583f7eeb042eaeae08c93b14702ef2b4d747
        type: String,
        enum: ['macho', 'hembra'],
        required: true
    },
<<<<<<< HEAD
    pet_personality: {
        type: String,
        enum: ['tranquilo', 'enérgico'] // Valores permitidos para personalidad (ver que más se puede agregar)
    }
});

const PetModel = mongoose.model("pets", userSchema);
=======
    personality: {
        type: String,
        enum: ['tranquilo', 'enérgico'] // Valores permitidos para personalidad (ver que más se puede agregar)
    },
    history: { // Historia del animal (de dónde fue rescatado, etc.)
        type: String
    }, 
    special_needs: { // Necesidades especiales (por ejemplo: medicación)
        type: String
    } 
});

const PetModel = mongoose.model('Pets', petSchema);
>>>>>>> 7025583f7eeb042eaeae08c93b14702ef2b4d747

export default PetModel;