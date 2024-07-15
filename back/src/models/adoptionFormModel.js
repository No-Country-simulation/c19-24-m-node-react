import {Schema, model} from 'mongoose'

const adoptionFormSchema = new Schema({
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
        required: true,
    },
    status: { 
        type: String, 
        enum: ['Pending', 'Approved', 'Rejected'], 
        default: 'Pending' },
  // campos opcional, para nota informativa o nota de seguimiento
    notes: { type: String },

})

const AdoptionForm = model('AdoptionForm', adoptionFormSchema);
export default AdoptionForm;
