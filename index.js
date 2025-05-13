const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bagherwalRoutes = require('./routes/bagherwalRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/bagherwal', bagherwalRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port', process.env.PORT || 3000);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
