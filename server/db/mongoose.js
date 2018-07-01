const mongoose = require("mongoose")

url = 'mongodb://localhost:27017/ToDoApp'

mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = {mongoose}