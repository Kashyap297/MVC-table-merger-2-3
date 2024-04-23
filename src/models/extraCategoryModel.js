const mongoose = require('mongoose')

const extraCatSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    }
})

module.exports = mongoose.model('extracategories', extraCatSchema)