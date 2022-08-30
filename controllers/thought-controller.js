const { Thought } = require('../models')

const ThoughtController = {
    // get all thoughts
    getAllThoughts(req,res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    // get one thought
    getThoughtById({ params },res) {
        Thought.findOne(
            { _id: params.id}
        )
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with that id'})
                return
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.json(err))
    },

    // create a thought
    createThought({ body }, res) {
        Thought.create(body)
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.status(400).json(err))
    },

    // update thought by id
    updateThoughtById({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            body, 
            { new: true, runValidators: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData){
                res.status(404).json({message: 'No thought foundn with this id' })
                return
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.status(400).json(err))
    }
}

module.exports = ThoughtController
