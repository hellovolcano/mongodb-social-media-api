const router = require('express').Router()
const {
    getAllUsers,
    getUserById,
    createUser,
    addFriend,
    removeFriendById,
    updateUserById,
    removeUserById
} = require('../../controllers/user-controller')

// set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(removeUserById)

// /:userId/friends/:friendId    
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriendById)

module.exports = router
