import {
Routes,
Route
}
from "react-router-dom"

import Home from "./pages/Home"

import Dashboard from "./pages/AdminDashboard"

import TrackBooking from "./pages/TrackBooking"

export default function App(){

return(

<Routes>

<Route

path="/"

element={<Home/>}

/>

<Route

path="/admin"

element={<Dashboard/>}

        />
        <Route
path="/track"
element={<TrackBooking/>}
/>


</Routes>

)

}
