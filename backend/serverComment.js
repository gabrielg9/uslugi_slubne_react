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

commentRoutes.route('/add').post(function(req, res) {
    let com = new Comment(req.body);
    com.save()
        .then(car => {
            res.status(200).json({'comment': 'comment added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new comment failed');
        });
});

commentRoutes.route('/delete/:id').delete(function (req, res, next) {
    Comment.findByIdAndRemove(req.params.id, function (err, cars) {
        if (!cars)
            res.status(404).send("data is not found");
        else
            cars.delete().then(cars => {
                res.json('Deleted succesfully');
            })
                .catch(err => {
                    res.status(400).send("Delete not possible");
                });

    });
});

commentRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Comment.findById(id, function(err, car) {
        res.json(car);
    });
});



app.use('/comments', commentRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
