// routes/characterRoutes.js
const express = require('express');
const { createCharacter,readCharacters,readCharacter, updateCharacter, deleteCharacter } = require('../controllers/characterController');
const router = express.Router();

router.post('/', createCharacter);
router.get('/', readCharacters);
router.get('/:id', readCharacter);
router.put('/:id', updateCharacter);
router.delete('/:id', deleteCharacter);

module.exports = router;

