import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { useState } from "react";

const LayoutAdmin = () => {
  const [openSide, setOpenSide] = useState(false);
	const toggleSideMenu = () => setOpenSide(!openSide)
  return (
    <div className={`${openSide ? 'ml-60' : 'ml-0'} w-screen md:w-auto`}>
      <Navbar toggleSideMenu={toggleSideMenu}></Navbar>
      <SideMenu isOpenSideMenu={openSide}></SideMenu>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutAdmin;
