import { Outlet } from "react-router-dom";
import Navbar from "../container/Navbar/Navbar";
import Footer from "../container/Footer/Footer";

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;