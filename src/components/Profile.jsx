
import { useSelector } from "react-redux";

const Profile = () =>{
const user = useSelector((state) => state.user);

  if (!user) return <h2 className="p-1 m-2 text-2xl font-bold text-center text-red-400">Please login ⚠️</h2>;

    return <div className="">
        <h1 className="px-2 bg-white text-[25px] text-center text-black font-semibold">This is your Profile page</h1>
        <img src={user.profileurl} alt="Iamge" className="border rounded-2xl w-45 size-auto my-3 mx-2 " />
        <h1 className="px-5 bg-white text-blue-700 w-fit font-semibold rounded-2xl my-2">Welcome, {user?.Fname } {user?.Lname}</h1>
      <p className="px-2">Email: {user?.emailId}</p>
      <p className="px-2">About: {user?.about}</p>
      <h2 className="px-2">Skills:
       
          {user?.skills.map((skill, index) =>(
            <span key={index} className="">  {skill}</span>
         
          ))}
        </h2>
    </div>

}

export default Profile;