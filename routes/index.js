const express = require('express');
// Require Router from Express.
const router = express.Router();
// Require our GET methods from media.js
const { getMedia } = require('../controllers/media.js');

router.get('/', getMedia);

// Export the GET method to server.js.
module.exports = router;
