import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Register() {

const [data,setData]=useState({

name:"",
phone:"",
district:"",
email:""

})

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
maxWidth:"1200px",
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
letterSpacing:"4px"
}}
>

REGISTER

</div>

<h1
style={{
fontSize:
"clamp(50px,8vw,110px)",

lineHeight:1,

marginTop:"20px"
}}
>

Join
AquaScan

</h1>

<p
style={{
marginTop:"40px",

fontSize:"20px",

lineHeight:2,

opacity:.75
}}
>

Create your account
and start booking
groundwater surveys.

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

value={data.name}

onChange={(e)=>

setData({

...data,

name:e.target.value

})

}
/>

<input
placeholder="Phone Number"

style={input}

value={data.phone}

onChange={(e)=>

setData({

...data,

phone:e.target.value

})

}
/>

<input
placeholder="Email"

style={input}

value={data.email}

onChange={(e)=>

setData({

...data,

email:e.target.value

})

}
/>

<select
style={input}

value={data.district}

onChange={(e)=>

setData({

...data,

district:e.target.value

})

}
>

<option value="">

Choose District

</option>

<option>

Kannur

</option>

<option>

Kochi

</option>

<option>

Kozhikode

</option>

<option>

Wayanad

</option>

</select>

<button
style={button}
>

Create Account →

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

background:"#6ee8a8",

border:"none",

borderRadius:"18px",

color:"#041009",

fontWeight:"900",

cursor:"pointer"

}