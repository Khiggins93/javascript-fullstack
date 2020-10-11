const { Router } = require('express');
const { modelNames } = require('mongoose');
const router = Router();

router.get('/', (req, res) => res.json({text: 'Hola Kevin'}));

module.exports = router;