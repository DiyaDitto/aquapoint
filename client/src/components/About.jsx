export default function About() {

const services=[

"Groundwater Survey",

"Borewell Point Detection",

"Yield Prediction",

"Site Consultation"

]

return(

<section
style={{
padding:"90px 8%",
background:"#031321",
color:"#F7FBFF"
}}
>

<div
style={{
maxWidth:"1100px",
margin:"auto"
}}
>

<div
style={{
color:"#72D7FF",
letterSpacing:"3px",
fontSize:"14px"
}}
>

ABOUT AQUASCAN

</div>

<h2
style={{
fontSize:
"clamp(36px,6vw,64px)",

lineHeight:1.1,

marginTop:"18px"
}}
>

Find Water.
Reduce Risk.

</h2>

<p
style={{
marginTop:"24px",

maxWidth:"650px",

lineHeight:1.9,

opacity:.72,

fontSize:"18px"
}}
>

Started in 2019,
AquaScan focuses on
groundwater survey and
borewell point detection
to improve drilling success.

</p>

<div
style={{
display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",

gap:"18px",

marginTop:"45px"
}}
>

{

services.map(

(x)=>(

<div
key={x}

style={{

padding:"22px",

background:
"rgba(255,255,255,.04)",

border:
"1px solid rgba(255,255,255,.06)",

borderRadius:"18px"

}}
>

💧 {x}

</div>

)

)

}

</div>

<div
style={{
display:"flex",

gap:"50px",

marginTop:"45px"
}}
>

<div>

<div
style={{
fontSize:"34px",
fontWeight:"900",
color:"#72D7FF"
}}
>

2019

</div>

<div
style={{
opacity:.55
}}
>

Started

</div>

</div>

<div>

<div
style={{
fontSize:"34px",
fontWeight:"900",
color:"#72D7FF"
}}
>

1200+

</div>

<div
style={{
opacity:.55
}}
>

Surveys

</div>

</div>

</div>

</div>

</section>

)

}