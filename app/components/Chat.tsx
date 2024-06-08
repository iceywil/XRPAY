/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DwqMguhwOni
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

export default function Component() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am the XRP Chatbot. How can I assist you today?",
      sender: "bot",
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (inputValue.trim() !== "") {
      const newMessage = { id: messages.length + 1, text: inputValue, sender: "user" };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      await handleBotResponse(inputValue)
      setInputValue("")
    }
  }

  const handleBotResponse = async (userInput: any) => {
    try {
      const response = await fetch('http://localhost:3000/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userInput })
      });
      const data = await response.json();
      console.log(data);
      
      if (data.Message) {
        const newMessage = { id: messages.length + 2, text: data.Message, sender: "bot" };
        setMessages(prevMessages => [...prevMessages, newMessage]);
      }
    }
    catch (error: any) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#23292F] py-4 px-6">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="XRP Logo" width={40} height={40} className="mr-4" />
          <h1 className="text-white text-lg font-bold">XRP Chatbot</h1>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start mb-4 ${message.sender === "bot" ? "justify-start" : "justify-end self-end"}`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-lg ${message.sender === "bot"
                  ? "bg-gray-200 text-gray-800 rounded-br-none"
                  : "bg-[#23292F] text-white rounded-bl-none"
                }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={async (e: any) => await handleSubmit(e)} className="bg-gray-100 py-4 px-6 flex items-center">
        <Input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 mr-4 px-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#23292F]"
        />
        <Button type="submit" className="bg-[#23292F] text-white px-4 py-2 rounded-lg hover:bg-[#1E2328]">
          Send
        </Button>
      </form>
    </div>
  )
}