
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import EditProfile from "./components/EditProfile"
import Feed from "./components/Feed"
import Signup from "./components/Signup"
import HandleError from "./components/Error"
import Connections from "./components/Connections"
import Requestpage from "./components/Requestpage"
import ShimmerCard from "./components/ShimmerCard"
import Chat from "./components/Chat"
import Message from "./components/Message"
import Delete from "./components/Delete"
import { ToastContainer, toast } from "react-toastify";
function App() {


  return (
    <>
      <BrowserRouter basename="/">
            <ToastContainer />
        <Routes>
          <Route path="/" element={<Body />}>

            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<HandleError />} />
            <Route path="/profile/view" element={<EditProfile />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/request" element={<Requestpage />} />
            <Route path="/shimmer" element={<ShimmerCard />} />
            <Route path="/chat/:targetUserId" element={<Chat />} />
            <Route path="/message" element={<Message />} />
            <Route path="/user/delete" element={<Delete />} />


          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
