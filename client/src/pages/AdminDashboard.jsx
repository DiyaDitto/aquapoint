import { useMemo,useState,useEffect } from "react"
import axios from "axios"

export default function Dashboard(){

const [search,setSearch]=
useState("")

const [filter,setFilter]=
useState("All")

const [selected,setSelected]=
useState(null)

const [date,setDate]=
useState("")

const [bookings,setBookings]=
useState([])

useEffect(()=>{

axios


.get(

`${import.meta.env.VITE_API_URL}/api/book`

)


.then(

(res)=>{

setBookings(

res.data

)

}

)

.catch(

console.log

)

},[])

const filtered=

useMemo(

()=>{

return bookings.filter(

x=>{

const match=

x.name
?.toLowerCase()

.includes(

search
.toLowerCase()

)

||

x.phone
?.includes(
search
)

const ok=

filter==="All"

||

x.status===filter

return(

match&&ok

)

}

)

},

[
bookings,
search,
filter
]

)

const confirm=

async(id)=>{

const booking=

bookings.find(

x=>

x._id===id

)

if(

!booking

)

return

if(

!booking.schedule

){

alert(

"Please schedule survey date first"

)

return

}

try{

await axios.put(

`${import.meta.env.VITE_API_URL}/api/book/${id}`,

{

status:
"Confirmed"

}

)

setBookings(

prev=>

prev.map(

x=>

x._id===id

?

{

...x,

status:
"Confirmed"

}

:

x

)

)

const msg=

encodeURIComponent(

`Hello ${booking.name},

Booking ID:
${booking.bookingId}

Your AquaPoint survey slot has been confirmed ✅

Survey Date:
${booking.schedule}

Working Hours:
8:00 AM – 6:00 PM

Thank you,
AquaPoint`

)

window.open(

`https://wa.me/91${booking.phone}?text=${msg}`,

"_blank"

)

}

catch{

alert(

"Confirmation failed"

)

}

}


const complete=

async(id)=>{

try{

await axios.put(

`${import.meta.env.VITE_API_URL}/api/book/${id}`,

{

status:
"Completed"

}

)

setBookings(

prev=>

prev.map(

x=>

x._id===id

?

{

...x,

status:
"Completed"

}

:

x

)

)

}

catch(

err

){

console.log(

err

)

alert(

"Update failed"

)

}

}

const remove=

async(id)=>{

const ok=

window.confirm(

"Delete permanently? This cannot be restored."

)

if(

!ok

)

return

try{

await axios.delete(

`${import.meta.env.VITE_API_URL}/api/book/${id}`

)

setBookings(

prev=>

prev.filter(

x=>

x._id!==id

)

)

alert(

"Deleted permanently"

)

}

catch{

alert(

"Delete failed"

)

}

}


const saveSchedule=

async()=>{

if(

!date

)

return

try{

await axios.put(

`${import.meta.env.VITE_API_URL}/api/book/${selected}`,

{

schedule:
date

}

)

setBookings(

prev=>

prev.map(

x=>

x._id===selected

?

{

...x,

schedule:
date

}

:

x

)

)

setSelected(

null

)

setDate(

"")

}

catch(

err

){

console.log(

err

)

alert(

"Schedule failed"

)

}

}

return(

<div style={page}>

<h1 style={title}>

AquaPoint Admin

</h1>

<div style={stats}>

<Stat
title="Total"
value={bookings.length}
/>

<Stat
title="Pending"
value={
bookings.filter(
x=>
x.status==="Pending"
).length
}
/>

<Stat
title="Confirmed"
value={
bookings.filter(
x=>
x.status==="Confirmed"
).length
}
/>

<Stat
title="Completed"
value={
bookings.filter(
x=>
x.status==="Completed"
).length
}
/>

</div>

<div style={toolbar}>

<input

placeholder="Search"

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

style={input}

/>

<select

value={filter}

onChange={(e)=>

setFilter(
e.target.value
)

}

style={input}

>

<option>All</option>

<option>Pending</option>

<option>Confirmed</option>

<option>Completed</option>

</select>

</div>

<div style={list}>

{

filtered.map(

x=>(

<div
key={x._id}
style={card}
>

<div style={top}>

<div>

<h3
style={{
margin:0
}}
>

{x.name}

</h3>

<div
style={{
fontSize:13,
opacity:.6,
marginTop:6
}}
>

Booking ID:

{

x.bookingId||

"AQP-PENDING"

}

</div>

<div
style={{
marginTop:8,
opacity:.6
}}
>

📞

{x.phone}

</div>

</div>

<div

style={{

...badge,

background:

x.status==="Pending"

?

"#7c3aed"

:

x.status==="Confirmed"

?

"#16a34a"

:

"#8b5e3c"

}}

>

{

x.status||

"Pending"

}

</div>

</div>

<p>

📍

{x.district}

</p>

<p>

{x.details}

</p>

{

x.schedule&&(

<p
style={{
color:"#38bdf8"
}}
>

📅

{x.schedule}

</p>

)

}

<div style={buttons}>

<button

style={btn}

onClick={()=>

setSelected(
x._id
)

}

>

Schedule

</button>

<button

style={{

...green,

opacity:

x.schedule

?

1

:

0.5

}}

disabled={

!x.schedule

}

onClick={()=>

confirm(
x._id
)

}

>

{

x.schedule

?

"Confirm + Notify"

:

"Schedule First"

}

</button>

<button

style={brown}

onClick={()=>

complete(
x._id
)

}

>

Complete

</button>

<a

href={`https://wa.me/91${x.phone}`}

style={btn}

>

WhatsApp

</a>

<button

style={deleteBtn}

onClick={()=>

remove(
x._id
)

}

>

Delete

</button>

</div>

</div>

)

)

}

</div>

{

selected&&(

<div style={modal}>

<div style={box}>

<h3>

Schedule Survey

</h3>

<input

type="date"

value={date}

onChange={(e)=>

setDate(
e.target.value
)

}

style={dateInput}

/>

<button

style={green}

onClick={saveSchedule}

>

Save

</button>

</div>

</div>

)

}

</div>

)

}

