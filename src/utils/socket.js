
import io from "socket.io-client";
const SERVER_URL = import.meta.env.VITE_PRODUCTION_URL;
// const SERVER_URL = import.meta.env.VITE_DEV_URL;

export const createSocketConnection = () =>{
    return io(SERVER_URL)
}