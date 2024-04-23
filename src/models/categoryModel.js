const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    subCategoryId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "subcategories"
    }
})

module.exports = mongoose.model('categories', categorySchema)