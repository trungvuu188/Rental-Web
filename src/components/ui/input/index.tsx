import "./style.scss";

interface FormInputProps {
    name: string, 
    placeholder: string,
    getInputData: (data: string) => void,
    required: boolean,
    icon: string,
    // invalidMessage: string
}

const FormInput = (props: FormInputProps) => {

    const {name, placeholder, icon, getInputData, required} = props;

    return (
        <div className="form__group">
            <div className="form__group--input">
                <input required={required} onChange={(e) => getInputData(e.target.value)} className="form__group--text" type="text" name={name} placeholder={placeholder} id="" />
                <img src={icon} alt="Loading" className="form__icon" />
            </div>
            {/* {invalidMessage && <span className="invalid-message">{invalidMessage}</span>} */}
        </div>
    );
}

export default FormInput;