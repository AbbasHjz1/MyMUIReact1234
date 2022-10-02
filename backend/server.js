const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require('cors')
const path = require('path');

connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/backend/item', require('./routes/itemRoute'))
app.use('/backend/user', require('./routes/userRoute'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}
else {
    app.get('/', (req,res) => res.send('Please set as a production'))
}
app.use(errorHandler)
app.listen(port, ()=> { console.log(`Server started on port ${port}`) })