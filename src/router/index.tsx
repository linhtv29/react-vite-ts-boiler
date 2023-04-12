import { Router, useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";

const AppRoutes = () => {
  const element = useRoutes([...protectedRoutes, ...publicRoutes]);
  return element;
};

export default AppRoutes;
