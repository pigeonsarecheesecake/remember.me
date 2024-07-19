import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";

const Layout = ({parent, setParent}) => {
    return (
    <div className="">
        <NavigationBar/>
        <div className="flex">
            <SideBar parent={parent} setParent={setParent}/>
            <Outlet />
        </div>
    </div>
    )
}

export default Layout
