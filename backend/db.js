
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://neetka:arvind@mycluster.lmrk3.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String, 
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
