const mongoose = require('mongoose');

const bagherwalSchema = new mongoose.Schema({
  title: String,
  description: String,
  members: [
    {
      name: String,
      role: String,
      photoUrl: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Bagherwal', bagherwalSchema);
