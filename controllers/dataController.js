const { update } = require('../models/pokemon')
const Pokemon = require('../models/pokemon')

const dataController = {
    //Index,
    index(req, res, next){
        Pokemon.find({}, (err, foundPokemons) => {
            if(err){
               res.status(400).send({
                msg: err.message
               })
            } else {
                res.locals.data.pokemons = foundPokemons
                next()
            }
        })
    },
    //Destroy
    destroy(req, res, next){
        Pokemon.findByIdAndDelete(req.params.id, (err, deletedPokemon) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.pokemon = deletedPokemon
                next()
            }
        })
    },
    //Update
    update(req, res, next){
        req.body.readyToFight = req.body.readyToFight === 'on'? true : false;
        Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPokemon) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.pokemon = updatedPokemon
                next()
            }
        })
    },
    //Create
    create(req, res, next){
        req.body.readyToFight = req.body.readyToFight === 'on'? true : false;
        Pokemon.create(req.body, (err, createdPokemon)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.pokemon = createdPokemon
                next()
            }
        })
    },
    //Edit
    // edit(req, res)
    //Show
    show(req, res, next){
        Pokemon.findById(req.params.id,(err, foundPokemon) => {
            if(err){
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a Pokemon with that ID'
                })
            } else {
                res.locals.data.pokemon = foundPokemon
                next()
            }
        })
    }
}

module.exports = dataController
