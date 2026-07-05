const Complaint = require("../models/complaint");

// Register Complaint
exports.registerComplaint = async (req, res) => {
  try {
    console.log("Complaint Data:", req.body);

    const complaint = new Complaint({
      fullName: req.body.fullName,
      mobile: req.body.mobile,
      email: req.body.email,
      address: req.body.address,
      complaintType: req.body.complaintType,
      subject: req.body.subject,
      description: req.body.description,
    });

    await complaint.save();

    res.status(201).json({
      success: true,
      message: "Complaint Registered Successfully",
      complaint,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get All Complaints
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      complaints,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};