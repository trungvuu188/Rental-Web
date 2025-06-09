import { useState } from "react";
import "./style.scss";

interface FormInputProps {
    name: string; 
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
    getInputData?: (data: string) => void;
    required?: boolean;
    icon?: string;
    type?: 'text' | 'email' | 'password';
    invalidMessage?: string;
    disabled?: boolean;
}

const FormInput = (props: FormInputProps) => {
    const {
        name, 
        placeholder, 
        icon, 
        value,
        onChange,
        getInputData, 
        required = false,
        type = 'text',
        invalidMessage,
        disabled = false
    } = props;

    const [localValue, setLocalValue] = useState(value || '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setLocalValue(newValue);
        
        if (onChange) {
            onChange(newValue);
        }
        
        if (getInputData) {
            getInputData(newValue);
        }
    };

    return (
        <div className="form__group">
            <div className="form__group--input">
                <input 
                    required={required} 
                    onChange={handleChange}
                    value={value !== undefined ? value : localValue}
                    className={`form__group--text ${invalidMessage ? 'form__group--text--error' : ''}`}
                    type={type} 
                    name={name} 
                    placeholder={placeholder}
                    disabled={disabled}
                    autoComplete={type === 'password' ? 'current-password' : 'off'}
                />
                {icon && <img src={icon} alt="" className="form__icon" />}
            </div>
            {invalidMessage && <span className="invalid-message">{invalidMessage}</span>}
        </div>
    );
}

export default FormInput;