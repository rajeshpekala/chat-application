import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import usePasswordToggle from "../../hooks/usePasswordToggle";


const Login = () => {

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [passwordInputType, TogglePasswordIcon] = usePasswordToggle();

const {loading,login} = useLogin()

const handleSubmit = async (e) => {
   e.preventDefault();
   await login(username,password)
}

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-white">Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white font-semibold">
                UserName
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="relative">
            <label className="label p-2">
              <span className="text-base label-text text-white font-semibold">
                Password
              </span>
            </label>
            <input
              type={passwordInputType}
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className="absolute cursor-pointer z-10 right-2 top-12">
              {TogglePasswordIcon}
            </span>
          </div>
          <Link
            to="/signup"
            className="text-sm hover :underline text-white hover:text-blue-600 mt-2 inline-block font-semibold"
          >
            {"Don't"} have an account? Signup
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login