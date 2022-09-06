const mongoose = require('mongoose')
const { isContext } = require('vm')

let menuSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    icon: {
        type: String,
        require: true
    },
    menuUrl: {
        type: String,
        require: true
    },
    entryDate: {
        type: Date,
        default: Date.now()
    },
})

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    pwd: {
        type: String,
        require: true
    },
    entryDate: {
        type: Date,
        default: Date.now()
    },
})

let menu = mongoose.model('menu', menuSchema, 'menu')
let users = mongoose.model('users', userSchema, 'users')

let mySchemas = {
    menu,
    users
}

module.exports = mySchemas