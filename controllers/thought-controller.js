const { Thought } = require('../models')

const ThoughtController = {
    // get all thoughts
    getThoughts(req,res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.json(err))
    },

    // get one thought
    getOneThought({ params },res) {
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
    }
}