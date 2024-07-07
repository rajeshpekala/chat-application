import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";


const Signup = () => {

  const [inputs,SetInputs] = useState({
    fullName: "",
    username : '',
    password : '',
    confirmPassword: "",
    gender: ""
  })

  const {loading,signup} = useSignUp()

  const handleSubmit = async (e)=>{
   e.preventDefault();
   await signup(inputs)
  }

  const handleCheckbox = (gender) =>{
    SetInputs({...inputs,gender})
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-white">
          SignUp
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white font-semibold">
                Full Name
              </span>
            </label>
            <input
              type="text"
              value={inputs.fullName}
              onChange={(e) =>
                SetInputs({ ...inputs, fullName: e.target.value })
              }
              placeholder="Enter your FullName here.."
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white font-semibold">
                UserName
              </span>
            </label>
            <input
              type="text"
              value={inputs.username}
              onChange={(e) =>
                SetInputs({ ...inputs, username: e.target.value })
              }
              placeholder="Enter your UserName here.."
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              value={inputs.password}
              onChange={(e) =>
                SetInputs({ ...inputs, password: e.target.value })
              }
              placeholder="Enter a password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white font-semibold">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                SetInputs({ ...inputs, confirmPassword: e.target.value })
              }
              placeholder="Enter the password again to confirm"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckBox
            onCheckboxChange={handleCheckbox}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover :underline text-white   inline-block font-semibold"
          >
            Already have an account?{" "}
            <span className="text-xl font-bold underline  hover:text-violet-600">
              Login
            </span>
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Signup"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup



// Starter code for Signup


// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
//         <h1 className="text-3xl font-semibold text-center text-white">
//           SignUp
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-white">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Rajesh Patel"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-white">UserName</span>
//             </label>
//             <input
//               type="text"
//               placeholder="prem143"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-white">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter a password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-white">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter the password again to confirm"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
// <GenderCheckBox />

//           <a
//             href="#"
//             className="text-sm hover :underline text-white hover:text-blue-600  inline-block"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">SignUp</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup