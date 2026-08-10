
import { useEffect, useState } from "react";

function Message() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [received, setReceived] = useState([]);

  useEffect(() => {
    // Connect to WebSocket server
    const ws = new WebSocket("ws://localhost:3000");

    ws.onopen = () => {
      console.log("Connected to server");
    };

    ws.onmessage = (event) => {
      console.log("Received:", event.data);

      setReceived((prev) => [...prev, event.data]);
    };

    ws.onclose = () => {
      console.log("Connection closed");
    };

    ws.onerror = (err) => {
      console.log("WebSocket Error:", err);
    };

    setSocket(ws);

    // Cleanup
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
      setMessage("");
    } else {
      console.log("Socket is not connected");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>WebSocket Demo</h2>

      <input
        type="text"
        value={message}
        placeholder="Type message..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>

      <hr />

      <h3>Messages</h3>

      {received.map((msg, index) => (
        <p key={index}> {msg} </p>
      ))}
    </div>
  );
}

export default Message;