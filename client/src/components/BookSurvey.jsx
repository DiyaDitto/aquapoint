import { useState } from "react"
import axios from "axios"

export default function BookSurvey(){

const [submitted,setSubmitted]=
useState(false)

const [trackingId,setTrackingId]=
useState("")

const [loading,setLoading]=
useState(false)

const [customer,setCustomer]=
useState("")

const [formData,setFormData]=
useState({

name:"",
phone:"",
district:"Kannur",
details:""

})

const handleSubmit=

async()=>{

if(

!formData.name||

!formData.phone

){

alert(

"Fill required fields"

)

return

}

try{

setLoading(true)

const bookingId=

"AQP-"+

Date.now()

await axios.post(

`${import.meta.env.VITE_API_URL}/api/book`,

{

...formData,

bookingId,

status:"Pending",

schedule:""

}

)

setTrackingId(

bookingId

)



setCustomer(

formData.name

)

setSubmitted(true)

setFormData({

name:"",
phone:"",
district:"Kannur",
details:""

})

}

catch(

err

){

console.log(err)

alert(

"Submission failed"

)

}

finally{

setLoading(false)

}

}

return(

<section
id="contact"

style={{
padding:"90px 24px",
background:"#1a1a0f"
}}

>

<div
style={{
maxWidth:900,
margin:"0 auto"
}}
>

<div
style={{
textAlign:"center",
marginBottom:48
}}
>

<div
style={{
fontSize:12,
color:"#6ee8a8",
letterSpacing:"0.1em"
}}
>

GET IN TOUCH

</div>

<h2
style={{
fontSize:
"clamp(26px,4vw,40px)",
color:"#fff"
}}
>

Book a Site Visit

</h2>

<p
style={{
color:
"rgba(255,255,255,.55)"
}}
>

Fill the form or WhatsApp us

</p>

</div>

{

submitted

?

(

<div
style={success}
>

<div
style={{
fontSize:50
}}
>

✅

</div>

<h3
style={{
color:"#6ee8a8"
}}
>

Enquiry Received

</h3>

<p
style={{

color:
"rgba(255,255,255,.7)"

}}

>

Thank you{" "}

{customer}

</p>

<div
style={{

marginTop:24,

background:
"rgba(255,255,255,.06)",

padding:20,

borderRadius:14

}}

>

<div
style={{

fontSize:12,

letterSpacing:".08em",

opacity:.7

}}

>

TRACKING ID

</div>

<div
style={{

fontSize:26,

fontWeight:700,

color:"#6ee8a8",

marginTop:8

}}

>

{

trackingId

}

</div>

<div
style={{

marginTop:10,

fontSize:13,

opacity:.7

}}

>

Use this ID in

Track Booking

to check status

</div>

</div>


</div>

)

:

(

<div
style={card}
>

<div
style={grid}
>

<div>

<label style={label}>

Your Name *

</label>

<input

value={
formData.name
}

onChange={(e)=>

setFormData({

...formData,

name:
e.target.value

})

}

placeholder=
"E.g. Rajan K"

style={input}

/>

</div>

<div>

<label style={label}>

Phone Number *

</label>

<input

value={
formData.phone
}

onChange={(e)=>

setFormData({

...formData,

phone:
e.target.value

})

}

placeholder=
"+91 9876543210"

style={input}

/>

</div>

</div>

<div
style={{
marginBottom:20
}}
>

<label style={label}>

District

</label>

<select

value={
formData.district
}

onChange={(e)=>

setFormData({

...formData,

district:
e.target.value

})

}

style={select}

>

<option>

Kannur

</option>

<option>

Kasaragod

</option>

</select>

</div>

<div
style={{
marginBottom:28
}}
>

<label style={label}>

Additional Details

</label>

<textarea

rows={5}

value={
formData.details
}

onChange={(e)=>

setFormData({

...formData,

details:
e.target.value

})

}

placeholder=
"Land size, previous borewells, nearest landmark..."

style={textarea}

/>

</div>

<div
style={{
display:"flex",
gap:14,
flexWrap:"wrap"
}}
>

<button

onClick={handleSubmit}

disabled={loading}

style={submit}
>

{

loading

?

"Submitting..."

:

"Submit Enquiry"

}

</button>

<a

href={`https://wa.me/911234567890?text=${encodeURIComponent(

`Hello AquaPoint

Name:
${formData.name}

Phone:
${formData.phone}

District:
${formData.district}

Details:
${formData.details}`

)}`}

target="_blank"

rel="noreferrer"

style={whatsapp}
>

💬 WhatsApp Us

</a>

</div>

</div>

)

}

</div>

</section>

)

}

const card={
background:
"rgba(255,255,255,.05)",
padding:42,
borderRadius:16
}

const grid={
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(280px,1fr))",
gap:20,
marginBottom:20
}

const label={
display:"block",
marginBottom:8,
color:
"rgba(255,255,255,.5)"
}

const input={
width:"100%",
padding:14,
background:
"rgba(255,255,255,.07)",
color:"#fff",
border:
"1px solid rgba(255,255,255,.15)",
borderRadius:8
}

const select={
width:"100%",
padding:14,
background:"#fff",
color:"#111"
}

const textarea={
width:"100%",
padding:14,
background:
"rgba(255,255,255,.07)",
color:"#fff",
borderRadius:8
}

const submit={
flex:1,
padding:14,
background:"#0d5c3a",
color:"#fff",
border:"none",
borderRadius:8
}

const whatsapp={
flex:1,
padding:14,
background:"#25D366",
color:"#fff",
display:"flex",
justifyContent:"center",
textDecoration:"none"
}

const success={
padding:50,
textAlign:"center",
background:
"rgba(110,232,168,.08)",
borderRadius:16
}
