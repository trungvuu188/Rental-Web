import "./style.scss";
import searchIcon from "../../../../../assets/icons/Search.svg";
import cartIcon from "../../../../../assets/icons/Buy.svg";
import userIcon from "../../../../../assets/icons/profile.svg";

const Action = () => {

    const handleSearchClick = () => {

    }

    const handleProfileClick = () => {

    } 
    
    const handleCartClick = () => {

    }

    return (
        <div className="action">
            <div 
                className="action__wrapper"
                onClick={handleSearchClick}
            >
                <img src={searchIcon} alt="Search" className="icon action--icon" />
            </div>
            <div 
                className="action__wrapper"
                onClick={handleProfileClick}
            >
                <img src={userIcon} alt="Profile" className="icon" />
            </div>
            <div 
                className="action__wrapper"
                onClick={handleCartClick}
            >
                <img src={cartIcon} alt="Cart" className="icon" />
            </div>
        </div>
    )
};

export default Action;