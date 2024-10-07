const Role = require('../models/Role');

// Create a new role
exports.createRole = async (req, res) => {
  const { name, status } = req.body;

  try {
    const role = new Role({
      name,
      status,
    });

    await role.save();
    res.status(201).json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all roles
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a role by ID
exports.updateRole = async (req, res) => {
  const { name, status } = req.body;

  try {
    const role = await Role.findByIdAndUpdate(
      req.params.id,
      { name, status },
      { new: true }
    );

    if (!role) {
      return res.status(404).json({ msg: 'Role not found' });
    }

    res.json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a role by ID
exports.deleteRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);

    if (!role) {
      return res.status(404).json({ msg: 'Role not found' });
    }

    res.json({ msg: 'Role deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
