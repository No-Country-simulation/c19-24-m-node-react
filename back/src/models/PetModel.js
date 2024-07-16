import mongoose from 'mongoose';

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
        type: String,
        enum: ['perro', 'gato', 'tortuga', 'ave', 'pez', 'hamster'], // Valores permitidos para especie (ver que más se puede agregar)
        required: true
    },
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
        type: String,
        enum: ['macho', 'hembra'],
        required: true
    },
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

export default PetModel;