const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, client) => {
    if (error){
        return console.log("Unable to Mongo Db server")
    }
    console.log("Connected to Mongo Db server")
    const db = client.db('ToDoApp')

    // deleteMany
    // db.collection('ToDos').deleteMany({text:"yours"}).then((result) => {
    //     console.log(result)
    // }, (error) => {
    //     console.log(`Error while deleting :${error}`)
    // })

    // deleteOne
    // db.collection('ToDos').deleteOne({text:"mine"}).then((result) => {
    //     console.log(result)
    // }, (error) => {
    //     console.log(`Error while deleting :${error}`)
    // })

    // findOneAndDelete
    // db.collection('ToDos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result)
    // })

    // findOneAndDelete using ObjectID
    // db.collection('ToDos').findOneAndDelete({_id: new ObjectID("5b387341e84837c159928676")}).then((result)=>{
    //         console.log(JSON.stringify(result, undefined, 2))
    // })

    // client.close();
})