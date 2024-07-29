import {Schema, model} from 'mongoose'

const adoptionRequestSchema = new Schema({
    pet_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Pets"
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Users"
    },
    adoptionDate: {
        type: Date,
        default: Date.now(),
    },
    status: { 
        type: String, 
        enum: ['Pending', 'Approved', 'Rejected'], 
        default: 'Pending' },
  // campos opcional, para nota informativa o nota de seguimiento
    notes: { type: String },

// Informacion general
    phone:{
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    identification_type: {
        type: String,
        required: true
    },
    identification: {
        type: String,
        required: true
    },

//Informacion del hogar
    type_of_home: {
        type: String, 
        enum: ['Casa', 'Apartamento'], 
        default: 'Casa'
    },
    have_pets: {
        type: Boolean, 
        required: true
    },
    have_kids: {
        type: Boolean, 
        required: true
    },

//Estilo de vida

    hours_away:{
        type: Number,
        required: true
    },
    travels_frequently:{
        type: Boolean, 
        required: true
    },

//Experiencia
    prior_experience:{
        type: Boolean, 
        required: true
    },
    know_care_pets:{
        type: Boolean, 
        required: true
    }
})

adoptionRequestSchema.pre("find",function () {
    this.populate("user_id pet_id");
})

adoptionRequestSchema.pre("findOne",function () {
    this.populate("user_id pet_id");
})

const AdoptionRequest = model('adoption_requests', adoptionRequestSchema);
export default AdoptionRequest;
