import express from "express"

import{

create,

getAll,

updateBooking,

removeBooking

}

from

"../controllers/bookingController.js"

const router=

express.Router()

router.post(

"/",

create

)

router.get(

"/",

getAll

)

router.put(

"/:id",

updateBooking

)

router.delete(

"/:id",

removeBooking

)

export default router
