import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { LoginRequest } from "../../../types";
import { clearError, loginUser } from "../../../store/slices/authSlice";
import "./LoginSignUp.css";

const LoginSignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, error, isAuthenticated, user } = useSelector((state: RootState) => state.auth);
    const [activeTab, setActiveTab] = useState("tabButton1");
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
            let redirectTo = user.role === 'admin' ? '/admin' : '/';
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

    const handleTab = (tab: any) => {
        setActiveTab(tab);
    };

    // const handleLogin = (e: any) => {
    //   e.preventDefault();
    //   return navigate('/'); 
    // };

    const handleRegister = (e: any) => {
        e.preventDefault();
        return navigate('/');
    }

    return (
        <>
            <div className="loginSignUpSection">
                <div className="loginSignUpContainer">
                    <div className="loginSignUpTabs">
                        <p
                            onClick={() => handleTab("tabButton1")}
                            className={activeTab === "tabButton1" ? "active" : ""}
                        >
                            Login
                        </p>
                        <p
                            onClick={() => handleTab("tabButton2")}
                            className={activeTab === "tabButton2" ? "active" : ""}
                        >
                            Register
                        </p>
                    </div>
                    <div className="loginSignUpTabsContent">
                        {/* tab1 */}

                        {activeTab === "tabButton1" && (
                            <div className="loginSignUpTabsContentLogin">
                                <form onSubmit={handleLogin}>
                                    <input name="username" onChange={(e) => handleInputChange('username')(e.target.value)} type="email" placeholder="Email address *" required />
                                    <input name="password" onChange={(e) => handleInputChange('password')(e.target.value)} type="password" placeholder="Password *" required />
                                    <div className="loginSignUpForgetPass">
                                        <label>
                                            <input type="checkbox" className="brandRadio" />
                                            <p>Remember me</p>
                                        </label>
                                        <p>
                                            <Link to="/resetPassword">Lost password?</Link>
                                        </p>
                                    </div>
                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                    >{isLoading ? 'Signing In...' : 'Sign In'}</button>
                                </form>
                                <div className="loginSignUpTabsContentLoginText">
                                    <p>
                                        No account yet?{" "}
                                        <span onClick={() => handleTab("tabButton2")}>
                                            Create Account
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Tab2 */}

                        {activeTab === "tabButton2" && (
                            <div className="loginSignUpTabsContentRegister">
                                <form onSubmit={handleRegister}>
                                    <input type="text" placeholder="Username *" required />
                                    <input type="email" placeholder="Email address *" required />
                                    <input type="password" placeholder="Password *" required />
                                    <p>
                                        Your personal data will be used to support your experience
                                        throughout this website, to manage access to your account,
                                        and for other purposes described in our
                                        <Link
                                            to="/terms"
                                            style={{ textDecoration: "none", color: "#c32929" }}
                                        >
                                            {" "}
                                            privacy policy
                                        </Link>
                                        .
                                    </p>
                                    <button type="submit">Register</button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginSignUp;
