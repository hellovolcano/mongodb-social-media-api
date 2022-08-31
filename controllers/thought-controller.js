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
                res.status(404).json({message: 'No thought found with this id' })
                return
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.status(400).json(err))
    },

    // delete a thought by id 
    removeThoughtById({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id})
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: 'No thought found with this id '})
                return
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.status(400).json(err))
    },

    // create a reaction
    createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body }},
            { new: true, runValidators: true }
        )
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: 'No thought found with this id '})
                return
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.status(400).json(err))
    },

    // remove a reaction by id
    removeReactionById({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true } 
        )
    .then(dbThoughtData => {
        if(!dbThoughtData) {
            res.status(404).json({message: 'No thought found with this id '})
            return
        }
        res.json(dbThoughtData)
    })
    .catch(err => res.status(400).json(err))
    }
}
module.exports = ThoughtController
