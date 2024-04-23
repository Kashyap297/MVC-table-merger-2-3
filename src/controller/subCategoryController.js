const subCategoryModel = require("../models/subCategoryModel");

const subCategoryController = {
    get: async (req, res) => {
        try {
            const item = await subCategoryModel.find()
            res.send(item)
        } catch (error) {
            console.log(error);
        }
    },

    create: async (req, res) => {
        try {
            const item = await subCategoryModel.create(req.body)
            res.send(item)
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = subCategoryController