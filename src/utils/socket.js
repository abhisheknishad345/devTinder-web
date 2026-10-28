
import io from "socket.io-client";

export const createSocketConnection = () => {
  const SERVER_URL = window.location.origin;

  return io(SERVER_URL, {
    withCredentials: true,
    path: "/socket.io/",
    transports: ["websocket"],
  });
};
