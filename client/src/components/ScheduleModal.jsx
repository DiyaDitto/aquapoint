import { useState } from "react"

export default function ScheduleModal({

booking,

close,

save

}){

const[
date,
setDate
]=
useState("")

return(

<div
style={overlay}
>

<div
style={card}
>

<h2>

Schedule Survey

</h2>

<p>

{booking.name}

</p>

<input

type="date"

value={date}

onChange={(e)=>

setDate(
e.target.value
)

}

style={input}

/>

<div
style={actions}
>

<button

onClick={()=>

save(

booking.id,

date

)

}

style={saveBtn}

>

Assign

</button>

<button

onClick={close}

style={cancel}

>

Close

</button>

</div>

</div>

</div>

)

}

const overlay={

position:"fixed",

inset:0,

background:
"rgba(0,0,0,.5)",

display:"grid",

placeItems:"center"

}

const card={

background:"#fff",

padding:30,

borderRadius:16,

width:400

}

const input={

width:"100%",

padding:14,

marginTop:20

}

const actions={

display:"flex",

gap:10,

marginTop:20

}

const saveBtn={

flex:1,

background:"#0d5c3a",

color:"#fff",

padding:12,

border:"none",

borderRadius:8

}

const cancel={

flex:1,

padding:12

}
