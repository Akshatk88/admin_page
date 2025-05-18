const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: 'Karyakarta' },
  photoUrl: String
});

const bagherwalSchema = new mongoose.Schema({
  title:   { type: String, default: 'Bagherwal Sangh' },
  description: String,
  members: [memberSchema]
}, { timestamps: true });

module.exports = mongoose.model('Bagherwal', bagherwalSchema);
