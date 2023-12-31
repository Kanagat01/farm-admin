import { useState } from "react";
import { isValidEmail } from "../../utils/filters";

export default function Input(props) {
    const { name, label, type, value, onChange } = props;
    const [isValid, setIsValid] = useState(true);

    if (type === "checkbox") {
        return (
            <label className='form-group checkbox-field row'>
                <div className='col-md-3 d-flex justify-content-end'>
                    <label htmlFor={name}>{label}</label>
                </div>
                <div className='col-md-9 position-relative'>
                    <input
                        type={type}
                        name={name}
                        onChange={onChange}
                        checked={value}
                    />

                    <span className='checkmark'></span>
                </div>
            </label>
        );
    } else if (type === "radio") {
        const { radio_inputs } = props;
        return (
            <div className='form-group input-rounded row d-flex align-items-center'>
                <div className='col-md-3 d-flex justify-content-end'>
                    <label htmlFor={name}>{label}</label>
                </div>
                <div className='col-md-9'>
                    <div className='custom-radio-inputs'>
                        {radio_inputs.map((el) => (
                            <label>
                                <input
                                    type='radio'
                                    name={name}
                                    value={el.value}
                                    checked={el.value === value}
                                    onChange={onChange}
                                />
                                <span>{el.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        );
    } else if (type === "textarea") {
        return (
            <div className='form-group input-rounded row d-flex align-items-center'>
                <div className='col-md-3 d-flex justify-content-end'>
                    <label htmlFor={name}>{label}</label>
                </div>
                <div className='col-md-9'>
                    <textarea
                        name={name}
                        className='form-control'
                        value={value}
                        onChange={onChange}
                    ></textarea>
                </div>
            </div>
        );
    } else if (type === "phone") {
        const isValidPhoneNumber = (phoneNumber) => {
            const phoneRegex = /^\+\d{11}$/;
            return phoneRegex.test(phoneNumber);
        };
        const phoneOnChange = (e) => {
            onChange(e);
            setIsValid(isValidPhoneNumber(e.target.value));
        };

        return (
            <div className='form-group input-rounded row d-flex align-items-center'>
                <div className='col-md-3 d-flex justify-content-end'>
                    <label htmlFor={name}>{label}</label>
                </div>
                <div className='col-md-9'>
                    <input
                        type={type}
                        name={name}
                        className={`form-control ${
                            value ? (isValid ? "is-valid" : "is-invalid") : ""
                        }`}
                        value={value}
                        onChange={phoneOnChange}
                    />
                    <div
                        className='invalid-feedback'
                        style={{ fontSize: "1.4rem" }}
                    >
                        Пожалуйста, введите корректный номер телефона.
                    </div>
                </div>
            </div>
        );
    } else if (type === "image") {
        const handleFileChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                onChange(name, URL.createObjectURL(file));
            }
        };
        return (
            <div className='form-group input-rounded row d-flex align-items-center'>
                <div className='col-md-3 d-flex justify-content-end'>
                    <label htmlFor={name}>{label}</label>
                </div>
                <div className='col-md-9'>
                    <div className='row'>
                        {value ? (
                            <div className='col-3 d-flex align-items-center justify-content-center'>
                                <a href={value} className='photo-link'>
                                    Посмотреть фото
                                </a>
                            </div>
                        ) : (
                            ""
                        )}
                        <div className='col-9 d-flex align-items-center'>
                            <input
                                type='file'
                                name={name}
                                className='form-control'
                                onChange={handleFileChange}
                                accept='image/*'
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (type === "email") {
        const emailOnChange = (e) => {
            onChange(e);
            setIsValid(isValidEmail(e.target.value));
        };
        return (
            <div className='form-group input-rounded row d-flex align-items-center'>
                <div className='col-md-3 d-flex justify-content-end'>
                    <label htmlFor={name}>{label}</label>
                </div>
                <div className='col-md-9'>
                    <input
                        type={type}
                        name={name}
                        className={`form-control ${
                            value ? (isValid ? "is-valid" : "is-invalid") : ""
                        }`}
                        value={value}
                        onChange={emailOnChange}
                    />
                    <div
                        className='invalid-feedback'
                        style={{ fontSize: "1.4rem" }}
                    >
                        Пожалуйста, введите корректный email.
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='form-group input-rounded row d-flex align-items-center'>
            <div className='col-md-3 d-flex justify-content-end'>
                <label htmlFor={name}>{label}</label>
            </div>
            <div className='col-md-9'>
                <input
                    type={type}
                    name={name}
                    className='form-control'
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
