export default function WhyUs(){

const items=[

{
icon:"🎯",
title:"Scientific Survey",
desc:"Groundwater point detection using survey methods."
},

{
icon:"📍",
title:"Local Experience",
desc:"Focused service in Kannur and Kasaragod."
},

{
icon:"⚡",
title:"Fast Response",
desc:"Survey confirmation within working hours."
},

{
icon:"📈",
title:"Reduce Risk",
desc:"Improve drilling confidence before execution."
}

]

const sectors=[

["🌾","Agriculture","500+"],

["🏠","Residential","300+"],

["🏭","Industrial","150+"],

["🏢","Commercial","220+"],

["🌴","Plantation","180+"],

["🏗","Construction","260+"],

["🚜","Farm Land","200+"],

["🏘","Villa Projects","120+"]

]

return(

<section
id="why-us"

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

textTransform:"uppercase",

marginBottom:10

}}

>

WHY AQUAPOINT

</div>

<h2
style={{

fontSize:
"clamp(28px,4vw,42px)",

color:"#1a1a1a"

}}

>

Why Choose Us

</h2>

<p
style={{

marginTop:12,

color:"#6b6b5b",

maxWidth:550,

marginInline:"auto",

lineHeight:1.8

}}

>

Focused groundwater survey for better drilling decisions.

</p>

</div>

<div
style={sectorsWrap}
>

{

sectors.map(

x=>(

<div
key={x[1]}
style={sector}
>

<div
style={emoji}
>

{x[0]}

</div>

<div>

<div
style={sectorNumber}
>

{x[2]}

</div>

<div
style={sectorName}
>

{x[1]}

</div>

</div>

</div>

)

)

}

</div>

<div
style={grid}
>

{

items.map(

x=>(

<div
key={x.title}

style={card}

>

<div
style={icon}
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

marginTop:10,

lineHeight:1.8,

color:"#6b6b5b"

}}

>

{x.desc}

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

const sectorsWrap={

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",

gap:16,

marginBottom:50

}

const sector={

background:"#fff",

border:
"1px solid #e8e2d8",

padding:"18px",

borderRadius:18,

display:"flex",

alignItems:"center",

gap:16

}

const emoji={

fontSize:32

}

const sectorNumber={

fontSize:28,

fontWeight:700,

color:"#0d5c3a",

lineHeight:1

}

const sectorName={

fontSize:14,

marginTop:6,

color:"#6b6b5b"

}

const grid={

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(240px,1fr))",

gap:20

}

const card={

background:"#fff",

padding:"30px",

borderRadius:18,

border:
"1px solid #e8e2d8"

}

const icon={

fontSize:36

}
