import { Router, useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protectedRoutes";

const AppRoutes = () => {
  const routes = protectedRoutes;
  const element = useRoutes([...routes]);
  return element;
};

export default AppRoutes;
