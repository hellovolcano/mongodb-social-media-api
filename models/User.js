const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    }
    // eventually add in a friends array that referenes itself
})

// creater the User model using the UserSchema
const User = model('User', UserSchema)

// export the User model
module.exports = User 
