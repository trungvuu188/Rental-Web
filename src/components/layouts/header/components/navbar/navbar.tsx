import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const navbarList = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/products',
        title: 'Products'
    },
    {
        path: '/about',
        title: 'About Us'
    },
    {
        path: '/membership',
        title: 'Membership'
    },
    {
        path: '/blog',
        title: 'Blog'
    },
]

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActiveLink = (path: string) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            {/* Mobile menu button */}
            <button 
                className="navbar__mobile-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
            >
                <span className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>

            {/* Navigation list */}
            <ul className={`navbar__list ${isMobileMenuOpen ? 'navbar__list--open' : ''}`}>
                {navbarList.map((item, idx) => (
                    <li key={idx} className="navbar__item">
                        <Link 
                            to={item.path}
                            className={`navbar__link ${isActiveLink(item.path) ? 'navbar__link--active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="navbar__overlay"
                    onClick={closeMobileMenu}
                />
            )}
        </nav>
    )
};

export default Navbar;