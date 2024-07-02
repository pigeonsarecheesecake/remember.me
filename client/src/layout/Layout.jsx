import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";

const Layout = () => {
    return (
    <div className="">
        <NavigationBar/>
        <SideBar/>
        <Outlet />
    </div>
    )
}

export default Layout
