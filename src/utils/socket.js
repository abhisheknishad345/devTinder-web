
import io from "socket.io-client";
const SERVER_URL =
  location.hostname === "localhost"
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PRODUCTION_URL;

export const createSocketConnection = () =>{
    
    return io(SERVER_URL)
}