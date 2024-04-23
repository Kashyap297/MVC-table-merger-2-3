const { Router } = require('express')
const subCategoryController = require('../controller/subCategoryController')

const subCatRouter = Router()

subCatRouter.get('/', subCategoryController.get)
subCatRouter.post('/create', subCategoryController.create)

module.exports = subCatRouter