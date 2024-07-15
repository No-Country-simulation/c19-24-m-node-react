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
    date_of_birth: {
        type: Date,
        required: true
    },
    address: {
        street: {
            type: String,
            required: false
        },
        number: {
            type: Number,
            required: false
        },
        city: {
            type: String,
            required: true
        }
    },
    password: {
        type: String,
        required: true
    },
    pets : {
        type : Array,
        default : []
    },
    rol: {
        type: String,
        enum: ["user", "premium", "admin"],
        default: "user"
    },
});

const UserModel = mongoose.model("Users",userSchema);

export default UserModel;