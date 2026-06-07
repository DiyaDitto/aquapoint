import { useState } from "react"
import axios from "axios"

export default function TrackBooking(){

const [trackingId,setTrackingId]=
useState("")

const [booking,setBooking]=
useState(null)

const [loading,setLoading]=
useState(false)

const search=

async()=>{

if(!trackingId)
return

setLoading(true)

try{

const res=

await axios.get(

"http://localhost:5000/api/book"

)

const found=

res.data.find(

x=>

x.bookingId
?.toLowerCase()

===

trackingId
.toLowerCase()

)

setBooking(

found||

false

)

}

catch{

alert(

"Unable to fetch"

)

}

setLoading(false)

}

return(

<div
style={page}
>

<div
style={box}
>

<h1>

Track Survey

</h1>

<p
style={{
opacity:.6
}}
>

Enter your Tracking ID

</p>

<input

placeholder=
"AQP-1749368420"

value={trackingId}

onChange={(e)=>

setTrackingId(
e.target.value
)

}

style={input}

/>

<button

onClick={search}

style={button}

>

{

loading

?

"Searching..."

:

"Track"

}

</button>

{

booking===false&&(

<p
style={{

marginTop:20,

color:"#ff6b6b"

}}

>

No booking found

</p>

)

}

{

booking&&(

<div
style={card}
>

<h2>

{booking.name}

</h2>

<p>

🆔

{

booking.bookingId

}

</p>

<p>

📍

{

booking.district

}

</p>

<p>

📅

{

booking.schedule||

"Not Scheduled"

}

</p>

<div

style={{

...status,

background:

booking.status==="Pending"

?

"#7c3aed"

:

booking.status==="Confirmed"

?

"#16a34a"

:

"#8b5e3c"

}}

>

{

booking.status||

"Pending"

}

</div>

</div>

)

}

</div>

</div>

)

}

const page={

minHeight:"100vh",

background:"#09090b",

display:"grid",

placeItems:"center",

padding:24

}

const box={

background:"#111113",

padding:40,

borderRadius:24,

color:"#fff",

width:"100%",

maxWidth:500

}

const input={

width:"100%",

padding:16,

borderRadius:14,

marginTop:20,

marginBottom:16,

border:"none"

}

const button={

width:"100%",

padding:16,

background:"#0d5c3a",

color:"#fff",

border:"none",

borderRadius:14

}

const card={

marginTop:26,

padding:22,

borderRadius:18,

background:"#1a1a1f"

}

const status={

marginTop:18,

padding:"10px 14px",

borderRadius:12,

display:"inline-block",

fontWeight:700

}
