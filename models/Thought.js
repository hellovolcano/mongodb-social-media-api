const { Schema, model, Types } = require('mongoose')
const formatDate = require('../utils/format-date')

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => formatDate(createdAtVal)
    }
},
{
    toJSON: {
        getters: true
    }
})

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => formatDate(createdAtVal)
    },
    reactions: [ReactionSchema]
    
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }
})

ThoughtSchema.virtual('reactionCount').get(function() {
    // return the link of the reactions array as reactionCount
    return this.reactions.length
})

// creater the User model using the UserSchema
const Thought = model('Thought', ThoughtSchema)

// export the User model
module.exports = Thought 
