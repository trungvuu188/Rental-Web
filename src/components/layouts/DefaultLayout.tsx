import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};

export default DefaultLayout;