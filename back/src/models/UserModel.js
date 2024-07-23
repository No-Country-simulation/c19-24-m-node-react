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
    date_of_birth: { // Agregado el campo fecha de nacimiento
        type: String,
        required: true
    },
    address: { // Agregado el campo domicilio
        street: {
            type: String,
            required: false // No es obligatorio
        },
        number: {
            type: Number,
            required: true // No es obligatorio
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
    pets_like: [
        {
            like: {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Pets",
            }
        }
    ],
    pets_not_like: [
        {
            not_like: {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Pets",
            }
        }
    ],
    rol: {
        type: String,
        enum: ["user", "premium", "admin"],
        default: "user"
    },
});

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;