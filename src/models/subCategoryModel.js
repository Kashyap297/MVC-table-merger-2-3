const mongoose = require('mongoose')

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    extraCategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "extracategories"
    }
})

module.exports = mongoose.model('subcategories', subCategorySchema)