






const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./db/connection')
const router = require('./routes/router')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const PORT = 3000 || process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Education Server started at ${PORT}`);
})