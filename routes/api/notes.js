const express = require('express');
const router = express.Router();
const notesCTRL = require('../../controllers/api/notes')

router.post('/', notesCTRL.create);
router.get('/', notesCTRL.index);

module.exports = router