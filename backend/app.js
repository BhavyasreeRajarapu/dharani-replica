const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');

const authRoutes = require('./routes/auth');
const landRoutes = require('./routes/lands');
const authMiddleware = require('./middleware/auth');
const Land = require('./models/lands'); // import Land model

const app = express();
const PORT = process.env.PORT || 5000;

// -------- Middleware --------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------- Serve Backend Test HTML --------
app.use('/test', express.static(path.join(__dirname, 'tests')));

// -------- Serve React Frontend Build (if any) --------
const frontendBuildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(frontendBuildPath));

// -------- API Routes --------
app.use('/api/auth', authRoutes);
app.use('/api/lands', landRoutes);

// -------- Fallback to Frontend for client-side routes --------
app.get(/^\/.*$/, (req, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

// -------- Sync DB & Start Server --------
async function startServer() {
  try {
    await sequelize.sync({ alter: true });
    console.log('✅ Database synced');

    // Seed test land records if none exist
    const lands = await Land.findAll();
    if (lands.length === 0) {
      await Land.create({ surveyNo: 101, location: 'Village A', area: '2 acres', userId: 1 });
      await Land.create({ surveyNo: 102, location: 'Village B', area: '3 acres', userId: 1 });
      console.log('✅ Test land records inserted');
    }

    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('❌ DB Error:', err);
  }
}

startServer();
