import Conversation from "../models/coversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";


export const sendMessage = async (req,res) =>{
    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })

        if(!conversation){
           conversation = await Conversation.create({
            participants:[senderId,receiverId],
           })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }


//this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);
//socket functionality will go here
        const receiverSocketId = getReceiverSocketId(receiverId)
        if(receiverSocketId){
            //io.to(socketid).emit(message) used to send events to specific client
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }
        res.status(201).json(newMessage);
    } catch (error) {
    console.log("Error in SendMessage controller:",error.message)
    res.status(500).json({error:"Internal Server Error"}) 
    }
}

export const getMessage = async (req,res)=> {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {
                $all:[senderId,userToChatId]},
            
        }).populate("messages"); //not reference but actual messages


        if(!conversation){
          return  res.status(200).json([]);
        }
        const messages = conversation.messages;
       return res.status(200).json(messages);

    } catch (error) {
            console.log("Error in SendMessage controller:",error.message)
   return res.status(500).json({error:"Internal Server Error"}) 
    }
}