const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    iteId : [{
        type: ObjectId,
        ref: 'item'
    }]
});

module.exports = mongoose.model('Category', categorySchema);