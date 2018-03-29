var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Trip = require('../models/Trip.js');

/* GET ALL TRIPS */
router.get('/', function(req, res, next) {
  Trip.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE TRIP BY ID */
router.get('/:id', function(req, res, next) {
  Trip.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE TRIP */
router.post('/', function(req, res, next) {
  Trip.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE TRIP */
router.put('/:id', function(req, res, next) {
  Trip.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE TRIP */
router.delete('/:id', function(req, res, next) {
  Trip.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
