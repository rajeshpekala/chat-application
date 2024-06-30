import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation"


const Conversations = () => {
 const {loading,conversations } = useGetConversations()
 
 return (
    <div className="py-2 flex flex-col overflow-auto">
    {conversations.map( (conversation,idx) =>
<Conversation key ={conversation._id}
conversation = {conversation}
lastIndex = {idx === conversation.length - 1} />
    )}
    </div>
  );
}

export default Conversations


// Starter Code 

// import Conversation from "./Conversation"


// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// }

// export default Conversations