import { Router, useRoutes } from "react-router-dom";
import { userRoutes } from "./userRoutes";
import { publicRoutes } from "./publicRoutes";

const AppRoutes = () => {
  const element = useRoutes([...userRoutes, ...publicRoutes]);
  return element;
};

export default AppRoutes;
