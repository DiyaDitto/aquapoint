import express from "express"

import mongoose from "mongoose"

import cors from "cors"

import dotenv from "dotenv"

import bookingRoutes

from

"./routes/bookingRoutes.js"

dotenv.config()

const app=

express()

app.use(

cors()

)

app.use(

express.json()

)

mongoose

.connect(

process.env.MONGO_URI

)

.then(

()=>{

console.log(

"Mongo Connected"

)

}

)

.catch(

(err)=>{

console.log(

err

)

}

)

app.get(

"/",

(req,res)=>{

res.send(

"API Running"

)

}

)

app.use(

"/api/book",

bookingRoutes

)

app.listen(

5000,

()=>{

console.log(

"Server running on 5000"

)

}

)
