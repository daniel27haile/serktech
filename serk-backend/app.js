const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
const connectDB = require('./config/database');

const app = express();

connectDB();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:4200',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contact', require('./routes/contact.routes'));
app.use('/api/auth',    require('./routes/auth.routes'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Serk Technologies API' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serk Technologies API running on port ${PORT}`);
});
