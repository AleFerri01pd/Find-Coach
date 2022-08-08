const mongoose = require('mongoose');

const coachSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    description: String,
    hourlyRate: Number,
    areas: Array,
})

module.exports = mongoose.model('Coach', coachSchema);