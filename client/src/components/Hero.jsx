import { STATS } from "../data/content"

export default function Hero(){

const scrollTo=(id)=>{

document
.getElementById(id)
?.scrollIntoView({

behavior:"smooth"

})

}

return(

<section
id="hero"

style={{

position:"relative",

background:
"linear-gradient(135deg,#0a3d26,#0d5c3a,#1a7a50)",

minHeight:520,

display:"flex",

alignItems:"center"

}}
>

<div
style={{

maxWidth:1100,

margin:"auto",

padding:
"80px 24px",

display:"grid",

gridTemplateColumns:
"1fr 1fr",

gap:60,

alignItems:"center"

}}
>

{/* LEFT */}

<div>

<div
style={{

display:"inline-block",

padding:
"6px 14px",

borderRadius:30,

background:
"rgba(255,255,255,.1)",

color:"#a8f0c8"

}}
>

🌿 Serving Kerala

</div>

<h1
style={{

fontSize:
"clamp(40px,6vw,70px)",

color:"#fff",

marginTop:20,

lineHeight:1.1

}}
>

Find Water.

<br/>

First Try.

</h1>

<p
style={{

color:
"rgba(255,255,255,.75)",

marginTop:20,

lineHeight:1.8

}}
>

Scientific groundwater
survey and borewell
point detection.

</p>

<div
style={{

display:"flex",

gap:12,

marginTop:30,

flexWrap:"wrap"

}}
>

<button
onClick={()=>

scrollTo(
"contact"
)

}

style={primary}
>

Book Survey

</button>

<button
onClick={()=>

scrollTo(
"how-it-works"
)

}

style={secondary}
>

How It Works

</button>

</div>

</div>

{/* RIGHT */}

<div
style={{

display:"grid",

gridTemplateColumns:
"1fr 1fr",

gap:14

}}
>

{

STATS.map(

x=>(

<div
key={x.label}

style={card}
>

<h2
style={number}
>

{x.value}

</h2>

<p
style={label}
>

{x.label}

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

const primary={

background:"#fff",

color:"#0d5c3a",

padding:
"14px 26px",

border:"none",

borderRadius:8,

fontWeight:600

}

const secondary={

background:"transparent",

color:"#fff",

border:
"1px solid rgba(255,255,255,.3)",

padding:
"14px 26px",

borderRadius:8

}

const card={

background:
"rgba(255,255,255,.08)",

padding:22,

borderRadius:12,

textAlign:"center",

border:
"1px solid rgba(255,255,255,.08)"

}

const number={

color:"#6ee8a8",

fontSize:34

}

const label={

color:
"rgba(255,255,255,.65)"

}