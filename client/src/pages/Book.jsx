import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Book() {

return (

<div
style={{
background:"#07140f",
minHeight:"100vh",
color:"#fff"
}}
>

<Navbar/>

<section
style={{
padding:"180px 8%"
}}
>

<div
style={{
maxWidth:"1300px",
margin:"auto",

display:"grid",

gridTemplateColumns:
"1fr 1fr",

gap:"80px",

alignItems:"center"
}}
>

{/* LEFT */}

<div>

<div
style={{
color:"#6ee8a8",

letterSpacing:"4px",

marginBottom:"20px"
}}
>

BOOK SURVEY

</div>

<h1
style={{
fontSize:
"clamp(50px,8vw,110px)",

lineHeight:1
}}
>

Find
Water.

<br/>

Before
Drilling.

</h1>

<p
style={{
marginTop:"40px",

fontSize:"20px",

lineHeight:2,

opacity:.75
}}
>

Schedule a professional
groundwater survey and
receive expert guidance.

</p>

</div>

{/* RIGHT */}

<div>

<div
style={{
background:
"rgba(255,255,255,.04)",

backdropFilter:
"blur(30px)",

padding:"50px",

borderRadius:"36px",

border:
"1px solid rgba(255,255,255,.08)"
}}
>

<div
style={{
display:"grid",

gap:"20px"
}}
>

<input
placeholder="Full Name"
style={input}
/>

<input
placeholder="Phone"
style={input}
/>

<input
placeholder="District"
style={input}
/>

<select
style={input}
>

<option>

Survey Type

</option>

<option>

Residential

</option>

<option>

Agricultural

</option>

<option>

Commercial

</option>

</select>

<textarea
rows="5"
placeholder="Additional Notes"
style={input}
/>

<button
style={button}
>

Confirm Booking →

</button>

</div>

</div>

</div>

</div>

</section>

<Footer/>

</div>

)

}

const input={

padding:"20px",

background:
"rgba(255,255,255,.06)",

border:
"1px solid rgba(255,255,255,.08)",

borderRadius:"18px",

color:"#fff",

outline:"none",

fontSize:"16px"

}

const button={

padding:"22px",

background:"#6ee8a8",

border:"none",

borderRadius:"18px",

color:"#041009",

fontWeight:"900",

cursor:"pointer"

}