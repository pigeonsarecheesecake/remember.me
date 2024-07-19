import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";

const Layout = ({activeId}) => {
    return (
    <div className="">
        <NavigationBar/>
        <div className="flex">
            <SideBar activeId={activeId}/>
            <Outlet />
        </div>
    </div>
    )
}

export default Layout
