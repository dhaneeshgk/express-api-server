const mongoose = require("mongoose")

url = process.env.MONGODB_URI || 'mongodb://localhost:27017/ToDoApp'

mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = {mongoose}