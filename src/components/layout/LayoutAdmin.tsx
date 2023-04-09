import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import SideMenu from "./SideMenu"

const LayoutAdmin = () => {
	return (
		<div>
			<Navbar></Navbar>
			<SideMenu></SideMenu>
			<Outlet></Outlet>
		</div>
	)
}

export default LayoutAdmin