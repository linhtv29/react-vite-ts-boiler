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

  useEffect(() => {
    const isAuth = localStorage.getItem("email");
    const currentPath = location.pathname;
    if (!isPublic(currentPath) && !isAuth) {
      if (currentPath.includes("/admin")) {
        return navigate("/admin/login", {
          state: { prePath: location.pathname },
        });
      }
      return navigate("/login", {
        state: { prePath: location.pathname },
      });
    }
  }, [location]);

  return <div>{children}</div>;
};

export default AuthProvider;
