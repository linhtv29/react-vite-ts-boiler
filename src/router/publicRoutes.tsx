import { useLocation } from "react-router-dom";

const Login = () => {
	const location = useLocation();
	console.log("TCL: Login -> location", location)
  return <div className="h-1 text-gray-800">Login</div>;
};
const Register = () => {
  return <div className="h-1 text-gray-800">Register</div>;
};

export const publicRoutes = [
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/Register',
		element: <Register />
	},
]

export const publicPaths = [...publicRoutes.map(route => route.path)]