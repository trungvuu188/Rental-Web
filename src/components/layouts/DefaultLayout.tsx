import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

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