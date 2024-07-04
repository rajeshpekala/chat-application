import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";


const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? "chat-end" : "chat-start"
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleBgColour = fromMe ? "bg-blue-500" :"";
  const formattedTime =extractTime(message.createdAt)
  const shakeClass = message.shouldShake ? "shake" : ""
  return (
    <div className= {`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-12">
          <img
          className=""
            alt="Bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white pb-2 ${shakeClass}  ${bubbleBgColour}`}>
       {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs text-white flex gap-1 items-center ">{formattedTime}</div>
    </div>
  );
}

export default Message