import mongoose from "mongoose"

const bookingSchema=

new mongoose.Schema({

name:String,

phone:String,

district:String,

details:String,

bookingId:String,

status:{

type:String,

default:"Pending"

},

schedule:{

type:String,

default:""

}

})

export default

mongoose.model(

"Booking",

bookingSchema
)
