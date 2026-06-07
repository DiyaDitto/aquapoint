import { useState } from "react"
import { NAV_LINKS } from "../data/content"

export default function Navbar(){

const[
menuOpen,
setMenuOpen
]=
useState(false)

const[
adminMode,
setAdminMode
]=
useState(false)

const scrollTo=(id)=>{

const section=

document
.getElementById(id)

if(section){

window.scrollTo({

top:
section.offsetTop-72,

behavior:
"smooth"

})

}

setMenuOpen(false)

}

return(

<nav
style={{

position:"fixed",

top:0,

left:0,

right:0,

zIndex:999,

background:
"rgba(10,20,16,.88)",

backdropFilter:
"blur(20px)",

borderBottom:
"1px solid rgba(255,255,255,.06)",

padding:"0 24px"

}}

>

<div
style={{

maxWidth:1200,

margin:"auto",

height:72,

display:"flex",

alignItems:"center",

justifyContent:
"space-between"

}}

>

<div

onDoubleClick={()=>

setAdminMode(
true
)

}

onClick={()=>

scrollTo(
"hero"
)

}

style={{

display:"flex",

gap:12,

alignItems:"center",

cursor:"pointer"

}}

>

<div
style={{

width:42,

height:42,

borderRadius:"50%",

background:"#0d5c3a",

display:"flex",

justifyContent:"center",

alignItems:"center"

}}

>

💧

</div>

<div>

<div
style={{

fontWeight:800,

fontSize:20,

color:"#fff"

}}

>

AquaPoint

</div>

<div
style={{

fontSize:11,

color:
"rgba(255,255,255,.55)"

}}

>

Borewell Experts

</div>

</div>

</div>

<div
style={{

display:"flex",

gap:18,

alignItems:"center"

}}

>

{

NAV_LINKS.map(

item=>(

<div

key={item.label}

onClick={()=>

scrollTo(
item.id
)

}

style={{

cursor:"pointer",

color:"#fff",

fontWeight:500

}}

>

{item.label}

</div>

)

)

}

<a

href="/track"

style={{

padding:"10px 18px",

borderRadius:999,

background:"#0d5c3a",

color:"#fff",

textDecoration:"none",

fontWeight:600

}}

>

Track Booking

</a>

{

adminMode&&(

<a

href="/admin"

style={{

padding:"10px 18px",

borderRadius:999,

background:"#14532d",

color:"#fff",

textDecoration:"none",

fontWeight:700

}}

>

Admin

</a>

)

}

</div>

<button

onClick={()=>

setMenuOpen(
!menuOpen
)

}

style={{

background:"none",

border:"none",

color:"#fff",

fontSize:24

}}

>

☰

</button>

</div>

{

menuOpen&&(

<div
style={{

padding:20,

display:"grid",

gap:18,

background:"#07140f"

}}

>

{

NAV_LINKS.map(

item=>(

<div

key={item.label}

onClick={()=>

scrollTo(
item.id
)

}

style={{
color:"#fff"
}}

>

{item.label}

</div>

)

)

}

<a

href="/track"

style={{

color:"#6ee8a8",

textDecoration:"none"

}}

>

Track Booking

</a>

{

adminMode&&(

<a

href="/admin"

style={{

color:"#6ee8a8",

textDecoration:"none"

}}

>

Admin

</a>

)

}

</div>

)

}

</nav>

)

}
