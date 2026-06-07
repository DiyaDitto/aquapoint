import Booking from "../models/Booking.js"

export const create=

async(req,res)=>{

try{

const existing=

await Booking.findOne({

phone:
req.body.phone,

status:{

$ne:
"Completed"

}

})

if(existing){

return res

.status(400)

.json({

message:
"Booking already exists"

})

}

const booking=

await Booking.create({

...req.body,

status:
"Pending",

schedule:
""

})

res

.status(201)

.json(

booking

)

}

catch(err){

res

.status(500)

.json({

message:
err.message

})

}

}

export const getAll=

async(

req,

res

)=>{

try{

const data=

await Booking

.find()

.sort({

createdAt:
-1

})

res

.json(

data

)

}

catch(err){

res

.status(500)

.json({

message:
err.message

})

}

}

export const updateBooking=

async(

req,

res

)=>{

try{

const booking=

await Booking

.findByIdAndUpdate(

req.params.id,

req.body,

{

new:true

}

)

res

.json(

booking

)

}

catch(err){

res

.status(500)

.json({

message:
err.message

})

}

}
