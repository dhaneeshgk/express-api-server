const express = require('express')
const bodyParser = require('body-parser')
const _ = require("lodash")
const {ObjectID} = require('mongodb')

const {mongoose} = require("./db/mongoose")
const {ToDo} = require("./models/todo")
const {User} = require("./models/user")
const port = process.env.PORT || 2000

const app = express();

app.use(bodyParser.json()) // to identify response as json

app.post("/todos", (req, res)=>{
    let todo = new ToDo({
        text: req.body.text
    })

    todo.save().then((doc) =>{
        res.status(201).send(doc);
    }).catch((error)=>{
        res.status(400).send(error)})
})

app.get("/todos", (req, res) => {
    ToDo.find().then((todos)=>{
        res.status(200).send({"Results":todos, "count": todos.length})
    }).catch((error) => {
        res.status(400).send(error)
    })
})


app.get("/todos/:id", (req, res)=>{
    let id = req.params.id
    if (!ObjectID.isValid(id)){
        return res.status(400).send({"Error":"Invalid ID"})
    }

    ToDo.findById({
        _id:id
    }).then((todo)=>{
        if(!todo){
            return res.status(404).send({"todo":{}})
        }else{
            return res.status(200).send({"todo":[todo]})
        }
    }).catch((e)=>{
        return res.status(404).send({"Error":"Not Found"})
    })
})


app.delete("/todos/:id", (req, res) =>{
    let id = req.params.id
    if (!ObjectID.isValid(id)){
        return res.status(400).send({"Error":"Invalid ID"})
    }
    ToDo.findByIdAndRemove({
        _id:id
    }, {text:req.body.text}).then((todo)=>{
        if(!todo){
            return res.status(404).send({"Error":"To do was not found"})
        }else{
            return res.status(200).send({"message":"Successfully deleted to do","todo":todo})
        }
    }).catch((e)=>{
        return res.status(400).send({})
    })
})

app.patch("/todos/:id", (req, res) => {
    let id = req.params.id
    let body = _.pick(req.body, ["text", "completed"])
    if (!ObjectID.isValid(id)){
        return res.status(400).send({"Error":"Invalid ID"})
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
        body.completed = true
    } else{
        body.completed = false
    }
    
    ToDo.findByIdAndUpdate({_id:id}, { $set:body }, {new:true})
                    .then((todo)=>{
                            if(!todo){
                                return res.status(404).send({"Result":"To do was not found"})
                            }else{
                                return res.status(200).send({"message":"Successfully updated to do","todo":todo})
                            }
                        }).catch((e)=>{ 
                            return res.status(400).send({})
                            }
                    )
    })



app.listen(port, () => {
    console.log(`To Do Apis hosted on ${port}`)
})