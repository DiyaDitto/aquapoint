import {

Routes,

Route,

Navigate

}

from "react-router-dom"

import Home from "./pages/Home"

import Dashboard from "./pages/AdminDashboard"

import TrackBooking from "./pages/TrackBooking"

import AdminLogin from "./pages/AdminLogin"

export default function App(){

return(

<Routes>

<Route

path="/"

element={<Home/>}

/>

<Route

path="/track"

element={<TrackBooking/>}

/>

<Route

path="/admin"

element={

localStorage.getItem(

"admin"

)

===

"true"

?

<Dashboard/>

:

<Navigate
to="/admin-login"
/>

}

/>

<Route

path="/admin-login"

element={<AdminLogin/>}

                />
                <Route

path="/track"

element={<TrackBooking/>}

/>

</Routes>

)

}
