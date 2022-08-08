const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Coach = require('../models/coach.js');

router.get('/', (req, res, next) => {
    Coach.find()
        .exec()
        .then(elems => {
            console.log(elems);

            if(elems.length >= 0 ) {
                res.status(200).json(elems);
            } else {
                res.status(404).json({messaggio: 'Nessun elemento trovato'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        })
});

router.post('/', (req, res, next) => {
    const coach = new Coach({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        description: req.body.description,
        hourlyRate: req.body.hourlyRate,
        areas: req.body.areas,
    });

    coach.save().then(result => {
        console.log(result);

        res.status(200).json({
            message: 'Handling POST requests to /recensioni',
            coach: result,
        });
    }).catch(error => console.log(error));

    
});

module.exports = router;