import authHero from "../../assets/img/login/login-intro.png";
import imgNotAvailable from "../../assets/img/img-notfound/image-notavailable.png";
import { Outlet } from "react-router-dom";
import "./AuthLayout.scss";

const AuthLayout = () => {
    return (
        <div className='auth'>
            <div className="auth-inner">
                <div className="auth__hero">
                    <div className="auth__hero--wrapper">
                        <img src={authHero || imgNotAvailable} alt="" className="auth__hero--img" />
                    </div>
                    <div className="auth__hero--title">
                        The best of luxury brand values, high quality products, and innovative services
                    </div>
                </div>
                <div className="auth__content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
};

export default AuthLayout;