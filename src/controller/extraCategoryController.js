const extraCategoryModel = require("../models/extraCategoryModel");

const extCategoryController = {
    get: async (req, res) => {
        try {
            const items = await extraCategoryModel.find()
            res.send(items)
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            const items = await extraCategoryModel.create(req.body)
            res.send(items)
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = extCategoryController