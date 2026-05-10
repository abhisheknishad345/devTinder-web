
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import EditProfile from "./components/EditProfile"
import Feed from "./components/Feed"
import Signup from "./components/Signup"
import DataComponent from "./components/Error"
import Connections from "./components/Connections"
import Requestpage from "./components/Requestpage"
import ShimmerCard from "./components/ShimmerCard"
import Card from "./components/Card"
function App() {


  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element = {<Body/> }> 

      <Route path="/login" element = {<Login/> } /> 
      <Route path="/*" element = {<DataComponent/> } /> 
      <Route path="/profile/view" element = {<EditProfile/> } /> 
      <Route path="/feed" element = {<Feed/> } /> 
      <Route path="/signup" element = {<Signup/> } />
      <Route path="/connections" element = {<Connections/> } />
      <Route path="/request" element = {<Requestpage/> } />
      <Route path="/shimmer" element = {<ShimmerCard/> } />
      <Route path="/card" element = {<Card/> } />

      </Route>
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
