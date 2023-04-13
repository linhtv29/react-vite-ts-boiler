import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { publicPaths } from "../router/publicRoutes";

type AuthProviderProps = {
  children: React.ReactNode;
};

const isPublic = (path: string) => publicPaths.includes(path);
const AuthProvider = ({ children }: AuthProviderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  useEffect(() => {
    const isAuth = localStorage.getItem("email");
    if (!isPublic(currentPath) && !isAuth) {
      console.log("TCL: AuthProvider -> currentPath", currentPath);
      return navigate("/login", {
        state: { prePath: location.pathname },
      });
    }
  }, [location]);

  return <div>{children}</div>;
};

export default AuthProvider;
