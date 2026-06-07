import { SERVICES } from "../data/content"

export default function Services(){

return(

<section
id="services"

style={{
padding:"90px 24px",
background:"#f9f6f0"
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
color:"#0d5c3a",
letterSpacing:"0.1em",
textTransform:"uppercase"
}}
>

What We Do

</div>

<h2
style={{
fontSize:
"clamp(28px,4vw,42px)",

marginTop:12,

color:"#1a1a1a"
}}
>

Our Services

</h2>

</div>

<div
style={{

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(280px,1fr))",

gap:24

}}
>

{

SERVICES.map(

x=>(

<div
key={x.title}

style={card}
>

<div
style={{
fontSize:34
}}
>

{x.icon}

</div>

<h3
style={{
marginTop:18,
fontSize:20
}}
>

{x.title}

</h3>

<p
style={{
marginTop:12,

lineHeight:1.8,

color:"#5a5a4a"
}}
>

{x.desc}

</p>

<div
style={{
marginTop:20,

width:34,

height:2,

background:"#0d5c3a"

}}
/>

</div>

)

)

}

</div>

</div>

</section>

)

}

const card={

background:"#fff",

padding:"28px",

borderRadius:14,

border:
"1px solid #e8e2d8"

}