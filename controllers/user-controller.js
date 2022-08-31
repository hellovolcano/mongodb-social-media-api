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

    // update a user 
    updateUserById( { params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.id},
            body,
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id, bro '})
                return
            }
            res.json(dbUserData)
        })
        .catch(err => res.json(err))
    },

    // delete a user
    removeUserById({ params } , res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id, bro '})
                    return
                }
                res.json(dbUserData)
            })
            .catch(err => res.json(err))
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
    },

    // remove a friend
    removeFriendById({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId},
            { $pull: { friends: params.friendId } },
            { new: true }
            )
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({message: 'No user found with this id '})
                    return
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err))
    }
}

module.exports = UserController