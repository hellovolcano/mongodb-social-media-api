const { User } = require('../models')

const UserController = {
    // get all users
    getAllUsers(req,res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData){
                res.status(404).json({ message: 'No user found with that id'})
                return
            }

            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    // create a user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err))
    },

    // add a friend
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId},
            { $push: { friends: params.friendId }},
            { new: true }
        )
        .then(dbUserData => {
            console.log(dbUserData)
            if (!dbUserData) {
                res.status(404).json({ message: 'User not found'})
                return
            }
            console.log(dbUserData)
            res.json(dbUserData)
        })
        .catch(err => res.json(err))
    }
}

module.exports = UserController