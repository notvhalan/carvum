const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sample.controller');

// Example endpoint
router.get('/data', sampleController.getData);

module.exports = router;
