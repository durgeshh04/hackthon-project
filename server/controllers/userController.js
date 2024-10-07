const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
    const { name, mobile, email, password, role, image } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10); 
  
      const user = new User({
        name,
        mobile,
        email,
        password: hashedPassword,  
        image,
        role,
      });
  
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('role'); // Populate role details
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  const { name, mobile, email, password, role, status } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, mobile, email, password, role, status },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json({ msg: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
