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

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

// /api/users/:id    
router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(removeUserById)

// /api/users/:userId/friends/:friendId    
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriendById)

module.exports = router
