import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import api from "../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();
  
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  // Auto-scroll
  const messagesEndRef = useRef(null);
  const socketRef = useRef(null);

  const fetchMessage = async () => {

    try {
      
    
    let chat = await api.get("/chat/" + targetUserId,
      { withCredentials: true })

    // console.log(chat.data.messages);

    const chatMessages = chat?.data?.messages.map((mesg) => {
      const { senderId, text } = mesg;
      return {
        Fname: senderId?.Fname,
        Lname: senderId?.Lname,
        text,
      };
    });
    setMessages(chatMessages);
   } catch (err) {
    console.log(err);
      
    }
  }

  useEffect(() => {
    fetchMessage()

  }, [])


  // Auto Scroll to bottom function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!userId) return;

    const socket = createSocketConnection();
    socketRef.current = socket;

    socket.emit("joinChat", {
      Fname: user.Fname,
      Lname: user.Lname,
      userId,
      targetUserId,
    });

    socket.on("messageReceived", ({ Fname, Lname, text }) => {
      setMessages((prevMessages) => [...prevMessages, { Fname, Lname, text }]);
      //  console.log(Fname + " :  " + text);
    });

    socket.on("chatError", ({ message }) => {
      // console.error("Chat Error:",message);
      toast.error(message);

  setTimeout(() => {
    navigate("/connections");
  }, 1500);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId, user?.Fname]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    if (socketRef.current) {
      socketRef.current.emit("sendMessage", {
        Fname: user.Fname,
        Lname: user.Lname,
        userId,
        targetUserId,
        text: newMessage,
      });

      setNewMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 p-4">
      <div className="w-full max-w-2xl h-[75vh] border border-white shadow-2xl rounded-2xl flex flex-col overflow-hidden bg-base-100">

        {/* Header */}
        <div className="bg-violet-500 text-primary-content px-5 py-4 flex items-center gap-3 shadow-md">
          <div className="avatar online">
            <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                alt="Target User Avatar"
              />
            </div>
          </div>


          <div>
            <h2 className="font-bold text-lg capitalize">Chat</h2>
            <p className="text-xs opacity-80">Online</p>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-base-200">
          {messages.map((msg, index) => {
            const isMe = user.Fname === msg.Fname;

            return (
              <div
                key={index}
                className={`chat ${isMe ? "chat-end" : "chat-start"}`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        isMe
                          ? "https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                          : "https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                      }
                      alt="avatar"
                    />
                  </div>
                </div>

                <div className="chat-header text-xs opacity-60 mb-1">
                  {isMe ? "You" : `${msg?.Fname} ${msg?.Lname}`}
                </div>

                <div
                  className={`chat-bubble text-white wrap-break max-w-[80%] ${isMe ? " bg-green-700" : "bg-gray-700"
                    }`}
                >
                  {msg.text}
                </div>

                <div className="chat-footer opacity-70 text-[12px] mt-1">
                  {isMe ? "Sent" : "Received"}


                </div>
              </div>
            );
          })}

          {/*Element for Auto-Scroll */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
        <div className="border-t border-base-200 bg-base-100 p-4 flex gap-3 items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="input input-bordered flex-1 focus:outline-none focus:border-primary"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button onClick={sendMessage} className="btn bg-green-500 text-black px-4 text-[16px]">
            SEND
          </button>
        </div>

      </div>
    </div>
  );
};

export default Chat;