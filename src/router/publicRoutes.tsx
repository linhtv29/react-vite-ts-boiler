import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Login, Register} from "@/features/auth/routes"

// const Login = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const login = () => {
//     localStorage.setItem("user", userName);
//     const prePath = location.state?.prePath;
//     if (prePath) {
//       navigate(`${location.state.prePath}`);
//     } else {
//       navigate("/");
//     }
//   };
//   return (
//     <div className="text-gray-800">
//       <div className="h-10 text-center font-bold">Login</div>
//       <div className="w-[300px] m-auto">
//         <div className="flex items-center justify-between">
//           <label htmlFor="user-name">User:</label>
//           <input
//             onChange={(e) => setUserName(e.target.value)}
//             className="border ml-2"
//             type="text"
//             id="user-name"
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <label htmlFor="password">Password:</label>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             className="border ml-2"
//             type="password"
//             id="password"
//           />
//         </div>
//       </div>
//       <div className="flex items-center justify-center mt-3">
//         <button onClick={() => login()} className="border" type="button">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };
// const Register = () => {
//   return <div className="h-1 text-gray-800">Register</div>;
// };

export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
];

export const publicPaths = [...publicRoutes.map((route) => route.path)];
