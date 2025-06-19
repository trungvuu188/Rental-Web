import FormInput from "../../../components/ui/input";
import Logo from "../../../components/ui/logo";
import emailIcon from "../../../assets/icons/message.svg";
import passwordIcon from "../../../assets/icons/Lock.svg";
import googleIcon from "../../../assets/icons/google.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { registerUser, clearError } from "../../../store/slices/authSlice";
import { RegisterRequest } from "../../../types/auth";
import "./style.scss";

interface SignUpFormData extends RegisterRequest {
    confirmPassword: string;
}

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);

    const [formData, setFormData] = useState<SignUpFormData>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
    });

    const [validationErrors, setValidationErrors] = useState<{
        username?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
    }>({});

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    // Clear errors when component mounts
    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (): boolean => {
        const errors: typeof validationErrors = {};

        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        } else if (formData.username.length < 3) {
            errors.username = 'Username must be at least 3 characters';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const registerData: RegisterRequest = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName || undefined,
            lastName: formData.lastName || undefined,
        };

        try {
            const result = await dispatch(registerUser(registerData));
            if (registerUser.fulfilled.match(result)) {
                navigate('/');
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    const handleInputChange = (field: keyof SignUpFormData) => (value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear validation error when user starts typing
        if (validationErrors[field as keyof typeof validationErrors]) {
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

                <h1 className="login__heading">Sign Up</h1>
                <p className="login__desc">
                    Let's create your account and shop like a pro and save money.
                </p>

                <form onSubmit={handleRegister} className="form login__form">
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
                        value={formData.username}
                        onChange={handleInputChange('username')}
                        invalidMessage={validationErrors.username}
                        required
                        disabled={isLoading}
                    />

                    <FormInput
                        name="email"
                        placeholder="Email"
                        type="email"
                        icon={emailIcon}
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        invalidMessage={validationErrors.email}
                        required
                        disabled={isLoading}
                    />

                    <FormInput
                        name="firstName"
                        placeholder="First Name (Optional)"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange('firstName')}
                        disabled={isLoading}
                    />

                    <FormInput
                        name="lastName"
                        placeholder="Last Name (Optional)"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange('lastName')}
                        disabled={isLoading}
                    />

                    <FormInput
                        name="password"
                        placeholder="Password"
                        type="password"
                        icon={passwordIcon}
                        value={formData.password}
                        onChange={handleInputChange('password')}
                        invalidMessage={validationErrors.password}
                        required
                        disabled={isLoading}
                    />

                    <FormInput
                        name="confirmPassword"
                        placeholder="Confirm password"
                        type="password"
                        icon={passwordIcon}
                        value={formData.confirmPassword}
                        onChange={handleInputChange('confirmPassword')}
                        invalidMessage={validationErrors.confirmPassword}
                        required
                        disabled={isLoading}
                    />

                    <div className="form__group form__login--cta">
                        <button
                            type="submit"
                            className="btn btn--primary login__btn"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creating Account...' : 'Sign Up'}
                        </button>

                        <button type="button" className="btn btn--outline login__btn" disabled={isLoading}>
                            <img src={googleIcon} alt="" className="btn__icon icon" />
                            Sign up with Gmail
                        </button>
                    </div>
                </form>

                <p className="login__confirm">
                    Already have an account?
                    <Link to="/login" className="login__link login__confirm-link">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;