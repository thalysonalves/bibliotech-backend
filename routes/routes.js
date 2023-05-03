const express = require('express')
const TesteController = require('../Controller/TesteController')
const router = express.Router()

router.get('/', TesteController.index)
router.post('/', TesteController.store)

module.exports = router;