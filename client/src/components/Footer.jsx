export default function Footer(){

return(

<>

<footer
style={{
background:"#0d0d05",
padding:"36px 24px",
textAlign:"center",

borderTop:
"1px solid rgba(255,255,255,.06)"
}}
>

<div
style={{
display:"flex",

alignItems:"center",

justifyContent:"center",

gap:10,

marginBottom:14
}}
>

<div
style={{

width:32,

height:32,

background:"#0d5c3a",

borderRadius:"50%",

display:"flex",

alignItems:"center",

justifyContent:"center"

}}
>

💧

</div>

<span
style={{
fontSize:18,

fontWeight:700,

color:"#6ee8a8"
}}
>

AquaPoint

</span>

</div>

<p
style={{
fontSize:14,

lineHeight:2,

color:
"rgba(255,255,255,.42)"
}}
>

Groundwater Survey &
Borewell Point Detection

<br/>

📍 Kannur • Kasaragod

<br/>

🕐 Mon–Sat
| 7:00 AM – 7:00 PM

<br/>

☎ Response within
2 hours

</p>

<div
style={{
display:"flex",

justifyContent:"center",

gap:18,

marginTop:20,

flexWrap:"wrap"
}}
>

<a
href="#services"
style={link}
>

Services

</a>

<a
href="#why-us"
style={link}
>

Why Us

</a>

<a
href="#contact"
style={link}
>

Book Survey

</a>

</div>

<hr
style={{
margin:"28px auto",

opacity:.08,

maxWidth:420
}}
/>

<p
style={{
fontSize:12,

lineHeight:1.8,

color:
"rgba(255,255,255,.22)"
}}
>

© 2026 AquaPoint

<br/>

Working Hours:
Mon–Sat • 7AM–7PM

</p>

</footer>

<a

href={`https://wa.me/91123456789?text=${encodeURIComponent(

`Hello AquaPoint 👋

I would like to enquire about groundwater survey.`

)}`}

target="_blank"

rel="noreferrer"

style={fab}

>

💬

</a>

</>

)

}

const link={

color:
"rgba(255,255,255,.5)",

textDecoration:"none",

fontSize:14

}

const fab={

position:"fixed",

right:26,

bottom:26,

width:62,

height:62,

borderRadius:"50%",

background:"#25D366",

display:"flex",

alignItems:"center",

justifyContent:"center",

fontSize:28,

textDecoration:"none",

boxShadow:
"0 20px 50px rgba(37,211,102,.3)",

zIndex:999

}