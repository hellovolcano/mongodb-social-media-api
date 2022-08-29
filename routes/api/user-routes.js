const router = require('express').Router()
const {
    getAllUsers,
    getUserById,
    createUser,
    addFriend
} = require('../../controllers/user-controller')

// set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUserById)

// /:userId/friends/:friendId    
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)

module.exports = router
