require("dotenv").config()

const mongo=require("mongoose")
const mongo_url=process.env.MONGO

   mongo.set('strictQuery', false)

   
// connecting to mongo db
    mongo.connect(mongo_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(
        console.log("succefully connected")
    ).catch(error=>{
        console.log("connection fail  ")
        process.exit(1)
    }
    )

    
    