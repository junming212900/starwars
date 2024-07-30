// controllers/characterController.js
const { Character } = require('../models');

// Create a new character
exports.createCharacter = async (req, res) => {
    try {
        const character = await Character.create(req.body);
        res.status(201).json(character);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Retrieve all characters
exports.readCharacters = async (req, res) => {
    try {
        const characters = await Character.findAll();
        res.json(characters);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Retrieve a single character by id
exports.readCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await Character.findByPk(id);
        if (character) {
            res.json(character);
        } else {
            res.status(404).send('Character not found');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a character
exports.updateCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Character.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedCharacter = await Character.findByPk(id);
            res.json(updatedCharacter);
        } else {
            res.status(404).send('Character not found');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a character
exports.deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Character.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(204).send(); // No content to send back
        } else {
            res.status(404).send('Character not found');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
