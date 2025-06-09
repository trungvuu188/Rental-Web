import { Link } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import './style.scss';

const HeaderAction = () => {
    const { user, isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    if (!isAuthenticated) {
        return (
            <div className="header__action">
                <Link to="/login" className="btn btn--outline btn--sm">
                    Sign In
                </Link>
                <Link to="/sign-up" className="btn btn--primary btn--sm">
                    Sign Up
                </Link>
            </div>
        );
    }

    return (
        <div className="header__action">
            <div className="user-info">
                <div className="user-info__avatar">
                    {user?.avatar ? (
                        <img src={user.avatar} alt={user.username} />
                    ) : (
                        <div className="user-info__avatar-placeholder">
                            {user?.firstName?.[0] || user?.username?.[0] || 'U'}
                        </div>
                    )}
                </div>
                <div className="user-info__details">
                    <span className="user-info__name">
                        {user?.firstName && user?.lastName 
                            ? `${user.firstName} ${user.lastName}`
                            : user?.username
                        }
                    </span>
                    <span className="user-info__role">{user?.role}</span>
                </div>
            </div>
            <button 
                onClick={handleLogout}
                className="btn btn--outline btn--sm"
            >
                Logout
            </button>
        </div>
    );
};

export default HeaderAction; 