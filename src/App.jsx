
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Feed from "./components/Feed"
import DataComponent from "./components/Error"
import { BASE_URL } from "./utils/constants"
function App() {


  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element = {<Body/> }> 

      <Route path="/login" element = {<Login/> } /> 
      <Route path="/*" element = {<DataComponent/> } /> 
      <Route path="/profile" element = {<Profile/> } /> 
      <Route path="/feed" element = {<Feed/> } /> 

      </Route>
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
