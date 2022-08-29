const { Schema, model } = require('mongoose')

const FriendSchema = new Schema({
    friendId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    }
})

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please enter a valid email address']

    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [FriendSchema]
    // eventually add in a friends array that referenes itself
},
{
    toJSON: {
        virtuals: true
    }
})

// create a virtual to count friends

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

// creater the User model using the UserSchema
const User = model('User', UserSchema)

// export the User model
module.exports = User 
