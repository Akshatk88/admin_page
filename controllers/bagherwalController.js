const Bagherwal = require('../models/Bagherwal');

const getBagherwal = async (req, res) => {
  try {
    const data = await Bagherwal.findOne(); 
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

const updateBagherwal = async (req, res) => {
  try {
    const updated = await Bagherwal.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update content' });
  }
};

module.exports = {
  getBagherwal,
  updateBagherwal
};
