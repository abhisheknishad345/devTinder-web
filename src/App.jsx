
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"
import Feed from "./Feed"
function App() {


  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element = {<Body/> }> 

      <Route path="/login" element = {<Login/> } /> 
      <Route path="/" element = {<Feed/> } /> 
      <Route path="/profile" element = {<Profile/> } /> 

      </Route>
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