function Stat({

title,
value

}){

return(

<div style={stat}>

<div>

{title}

</div>

<h2>

{value}

</h2>

</div>

)

}

const page={background:"#09090b",minHeight:"100vh",padding:50,color:"#fff"}

const title={marginBottom:30}

const stats={display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18}

const stat={background:"#111113",padding:26,borderRadius:20}

const toolbar={display:"flex",gap:12,marginTop:30}

const input={padding:16,background:"#111113",color:"#fff",border:"1px solid #222",borderRadius:14}

const list={display:"grid",gap:18,marginTop:30}

const card={background:"#111113",padding:24,borderRadius:20}

const top={display:"flex",justifyContent:"space-between"}

const badge={

padding:"10px 16px",

borderRadius:12,

color:"#fff",

fontWeight:600,

fontSize:15,

height:40,

display:"flex",

alignItems:"center",

justifyContent:"center",

whiteSpace:"nowrap"

}


const buttons={display:"flex",gap:10,marginTop:18,flexWrap:"wrap"}

const btn={padding:"10px 14px",background:"#1a1a1f",color:"#fff",border:"none",borderRadius:12,textDecoration:"none"}

const green={...btn,background:"#16a34a"}

const brown={...btn,background:"#8b5e3c"}

const deleteBtn={...btn,background:"#5a3b1c"}

const modal={position:"fixed",inset:0,background:"rgba(0,0,0,.7)",display:"grid",placeItems:"center"}

const box={background:"#111113",padding:30,borderRadius:20,width:420}

const dateInput={width:"100%",padding:16,background:"#fff",color:"#111",borderRadius:14,marginTop:20,marginBottom:20}
