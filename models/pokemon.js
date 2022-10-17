const mongoose = require('mongoose')

// Make a schema
const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true},
    type: { type: String, required: true},
    readyToFight: Boolean
})


// Make a model from the schema
const Pokemon = mongoose.model('Pokemon', pokemonSchema)

// Export the Model for use in the App

module.exports = Pokemon
