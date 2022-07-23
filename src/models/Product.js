const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: SchemaTypes.Double,
        required: true
    },
    installments: {
        type: Number,
        default: 0
    },
    installmentsValue: {
        type: SchemaTypes.Double,
        default: 0
    },
    description: String,
    category: String,
    linkImage: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', ProductSchema);

s