import Logo from "../../ui/logo";
import Action from "./components/action/action";
import Navbar from "./components/navbar/navbar";
import "./style.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Logo />
                    <Navbar />
                    <Action />
                </div>
            </div>
        </header>
    )
};

export default Header;