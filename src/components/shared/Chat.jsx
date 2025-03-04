import { useState } from "react";
import { Send, MessageSquare, Search, Bell } from "lucide-react";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Rapidly build stunning Web Apps with Frest 🚀", sender: "user", time: "7:20", profile: "/user1.png" },
    { id: 2, text: "Minimum text check, Hide check icon", sender: "other", time: "7:20", profile: "/user2.png" },
    { id: 3, text: "More no. of lines text and showing complete list of features like timestamp + check icon READ", sender: "other", time: "7:20", profile: "/user2.png" },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full bg-pink-100 items-center justify-center">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center">
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col shadow-lg w-full h-full overflow-hidden border border-gray-300">
          {/* Navbar */}
          <div className="flex justify-between items-center bg-white px-6 py-4 shadow-md w-full">
            <div>
              <h2 className="text-lg font-semibold">Welcome Back!</h2>
              <p className="text-sm text-gray-500">Ramzey Nassar</p>
            </div>
            <div className="flex gap-4">
              <Search className="w-6 h-6 text-gray-600" />
              <Bell className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          
          {/* Chat Header */}
          <div className="text-lg font-semibold p-4 bg-red-400 text-white flex justify-between items-center">
            <span>Main Title</span>
            <button onClick={() => setIsOpen(false)} className="text-white text-xl">✖</button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex flex-col flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end max-w-[70%] ${msg.sender === "user" ? "self-start flex-row" : "self-end flex-row-reverse"}`}
              >
                <img src={msg.profile} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                <div className={`p-3 rounded-lg flex flex-col ${msg.sender === "user" ? "bg-red-200" : "bg-gray-200"}`}>
                  <span className="text-sm">{msg.text}</span>
                  <span className="text-xs text-gray-500 mt-1 self-end">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Chat Input */}
          <div className="p-4 bg-white flex items-center border-t border-gray-200">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none bg-gray-100"
            />
            <button className="ml-2 bg-blue-500 text-white p-3 rounded-full flex items-center justify-center">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
