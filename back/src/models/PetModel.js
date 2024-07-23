import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true // Requerido, pero si el animal es muy cachorro, se puede poner "Sin nombre"
    },
    breed: { // Raza del animal (por ejemplo: chihuahua, gran danés, siamés, etc.)
        type: String
    },
    age: {
        type: Number,
        require: true
    },
    sex: {
        type: String,
        enum: ['macho', 'hembra'],
        required: true,
        default : "macho"
    },
    size: {
        current: {
            type: String,
            enum: ['pequeño', 'mediano', 'grande'],
            required: true,
            default : "mediano"
        },
        estimated: {
            type: String,
            enum: ['pequeño', 'mediano', 'grande', 'desconocido'],
            required: true,
            default : "mediano"
        }
    },
    weight: {
        type: Number,
        required: true
    },
    time_at_the_shelter: {
        type: String,
        required: true
    },
    specie: {
        type: String,
        enum: ['perro', 'gato', 'tortuga', 'ave', 'pez', 'hamster'], // Valores permitidos para especie (ver que más se puede agregar)
        required: true,
        default : "perro"
    },
    health_history: {
        type: String,
        required: true,
        default: ""
    },
    health: {
        previous_treatments: {
            type: String,
            required: true,
            default : "no"
        },
        dewormed: { //desparasitado
            type: String,
            required: true,
            default : "si"
        },
        medical_necessity: {
            type: String,
            required: true,
            default : "no"
        },
        sterilization: {
            type: String,
            required: true,
            default : "no"
        },
        vaccines: {
            type: String,
            required: true,
            default : "si"
        },
    },
    personality: {
        type: String,
        default: ""
    }
});

const PetModel = mongoose.model('Pets', petSchema);

export default PetModel;