const express = require("express");
const router = express.Router();

const {
  registerComplaint,
  getAllComplaints,
} = require("../controllers/complaintController");

router.post("/register", registerComplaint);

router.get("/all", getAllComplaints);

module.exports = router;