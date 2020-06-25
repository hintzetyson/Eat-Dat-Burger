/* eslint-disable linebreak-style */
const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

// Route to get the list of burgers
router.get('/', (req, res) => {
  burger.selectAll((data) => {
    const object = {
      burgers: data,
    };

    res.render('index', object);
  });
});

// Route to post a new burger to burger_name
router.post('/burger', (req, res) => {
  burger.insertOne(
    [
      'burger_name',
    ],

    [
      req.body.burger_name,
    ],

    () => {
      res.sendStatus(200).end();
    });
});

// Route to update burgers
router.put('/burgers/:id', (req, res) => {
  const condition = req.params.id;

  burger.updateOne(
    {
      eaten: true,
    },
    condition, () => {
      res.sendStatus(200).end();
    });
});

// Route to delete a burger
router.delete('burgers/:id', (req, res) => {
  const { id } = req.params;
  burger.deleteOne(id, () => {
    res.sendStatus(200).end();
  });
});

module.exports = router;
