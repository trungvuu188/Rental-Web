import Logo from "../../ui/logo";
import paypalIcon from "../../../assets/icons/paypal.svg";
import visaIcon from "../../../assets/icons/visa.svg";
import masterCardIcon from "../../../assets/icons/mastercard.svg";
import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__top--inner">
                        <div className="row row-cols-4">
                            <div className="col">
                                <div className="footer__column">
                                    <h3 className="footer__title">About Us</h3>

                                </div>
                            </div>
                            <div className="col">
                                <div className="footer__column">
                                    <h3 className="footer__title">Customer Support</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer__column">
                                    <h3 className="footer__title">Links</h3>
                                    <ul className="footer__column--list">
                                        <li className="footer__column--item">
                                            <Link to={"/home"}>Home</Link>
                                        </li>
                                        <li className="footer__column--item">
                                            <Link to={"/about"}>About us</Link>
                                        </li>
                                        <li className="footer__column--item">
                                            <Link to={"/products"}>Products</Link>
                                        </li>
                                        <li className="footer__column--item">
                                            <Link to={"/membership"}>Membership</Link>
                                        </li>
                                        <li className="footer__column--item">
                                            <Link to={"/blog"}>Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer__column">
                                    <h3 className="footer__title">Policy</h3>
                                    <ul className="footer__column--list">
                                        <li className="footer__column--item">
                                            First Policy
                                        </li>
                                        <li className="footer__column--item">
                                            Second Policy
                                        </li>
                                        <li className="footer__column--item">
                                            Third Policy
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom--inner">
                        <Logo />
                        <ul className="footer__list">
                            <li className="footer__list--item">
                                <img src={paypalIcon} alt="Paypal" />
                            </li>
                            <li className="footer__list--item">
                                <img src={visaIcon} alt="Visa" />
                            </li>
                            <li className="footer__list--item">
                                <img src={masterCardIcon} alt="Master Card" />
                            </li>
                        </ul>
                        <span className="footer__text">Copyright © 2022 UIHUT All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;