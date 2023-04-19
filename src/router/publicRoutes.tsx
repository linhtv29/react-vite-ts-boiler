import {Login, Register} from "@/features/auth/routes"

export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin/Register",
    element: <Register />,
  },
];

export const publicPaths = [...publicRoutes.map((route) => route.path)];
