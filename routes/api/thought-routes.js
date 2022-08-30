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

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(removeThoughtById)


router
    .route('/:thoughtId/reactions')
    .post(createReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReactionById)

module.exports = router
