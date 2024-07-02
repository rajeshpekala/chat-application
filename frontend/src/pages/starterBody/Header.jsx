import { useState } from "react";
import Features from "../starterBody/Features";
import { Link } from "react-router-dom";

export const Header = () => {
  const [feature, Setfeature] = useState(false);
  const [bgColor, SetBgColor] = useState("bg-black");
  const [textColor, SetTextColor] = useState("text-white");
  const [op, SetOp] = useState("opacity-85");

  const handlefeature = () => {
    Setfeature(!feature);
    SetBgColor(feature ? "bg-black" : "bg-white");
    SetTextColor(feature ? "text-white" : "text-black");
    SetOp(feature ? "opacity-85" : "opacity-100");
  };

  const elements = [
    {
      id: 1,
      name: "Home",
      path: "/",
      component: "<Body/>",
    },
    {
      id: 2,
      name: "Blog",
      path: "/blog",
      component: "<Body/>",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
      component: "<Body/>",
    },
  ];

  return (
    <div className={`shadow-lg fixed w-full ${op} ${bgColor} ${textColor}`}>
      <ul className=" flex py-6  mx-6 justify-center">
        {elements.map((element) => (
          <li
            key={element.id}
            className=" text-2xl font-bold px-4 mx-4 hover:scale-110 duration-300 hover: cursor-pointer hover: rounded-lg"
          >
            <Link to={element.path}>{element.name}</Link>
          </li>
        ))}
        <li className=" text-2xl font-bold px-5 bg-green-600 rounded-md mr-3 hover: cursor-pointer hover:scale-110 duration-300">
          <Link to="signup">Register</Link>
        </li>
        <button
          className=" text-2xl font-bold px-5  rounded-md"
          onClick={handlefeature}
        >
          Features{feature ? "🔼" : "🔽"}
        </button>
      </ul>
      <div className="flex flex-row">
        {feature && <Features />}
        {feature && <Features />}
        {feature && <Features />}
        {feature && <Features />}
        {feature && <Features />}
      </div>
    </div>
  );
};

export default Header;