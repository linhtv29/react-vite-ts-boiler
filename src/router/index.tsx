import { Router, useRoutes } from "react-router-dom";
import { userRoutes } from "./userRoutes";
import { publicRoutes } from "./publicRoutes";
import { adminRoutes } from "./adminRoutes";

const AppRoutes = () => {
  const element = useRoutes([...userRoutes, ...publicRoutes, ...adminRoutes]);
  return element;
};

export default AppRoutes;
