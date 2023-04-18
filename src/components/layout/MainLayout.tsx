import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { useState } from "react";

const MainLayout = () => {
  const [isOpenSide, setOpenSide] = useState(true);
  const toggleSideMenu = () => setOpenSide(!isOpenSide);
  return (
    <div className={`${isOpenSide ? "ml-60" : "ml-0"} w-screen md:w-auto transition-all mt-14`}>
      <Navbar toggleSideMenu={toggleSideMenu}></Navbar>
      <SideMenu isOpenSideMenu={isOpenSide}></SideMenu>
      <div className="max-w-6xl px-5 py-6 mx-auto ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
