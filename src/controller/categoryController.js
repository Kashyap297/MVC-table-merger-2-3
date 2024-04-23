const categoryModel = require("../models/categoryModel")

const categoryController = {
    get: async (req, res) => {
        try {
            const item = await categoryModel.find().populate({
                path: 'subCategoryId',
                populate: {
                    path: 'extraCategoryId'
                }
            })
            res.send(item)
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            const item = await categoryModel.create(req.body)
            res.send(item)
        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = categoryController