import { TESTIMONIALS } from "../data/content"

export default function Testimonials(){

return(

<section
id="testimonials"

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

letterSpacing:".1em",

textTransform:"uppercase"

}}

>

Client Stories

</div>

<h2
style={{

fontSize:
"clamp(30px,5vw,44px)",

marginTop:10,

color:"#1a1a1a"

}}

>

Trusted Across

Kannur & Kasaragod

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

TESTIMONIALS.map(

x=>(

<div
key={x.name}

style={card}

>

<div
style={quote}
>

❝

</div>

<p
style={{

lineHeight:1.8,

color:"#4f4f44"

}}

>

{x.text}

</p>

<div
style={footer}
>

<div
style={avatar}
>

{x.initial}

</div>

<div>

<h4
style={{

margin:0,

color:"#1a1a1a"

}}

>

{x.name}

</h4>

<div
style={role}
>

{x.role}

</div>

<div
style={place}
>

📍 {x.place}

</div>

</div>

</div>

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

padding:"30px",

borderRadius:18,

border:
"1px solid #e8e2d8"

}

const quote={

fontSize:36,

marginBottom:18,

color:"#0d5c3a"

}

const footer={

marginTop:28,

display:"flex",

alignItems:"center",

gap:12

}

const avatar={

width:46,

height:46,

borderRadius:"50%",

background:"#0d5c3a",

color:"#fff",

display:"flex",

alignItems:"center",

justifyContent:"center",

fontWeight:700

}

const role={

color:"#0d5c3a",

fontSize:14,

marginTop:3

}

const place={

color:"#7a7060",

fontSize:13,

marginTop:4

}
