// con require
// const mongoose = require ('mongoose');
// const {Schema} = mongoose;

// const NoteSchema = new Schema({
//     title: {type: String, required: true},
//     description: {type: String, required: true},
//     date: {type: Date, default: Date.now}
// })

// module.exports = mongoose.model('Note', NoteSchema)

import {Schema, model} from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
},{
    timestamps: true,
    versionKey: false
})

export default model('Task', taskSchema)