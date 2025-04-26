require('dotenv').config();

const express = require('express');
const connect_to_database = require('./config/db');

const studentsRoutes = require('./routes/studentsRoutes');
const doctorsRoutes  = require('./routes/doctorsRoutes');
const allRoutes      = require('./routes/allRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

connect_to_database();

app.use(express.json());

app.use(studentsRoutes);
app.use(doctorsRoutes);
app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
