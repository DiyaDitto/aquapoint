import Booking from "../models/Booking.js"

export const create=

async(req,res)=>{

try{

const booking=

await Booking.create(

req.body

)

res.status(201)

.json(

booking

)

}

catch(err){

res.status(500)

.json({

message:
err.message

})

}

}

export const getAll=

async(req,res)=>{

try{

const data=

await Booking.find()

res.json(

data

)

}

catch(err){

res.status(500)

.json({

message:
err.message

})

}

}
