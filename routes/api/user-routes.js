const router = require('express').Router()
const {
    getAllUsers,
    getUserById,
    createUser
} = require('../../controllers/user-controller')

// set up[ GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUserById)

module.exports = router