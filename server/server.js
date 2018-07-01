const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require("./db/mongoose")
const {ToDo} = require("./models/todo")
const {User} = require("./models/user")


const app = express();

app.use(bodyParser.json()) // to identify response as json

app.post("/todos", (req, res)=>{
    let todo = new ToDo({
        text: req.body.text
    })

    todo.save().then((doc) =>{
        res.send(doc);
    }).catch((error)=>{
        res.status(400).send(error)})
})




app.listen(2000, () => {
    console.log("To Do Rest Api on")
})