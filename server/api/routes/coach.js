const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json('In ascolto');
});

module.exports = router;