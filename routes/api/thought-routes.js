const router = require('express').Router()
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    removeThoughtById,
    createReaction,
    removeReactionById
} = require('../../controllers/thought-controller')

// /api/thoughts
router 
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// /api/thoughts/:id    
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(removeThoughtById)

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction)

// /api/thoughts/:thoughtId/reactions/:reationId    
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReactionById)

module.exports = router
