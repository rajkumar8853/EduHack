// complaintController.js
const Complaint = require('../../models/complaint_model'); // Assuming complaint_model.js exists

exports.submitComplaint = async (req, res) => {
  try {
    const newComplaint = new Complaint({
      title: req.body.title,
      description: req.body.description,
      image: req.file.path, // For uploaded image
      user: req.user.id // Assuming user info comes from auth middleware
    });
    const savedComplaint = await newComplaint.save();
    res.status(201).json(savedComplaint);
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit complaint' });
  }
};

exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch complaints' });
  }
};
