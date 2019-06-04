const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const commentRoutes = express.Router();
const PORT = 4001;
var config = require('../config/config');
let Comment = require('./commentSchema');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


commentRoutes.route('/').get(function(req, res) {
    Comment.find(function(err, cars) {
        if (err) {
            console.log(err);
        } else {
            res.json(cars);
        }
    });
});



app.use('/comments', commentRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
