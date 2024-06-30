import { useState } from "react"
import { BiSend } from "react-icons/bi"
import useSendMessage from "../../hooks/useSendMessage"


const MessageInput = () => {
  const [message,setMessage] = useState("")
const {loading,sendMessage} = useSendMessage()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return;
    await sendMessage(message)
    setMessage("")
  }
  return (
   
    <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type= "text"
            placeholder="Send a Message"
            value = {message}
            onChange={(e)=> setMessage(e.target.value)}
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
            />
            <button type = 'submit' className="absolute inset-y-0 right-0 flex items-center pe-3">
                {loading?<div className ="loading loading-spinner"></div>:<BiSend/>}
            </button>
        </div>

    </form>
  )
}

export default MessageInput