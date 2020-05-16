// Import Modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./index');
var mongoose = require('mongoose');
var morgan = require('morgan');
var middles = require('./middleware/errorhandler');



mongoose.Promise = global.Promise;

// Connect of the database 
mongoose.connect('mongodb://localhost:27017/apiTest', {
        useNewUrlParser: true
    })
.then(
    data => console.log('Connected with db'),
    err => console.log('Issue connecting with db', err)
);


// Register static resource
app.use(morgan('tiny',{}));
app.use(middles.logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// App Routes
app.use('/', index);



app.use(middles.notFound);
app.use(middles.errors);




app.listen(3011, () => console.log('Server is running on port 3011'));