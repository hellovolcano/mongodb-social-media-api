const { Schema, model } = require('mongoose')

const ReactionSchema = new Schema({
    // reaction schema goes here
    // min: 1,
    // max: 280
})

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    // eventually add in a friends array that referenes itself
},
{
    toJSON: {
        virtuals: true
    }
})

// creater the User model using the UserSchema
const Thought = model('Thought', ThoughtSchema)

// export the User model
module.exports = Thought 
