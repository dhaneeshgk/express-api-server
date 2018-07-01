const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, client) => {
    if (error){
        return console.log("Unable to Mongo Db server")
    }
    console.log("Connected to Mongo Db server")
    const db = client.db('ToDoApp')

    // db.collection('ToDos').insertOne({
    //     name:"you",
    //     profession:"SA"
    // }, (err, result) => {
    //     err ? console.log("Unable to insert collection") : console.log(`Successfully inserted todo ${JSON.stringify(result.ops, undefined, 2)}`)
    // })

    // db.collection('ToDos').insertOne({
    //     title:"yeh",
    //     description:"yeh description"
    // }, (err, result) => {
    //     err ? console.log("Unable to insert collection") : console.log(result.ops[0]._id.getTimestamp(),result.ops[0]._id. )
    // })

    client.close();
})