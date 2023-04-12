import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { useState } from "react";

const LayoutAdmin = () => {
  const [isOpenSide, setOpenSide] = useState(false);
  const toggleSideMenu = () => setOpenSide(!isOpenSide);
  return (
    <div className={`${isOpenSide ? "ml-60" : "ml-0"} w-screen md:w-auto transition-all mt-14`}>
      <Navbar toggleSideMenu={toggleSideMenu}></Navbar>
      <SideMenu isOpenSideMenu={isOpenSide}></SideMenu>
      <div className="max-w-4xl px-5 mx-auto ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutAdmin;
