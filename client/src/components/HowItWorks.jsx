import { STEPS } from "../data/content"
import { useState } from "react"

export default function HowItWorks(){

const[active,setActive]=
useState(0)

return(

<section
id="how-it-works"

style={{
padding:"90px 24px",
background:"#0d5c3a"
}}
>

<div
style={{
maxWidth:1100,
margin:"auto"
}}
>

<div
style={{
textAlign:"center",
marginBottom:56
}}
>

<div
style={{
fontSize:12,
color:"#6ee8a8",
letterSpacing:".1em",
textTransform:"uppercase"
}}
>

Simple Process

</div>

<h2
style={{
fontSize:
"clamp(30px,5vw,44px)",

marginTop:10,

color:"#fff"
}}
>

How It Works

</h2>

</div>

<div
style={{

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(230px,1fr))",

gap:20

}}
>

{

STEPS.map(

(step,index)=>(

<div
key={step.num}

onClick={()=>

setActive(
index
)

}

style={{

padding:"26px",

borderRadius:14,

cursor:"pointer",

background:

active===index

?

"rgba(255,255,255,.12)"

:

"rgba(255,255,255,.05)",

border:

active===index

?

"1px solid #6ee8a8"

:

"1px solid rgba(255,255,255,.08)"

}}

>

<div
style={{

fontSize:40,

fontWeight:700,

color:

active===index

?

"#6ee8a8"

:

"rgba(255,255,255,.2)"

}}
>

{step.num}

</div>

<h3
style={{
marginTop:14,
color:"#fff"
}}
>

{step.title}

</h3>

<p
style={{
marginTop:10,

lineHeight:1.7,

color:
"rgba(255,255,255,.7)"
}}
>

{step.desc}

</p>

</div>

)

)

}

</div>

</div>

</section>

)

}