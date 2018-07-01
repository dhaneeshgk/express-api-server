const {ObjectID} = require('mongodb')
const {mongoose} = require("./../server/db/mongoose")
const {ToDo} = require("./../server/models/todo")

const id = "5b389a5b02d0f51055eefcdf"

!ObjectID.isValid(id)? console.log("ID is not valid") : console.log("ID is valid")

// ToDo.find({
//     _id: id
// }).then((todos)=>{
//     console.log("toDo by find",todos)
// })

// ToDo.findOne({
//     _id: id
// }).then((todos)=>{
//     console.log("toDo by findOne",todos)
// })

ToDo.findById({
    _id:id
}).then((todo) =>{
    !todo ? console.log("ID not Found") : console.log("toDo by id", todo)
}).catch((e)=>{
    console.log(e)
})
