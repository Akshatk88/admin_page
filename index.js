require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const bagherwalRoutes = require('./routes/bagherwalRoutes');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/bagherwal', bagherwalRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
  })
  .catch(err => console.error('Mongo connection failed:', err));
