import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    /*age: {
        type: Number,
        required: true
    },*/
    date_of_birth: { // Agregado el campo fecha de nacimiento
        type: Date,
        required: true
    },
    address: { // Agregado el campo domicilio
        street: {
            type: String,
            required: false // No es obligatorio
        },
        number: {
            type: Number,
            required: false // No es obligatorio
        },
        city: {
            type: String,
            required: true // Es obligatorio
        }
    },
    password: {
        type: String,
        required: true
    },
    pets: {
        type : Array,
        default : []
    },
    rol: {
        type: String,
        enum: ["user", "premium", "admin"],
        default: "user"
    },

    documents: [
        {
            name: String, //nombre del documento
            reference: String //path donde esta guardado el documento
        }
    ],
    last_connection: {
        login: {
            type: String,
            default: ""
        },
        logout: {
            type: String,
            default: ""
        }
    }/*,
    Lo siguiente es opcional, en caso de que lleguemos a implementar un register y login
    preferences: { // Agregado el campo preferencias para que se le muestren mascotas que coincidan con estas preferencias
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
    }*/
});

const UserModel = mongoose.model("Users",userSchema);

export default UserModel;