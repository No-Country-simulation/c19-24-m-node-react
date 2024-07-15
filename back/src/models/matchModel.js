// models/MatchModel.js
import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
    pet1Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Match = mongoose.model('Match', matchSchema);
export default Match;
