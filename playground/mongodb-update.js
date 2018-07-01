const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (error, client) => {
    if (error){
        return console.log("Unable to Mongo Db server")
    }
    console.log("Connected to Mongo Db server")
    const db = client.db('ToDoApp')

    db.collection("ToDos").findOneAndUpdate({text:"you"}, {
                                        $set:{
                                            completed:true
                                        }
                                    }, {
                                        returnOriginal:false
                                    }).then((result) => {
            console.log(result)
        }, (error) => {
            console.log(`Error while deleting :${error}`)
        })
    // client.close();
})