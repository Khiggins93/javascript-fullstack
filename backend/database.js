const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)


//"mongod" para ejecutar mongodb en la consola
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})

    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));