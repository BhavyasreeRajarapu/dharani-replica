const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/auth');
const landRoutes = require('./routes/lands');
dotenv.config();

const app = express();
app.use(cors());
// Replace body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);

// Example protected route (you can replace later)
app.get('/api/land-records',authMiddleware, (req, res) => {
  res.json([{ surveyNo: 101, owner: 'Ravi', acres: 2.5 }]);
});
app.use('/api/lands', authMiddleware, landRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
