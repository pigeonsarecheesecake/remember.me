import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";

const Layout = () => {
    return (
    <div className="">
        <NavigationBar/>
        <div className="flex ">
            <SideBar/>
            <Outlet />
        </div>
    </div>
    )
}

export default Layout
