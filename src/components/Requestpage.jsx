import axios from "axios"
import {BASE_URL} from "../utils/constants"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {addRequest, removeRequest} from "../utils/requestSlice"


const Requestpage = () => {
    const dispatch = useDispatch()
    const request = useSelector((store)=> store.request)

    const reviewRequest = async(status, _id)=>{
        try {
        await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {}, {withCredentials:true} )
        dispatch(removeRequest(_id))
            
        } catch (err) {
            console.error(err);
            
        }
    }

    const fetchRequest = async() =>{
    try {
        const res  = await axios.get(BASE_URL + "/user/requests/received", 
        {withCredentials:true})
        console.log(res?.data?.data);
        dispatch(addRequest(res?.data?.data))
    
        
    } catch (err) {
        console.error(err);
        
    }
}
    
    useEffect(() =>{
        fetchRequest()
    },[])

    if(!request) return;

    if(request.length == 0){
        return <h1 className="text-center text-xl font-semibold">No Request Found</h1>
    }


  return (
    <div className="px-2">

        <h2 className='text-center font-semibold text-xl'>Total Requests</h2>
        
           { request.map((requests) =>{
            const {_id,Fname, Lname,age,gender,profileurl,about} = requests.fromUserId;
            return (
                <div className='flex justify-around items-center rounded-xl bg-base-300 my-2 p-3 w-1/2 mx-auto'>

                    <div className=''>
                    <img className='w-30 h-30 rounded-full border-2 border-white' src={profileurl} alt="Profile" />
                    </div>

                  <div className='text-left mx-4'>
                  <h2 className='text-xl font-semibold'>{Fname + " " + Lname}</h2>
                { age && gender && <p>{age + ", "+ gender}</p>}
                <p>{about}</p>
                  </div>
                   
                <div>
                </div>
            <button className="btn btn-primary text-[15px] mx-2"
           onClick={()=> reviewRequest("rejected", requests._id)} >Reject</button>
              <button className='btn btn-secondary text-[15px]'
              onClick={()=> reviewRequest("accepted", requests._id)}>Accept</button>
                    
                   

                </div>
            )
            })}

    </div>
  )
}

export default Requestpage