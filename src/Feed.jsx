
import { useSelector } from "react-redux";

const Feed = () =>{
const user = useSelector((state) => state.user);

  if (!user) return <h2 className="m-2 text-xl font-semibold">Please login ⚠️</h2>;

    return <div className="">
        <h1 className="px-2 bg-white text-[20px] text-center text-black font-semibold ">This is your feed page</h1>
        <h1 className="px-2">Welcome, {user?.Fname } {user?.Lname}</h1>
      <p className="px-2">Email: {user?.emailId}</p>
      <p className="px-2">About: {user?.about}</p>
      <h2 className="px-2">Skills:
       
          {user?.skills.map((skill, index) =>(
            <span key={index} className="">  {skill}</span>
         
          ))}
        </h2>
    </div>

}

export default Feed;