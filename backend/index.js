if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

//Initializations
const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev')); //Morgan es una función, todos los middleware en express son funciones


const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})// Metodo del modulo Multer
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Route
app.use('/api/books', require('./routes/books'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));


//Start the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})