const express = require("express");
const router = express.Router();

console.log("✅ adminRoutes loaded");

const {
  adminSignup,
  adminLogin,
} = require("../controllers/adminController");

router.get("/test", (req, res) => {
  res.send("Admin Route Working");
});

router.post("/signup", adminSignup);
router.post("/login", adminLogin);

module.exports = router;