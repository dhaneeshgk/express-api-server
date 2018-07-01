const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, client) => {
    if (error){
        return console.log("Unable to Mongo Db server")
    }
    console.log("Connected to Mongo Db server")
    const db = client.db('ToDoApp')

    db.collection("ToDos").find({name:"you"}).toArray().then((docs) => {
        console.log('ToDos')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) =>{
        console.log("Unable to fecth", e)
    })

    db.collection("ToDos").count().then((count) => {
        console.log('ToDos Count :',count )
    }, (err) =>{
        console.log("Unable to fecth", e)
    })
    client.close();
})