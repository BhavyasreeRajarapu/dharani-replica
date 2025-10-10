const express = require("express");
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/land-records", authMiddleware, (req, res) => {
  res.json([
    { id: 1, surveyNo: 101, owner: "Bhavya", acres: 2.5 },
    { id: 2, surveyNo: 102, owner: "Ravi", acres: 1.8 },
  ]);
});

module.exports = router;
