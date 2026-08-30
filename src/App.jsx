
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";

import Body from "./components/Body"
import Profile from "./components/Profile"
import EditProfile from "./components/EditProfile"
import Feed from "./components/Feed"
import HandleError from "./components/Error"
import Connections from "./components/Connections"
import Requestpage from "./components/Requestpage"
import ShimmerCard from "./components/ShimmerCard"
import Chat from "./components/Chat"
import Delete from "./components/Delete"
import Auth from "./components/Auth"
import Home from "./components/Home"
import Post from "./components/Post";
function App() {


  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>

            <Route index element={<Home />} />
            <Route path="*" element={<HandleError />} />
            <Route path="/profile/view" element={<EditProfile />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/request" element={<Requestpage />} />
            <Route path="/shimmer" element={<ShimmerCard />} />
            <Route path="/chat/:targetUserId" element={<Chat />} />
            <Route path="/user/delete" element={<Delete />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/post" element={<Post />} />


          </Route>
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          theme="dark"
        />

      </BrowserRouter>

    </>
  )
}

export default App
