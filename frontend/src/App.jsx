import { BrowserRouter as Router,Route, Routes,Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import {Toaster} from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext";
import Header from "../src/pages/starterBody/Header"
import Starter from "./pages/starterBody/Starter"



function App() {

  const {authUser} = useAuthContext()

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      
       

        <Routes>
          <Route
            path="/"
            element={<Starter />}
          />
          <Route
            path="/chathome"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/chathome" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/chathome" /> : <SignUp />}
          />
        </Routes>
        <Toaster />
     
    </div>
  );
 
}

export default App


//Starter Code

    // <div className="p-4 h-screen flex items-center justify-center">
    //   <Routes>


    //     <Route
    //       path="/"
    //       element={authUser ? <Home /> : <Navigate to={"/login"} />}
    //     />
    //     <Route
    //       path="/login"
    //       element={authUser ? <Navigate to="/" /> : <Login />}
    //     />
    //     <Route
    //       path="/signup"
    //       element={authUser ? <Navigate to="/" /> : <SignUp />}
    //     />
    //   </Routes>
    //   <Toaster />
    // </div>