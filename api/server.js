const express = require('express');
const {errorHandler} = require('./milddleware/errorMiddleware')
const dotenv = require('dotenv').config();
const colors = require('colors')
const connectDB = require('./config/db')
const bodyParser = require('body-parser'); 
const path = require('path');
const fileRoutes = require('./routes/fils-upload-routes')

const port = process.env.PORT || 5000;
connectDB() 

const app = express()
app.use(bodyParser.json()); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }
  
  app.use(errorHandler);
  
  app.listen(port, () => console.log(`Server started on port ${port}`));