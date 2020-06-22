const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

//Route to get a burger
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let object = {
            burgers: data
        };

        res.render('index', object);
    });
});

//Route to post a new burger to burger_name
router.post('/burger', function(req,res) {
    burger.insertOne(
        [
            'burger_name',
        ],

        [
            req.body.burger_name,
        ],

        function(data) {
            res.sendStatus(200).end();
        }
    )
});

router.put('/burgers/:id', function(req, res) {
    let condition = req.params.id;

    burger.updateOne(
        {
            eaten: true
        },
        condition, function(data) {
            res.sendStatus(200).end();
        }
    );
});

router.delete('burger/:id'm function(req, res) {
    let id = req.params.id;
    burger.deleteOne(id, function(data) {
        res.sendStatus(200).end();
    });
});

module.exports = router;