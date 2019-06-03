const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const carRoutes = express.Router();
const PORT = 4000;
var config = require('../config/config');
let Car = require('./carSchema');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

carRoutes.route('/').get(function(req, res) {
    Car.find(function(err, cars) {
        if (err) {
            console.log(err);
        } else {
            res.json(cars);
        }
    });
});

carRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Car.findById(id, function(err, car) {
        res.json(car);
    });
});

/*carRoutes.route('/type').get(function (req, res, next) {
    Car.find({type:req.body.type})
        .then(One=>{
            res.json(One);
        })
        .catch(err=>{
            res.status(400).send('Product not exist');
        });

});*/

carRoutes.route('/type').post(async (req, res)=> {
    await Car.findOne({
        type:req.body.type})
        .then(One=>{
            res.json(One);
        })

});

carRoutes.route('/add').post(function(req, res) {
    let car = new Car(req.body);
    car.save()
        .then(car => {
            res.status(200).json({'car': 'car added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new car failed');
        });
});

carRoutes.route('/update/:id').post(function(req, res) {
    Car.findById(req.params.id, function(err, car) {
        if (!car)
            res.status(404).send("data is not found");
        else
        {
            car.name = req.body.name;
            car.price = req.body.price;
            car.type = req.body.type;
            car.availability = req.body.availability;
        }


        car.save().then(car => {
            res.json('Car updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

carRoutes.route('/delete/:id').delete(function (req, res, next) {
    Car.findByIdAndRemove(req.params.id, function (err, cars) {
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



app.use('/products', carRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
