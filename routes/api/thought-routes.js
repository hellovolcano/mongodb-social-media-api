const router = require('express').Router()
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById
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
    // .delete(removeThoughtById)


router
    .route('/:id/reactions')
    // .post(createReaction)
    // .delete(removeReactionById)

module.exports = router
