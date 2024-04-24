const express = require('express')
const dbConnection = require('./config/db')
const Config = require('./config');
const catRouter = require('./router/categoryRoute');
const subCatRouter = require('./router/subCategoryRoute');
const extCatRouter = require('./router/extraCategoryRoute');
const app = express()

const PORT = Config.PORT || 5000;

app.set('view engine', 'ejs');

// urlencoded
app.use(express.urlencoded({ extended: false }))

// dbConnection
dbConnection()

// routes
app.use('/category', catRouter)
app.use('/subcategory', subCatRouter)
app.use('/extracategory', extCatRouter)

app.get('/', (req, res) => {
    res.render('Pages/index')
})

// listen
app.listen(PORT, (err) => {
    if (err) {
        console.log('server is not connected');
    }
    console.log(`Listing on port http://localhost:${PORT}`);
})