import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import searchIcon from "../../../../../assets/icons/Search.svg";
import cartIcon from "../../../../../assets/icons/Buy.svg";
import userIcon from "../../../../../assets/icons/profile.svg";

const Action = () => {
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    }

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
            setIsSearchOpen(false);
        }
    }

    const handleProfileClick = () => {
        // Check if user is logged in (you can implement this based on your auth state)
        const isLoggedIn = false; // Replace with actual auth check
        
        if (isLoggedIn) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
    } 
    
    const handleCartClick = () => {
        navigate('/cart');
    }

    return (
        <div className="action">
            {/* Search */}
            <div className="action__search">
                <button 
                    className="action__wrapper action__search-toggle"
                    onClick={handleSearchClick}
                    aria-label="Toggle search"
                >
                    <img src={searchIcon} alt="Search" className="icon action__icon" />
                </button>
                
                {isSearchOpen && (
                    <form 
                        className="action__search-form"
                        onSubmit={handleSearchSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="action__search-input"
                            autoFocus
                        />
                        <button 
                            type="submit"
                            className="action__search-submit"
                            aria-label="Search"
                        >
                            <img src={searchIcon} alt="Search" className="icon" />
                        </button>
                    </form>
                )}
            </div>

            {/* Profile */}
            <button 
                className="action__wrapper"
                onClick={handleProfileClick}
                aria-label="Profile"
            >
                <img src={userIcon} alt="Profile" className="icon action__icon" />
            </button>

            {/* Cart */}
            <button 
                className="action__wrapper action__cart"
                onClick={handleCartClick}
                aria-label="Shopping cart"
            >
                <img src={cartIcon} alt="Cart" className="icon action__icon" />
                {/* Cart badge - you can implement cart count here */}
                <span className="action__cart-badge">0</span>
            </button>
        </div>
    )
};

export default Action;