const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/test", (req, res) => {
    res.send("Test Route Working");
});

router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;