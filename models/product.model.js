const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    department: String,
    avaible: Boolean

})

module.exports = mongoose.model('product', productSchema)

