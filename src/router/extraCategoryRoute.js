const {Router} = require('express')
const extCategoryController = require('../controller/extraCategoryController')

const extCatRouter = Router()

extCatRouter.get('/', extCategoryController.get)
extCatRouter.post('/create', extCategoryController.create)

module.exports = extCatRouter