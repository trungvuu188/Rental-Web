import FormInput from "../../../components/ui/input";
import emailIcon from "../../../assets/icons/message.svg";
import passwordIcon from "../../../assets/icons/Lock.svg";
import googleIcon from "../../../assets/icons/google.svg";
import Logo from "../../../components/ui/logo";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { loginUser, clearError } from "../../../store/slices/authSlice";
import { LoginRequest } from "../../../types/auth";
import "./style.scss";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, error, isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    const [loginData, setLoginData] = useState<LoginRequest>({ 
        username: '', 
        password: '' 
    });
    const [validationErrors, setValidationErrors] = useState<{
        username?: string;
        password?: string;
    }>({});

    // Redirect if already authenticated with role-based navigation
    useEffect(() => {
        if (isAuthenticated && user) {
            const redirectTo = user.role === 'admin' ? '/admin' : '/';
            navigate(redirectTo);
        }
    }, [isAuthenticated, user, navigate]);

    // Clear errors when component mounts
    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);

    const validateForm = (): boolean => {
        const errors: typeof validationErrors = {};

        if (!loginData.username.trim()) {
            errors.username = 'Username is required';
        }

        if (!loginData.password) {
            errors.password = 'Password is required';
        } else if (loginData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        try {
            const result = await dispatch(loginUser(loginData));
            if (loginUser.fulfilled.match(result)) {
                // Let the useEffect handle navigation based on user role
                // No need to navigate here as useEffect will handle it
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleInputChange = (field: keyof LoginRequest) => (value: string) => {
        setLoginData(prev => ({
            ...prev,
            [field]: value
        }));
        
        // Clear validation error when user starts typing
        if (validationErrors[field]) {
            setValidationErrors(prev => ({
                ...prev,
                [field]: undefined
            }));
        }
    };

    return (
        <div id="login__content" className="login__content">
            <div className="login__content--inner">
                <Logo />
                <h1 className="login__heading">Hello Again!</h1>
                <p className="login__desc">
                    Welcome back to sign in. As a returning customer, you have access to your previously saved all information.
                </p>

                <form onSubmit={handleLogin} className="form login__form">
                    {error && (
                        <div className="form__error">
                            {error}
                        </div>
                    )}
                    
                    <FormInput 
                        name="username"
                        placeholder="Username"
                        type="text"
                        icon={emailIcon}
                        value={loginData.username}
                        onChange={handleInputChange('username')}
                        invalidMessage={validationErrors.username}
                        required
                        disabled={isLoading}
                    />
                    
                    <FormInput 
                        name="password"
                        placeholder="Password"
                        type="password"
                        icon={passwordIcon}
                        value={loginData.password}
                        onChange={handleInputChange('password')}
                        invalidMessage={validationErrors.password}
                        required
                        disabled={isLoading}
                    />
                    
                    <div className="form__group form__group--inline">
                        <Link to="/forgot-password" className="login__link form__pull-right">
                            Forgot password?
                        </Link>
                    </div>
                    
                    <div className="form__group form__login--cta">
                        <button 
                            type="submit" 
                            className="btn btn--primary login__btn"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                        
                        <button type="button" className="btn btn--outline login__btn" disabled={isLoading}>
                            <img src={googleIcon} alt="" className="btn__icon icon" />
                            Sign in with Gmail
                        </button>
                    </div>
                </form>

                <p className="login__confirm">
                    Don't have an account yet?
                    <Link to="/sign-up" className="login__link login__confirm-link">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;