import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";


const Layout = () => {
    return (
    <div className="">
        <NavigationBar/>
        <Outlet />
    </div>
    )
}

export default Layout
