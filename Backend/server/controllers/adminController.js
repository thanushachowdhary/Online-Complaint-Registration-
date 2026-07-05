const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");

// Admin Signup
exports.adminSignup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      email,
      password: hashedPassword,
    });

    await admin.save();

    res.status(201).json({
      success: true,
      message: "Admin Created Successfully",
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Admin Login
exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin Not Found",
      });
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admin Login Successful",
      admin: {
        email: admin.email,
      },
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};