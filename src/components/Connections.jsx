import axios from 'axios'
import {BASE_URL} from '../utils/constants'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {addConnection} from "../utils/connectionSlice"

const Connections = () => {
    const connection = useSelector((store)=> store.connection)
    // console.log( "Connection",connection);
    const dispatch = useDispatch()
    const fetchConnections = async() =>{

     const res =   await axios.get(BASE_URL+"/user/connections", {withCredentials:true})
        console.log(res?.data?.message);
        // console.log(res?.data?.data);
        dispatch(addConnection(res?.data?.data))
        

    }
useEffect( () =>{
    fetchConnections()
},[])

if (!connection) return;
if (connection.length == 0) return <h2 className='text-center font-semibold text-xl'>No Connection Found</h2>
    
  return (
      <div className='text-center mx-2 mb-25'>
          <h1 className='mb-3 text-center text-2xl my-5 font-semibold'>Total Connections</h1>
          {connection.map((connection)=>{
              const {Fname, Lname, age, gender,about,profileurl} = connection;
              return ( 
                <div className='flex rounded-xl bg-base-300 my-2 p-3 w-1/2 mx-auto'>
                    <div className=''>
                    <img className='w-25 h-25 rounded-full border-2 border-white' src={profileurl} alt="Profile" />
                      
                    </div>
                  <div className='text-left mx-10'>
                  <h2 className='text-xl font-semibold'>{Fname + " " + Lname}</h2>
                { age && gender && <p>{age + ", "+ gender}</p>}
                <p>{about}</p>
                  </div>

                </div>
              )

          })}

    </div>
  )
}

export default Connections