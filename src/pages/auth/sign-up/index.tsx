import FormInput from "../../../components/ui/input";
import Logo from "../../../components/ui/logo";
import emailIcon from "../../../assets/icons/message.svg";
import passwordIcon from "../../../assets/icons/Lock.svg";
import googleIcon from "../../../assets/icons/google.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

interface RegisterProps {
    username: string,
    password: string,
}

const SignUp = () => {

    const [registerData, setRegisterData] = useState<RegisterProps>({
        username: '',
        password: ''
    });
    const [invalidMessage, setInvalidMessage] = useState('');

    const detectMismatchPassword = (data: string) => {
        if(data !== registerData.password) {
            setInvalidMessage('Password not match');
        } else {
            setInvalidMessage('');
        }
    }

    const handleRegister = async () => {
    }

    return (
        <div id="login__content" className="login__content hide">
            <div className="login__content--inner">
                <Logo />

                <h1 className="login__heading">Sign Up</h1>
                <p className="login__desc">Let’s create your account and  Shop like a pro and save money.</p>

                <form onSubmit={handleRegister} className="form login__form">
                    <FormInput
                        name={'username'}
                        placeholder={'Username'}
                        icon={emailIcon}
                        required
                        getInputData={data => registerData.username = data}
                    />
                    <FormInput 
                        name={'password'}
                        placeholder={'Password'}
                        icon={passwordIcon}
                        required
                        getInputData={data => registerData.password = data}
                    />
                    <FormInput 
                        name={'confirm-password'}
                        placeholder={'Confirm password'}
                        required
                        getInputData={(data) => detectMismatchPassword(data)}
                        // invalidMessage={invalidMessage}
                        icon={passwordIcon}
                    />
                    <div className="form__group form__group--inline">
                        <Link to="#!" className="login__link form__pull-right">Forgot password?</Link>
                    </div>
                    <div className="form__group form__login--cta">
                        <button type='submit' className="btn btn--primary login__btn">Sign Up</button>
                        <a href="#!" className="btn btn--outline login__btn">
                            <img src={googleIcon} alt="Loading" className="btn__icon icon" />
                            Sign in with Gmail
                        </a>
                    </div>
                </form>

                <p className="login__confirm">
                    You have an account yet?
                    <Link to="/login" className="login__link login__confirm-link">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;