import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminLogin(){

const[
password,
setPassword
]=
useState("")

const navigate=
useNavigate()

const login=()=>{

if(

password===

"aquapoint123"

){

localStorage.setItem(

"admin",

"true"

)

window.location.href=

"/admin"


}

else{

alert(

"Wrong password"

)

}

}

return(

<div
style={{

minHeight:"100vh",

display:"grid",

placeItems:"center",

background:"#09090b"

}}

>

<div
style={{

background:"#111",

padding:40,

borderRadius:20,

width:420

}}

>

<h1
style={{
color:"#fff"
}}
>

Admin Login

</h1>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>

setPassword(
e.target.value
)

}

style={{

width:"100%",

padding:16,

marginTop:20

}}

/>

<button

onClick={login}

style={{

marginTop:20,

width:"100%",

padding:16,

background:"#16a34a",

color:"#fff"

}}

>

Login

</button>

</div>

</div>

)

}
