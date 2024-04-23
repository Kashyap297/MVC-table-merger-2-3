const { Router } = require('express')
const categoryController = require('../controller/categoryController')
const catRouter = Router()


catRouter.get('/', categoryController.get)
catRouter.post('/create', categoryController.create)

module.exports = catRouter