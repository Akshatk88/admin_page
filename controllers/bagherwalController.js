const Bagherwal = require('../models/Bagherwal');

// GET /api/bagherwal
exports.getContent = async (req, res) => {
  const doc = await Bagherwal.findOne() || new Bagherwal();
  res.json(doc);
};

// PUT /api/bagherwal
exports.updateContent = async (req, res) => {
  const updated = await Bagherwal.findOneAndUpdate(
    {},                 // single‑document collection
    req.body,           // title, description, members[]
    { new: true, upsert: true }
  );
  res.json(updated);
};

// POST /api/bagherwal/members
exports.addMember = async (req, res) => {
  const { name, role, photoUrl } = req.body;
  const doc = await Bagherwal.findOne() || new Bagherwal();
  doc.members.push({ name, role, photoUrl });
  await doc.save();
  res.status(201).json(doc);
};

// DELETE /api/bagherwal/members/:id
exports.deleteMember = async (req, res) => {
  const doc = await Bagherwal.findOne();
  if (!doc) return res.status(404).json({ message: 'Not found' });

  doc.members.id(req.params.id)?.remove();
  await doc.save();
  res.json(doc);
};
