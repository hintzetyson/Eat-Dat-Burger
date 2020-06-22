const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let object = {
            burgers: data
        };

        res.render('index', object);
    });
});

router.post()