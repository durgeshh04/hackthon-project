const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'inactive'],
    },
});

module.exports = mongoose.model('Role', roleSchema);
