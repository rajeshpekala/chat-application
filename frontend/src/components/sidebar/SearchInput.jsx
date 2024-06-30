import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
import useGetConversations from '../../hooks/useGetConversations'

const SearchInput = () => {
  const [search,setSearch] = useState("")
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = (e) =>{
e.preventDefault()
if(!search) return;
if(search.length <3){
  return toast.error("Please Enter Atleast 3 characters long..")
}

const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
if(conversation){
  setSelectedConversation(conversation)
  setSearch('')

}
else toast.error("No such User Found!!")

  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value = {search}
        onChange={(e)=> setSearch(e.target.value)}
        placeholder="Search..."
        className="input input-bordered rounded-3xl"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;



// ///starter code 
// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-3xl"
//       />
//       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//         <FaSearch />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;