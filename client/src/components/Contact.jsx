import Navbar from "../components/Navbar"
import Footer from "./Footer"

export default function Contact(){

return(

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

gap:"60px",

alignItems:"center"
}}
>

{/* LEFT */}

<div>

<div
style={{
color:"#6ee8a8",
letterSpacing:"4px"
}}
>

CONTACT

</div>

<h1
style={{
fontSize:
"clamp(50px,8vw,100px)",

lineHeight:1,

marginTop:"20px"
}}
>

Let's
Talk.

</h1>

<p
style={{
marginTop:"30px",

opacity:.7,

fontSize:"20px",

lineHeight:2
}}
>

Book surveys,
ask questions,
or connect with
our team.

</p>

<div
style={{
marginTop:"40px",

display:"grid",

gap:"18px",

opacity:.75
}}
>

<div>

📍 Kerala

</div>

<div>

📞 +91 12345 6789

</div>

<div>

✉ hello@aquascan.com

</div>

</div>

</div>

{/* RIGHT */}

<div>

<div
style={{
background:
"rgba(255,255,255,.04)",

padding:"50px",

borderRadius:"40px",

backdropFilter:
"blur(30px)",

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
placeholder="Name"
style={input}
/>

<input
placeholder="Phone"
style={input}
/>

<input
placeholder="Email"
style={input}
/>

<textarea
rows="6"
placeholder="Message"
style={input}
/>

<button
style={button}
>

Send Message →

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

fontSize:"16px",

outline:"none"

}

const button={

padding:"22px",

border:"none",

borderRadius:"18px",

background:"#6ee8a8",

color:"#041009",

fontWeight:"900",

cursor:"pointer"

}