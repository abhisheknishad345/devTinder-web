
import { useState } from "react";


const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello 👋", sender: "other" },
    { id: 2, text: "Hi! How are you?", sender: "me" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: input,
        sender: "me",
      },
    ]);

    setInput("");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md h-[550px] border border-white shadow-3xl rounded-2xl  flex flex-col overflow-hidden">

        {/* Header */}

        <div className="bg-indigo-600 text-white px-5 py-4 flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" />
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg">Virat Kohli</h2>
            <p className="text-sm opacity-80">Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-200">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat ${msg.sender === "me" ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      msg.sender === "me"
                        ? "https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                        : "https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                    }
                    alt="avatar"
                  />
                </div>
              </div>

              <div className="chat-header">
                {msg.sender === "me" ? "You" : "Virat Kohli"}
              </div>

              <div
                className={`chat-bubble ${msg.sender === "me"
                  ? "chat-bubble-primary"
                  : "chat-bubble-secondary"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}


        <div className="border-t bg-base-100 p-4 flex gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="input input-bordered flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            className="btn btn-primary"
          >
            Send
          </button>
        </div>

      </div>

    </div>
  );
};

export default Chat;