const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: 'string',
        required: true,
        trim: true
    },
    lastName: {
        type: 'string',
        required: true,
        trim: true
    },
    email: {
        type: 'string',
        required: true,
        trim: true
    },
    password: {
        type: 'String',
        required: true,
    },
    accountType: {
        type: 'string',
        enum: ['admin', 'user'],
        required: true
    },
    addtionalDetails: { 
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"profile"
    }
})