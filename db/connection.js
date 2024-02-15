






const mongoose = require('mongoose')
const connectionString = process.env.CONNECTION_STRING
mongoose.connect(connectionString).then(()=>{
    console.log("mongodb connected to the server")
}).catch(()=>{
    console.log("connection failed")
})






