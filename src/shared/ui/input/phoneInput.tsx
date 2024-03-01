import { FC, ChangeEvent, useState, InputHTMLAttributes } from "react";

interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const PhoneInput: FC<PhoneInputProps> = (props) => {
  const [isValid, setIsValid] = useState(true);
  const phoneOnChange = (e: any) => {
    props.onChange(e);
    const phoneRegex = /^\+\d{11}$/;
    setIsValid(phoneRegex.test(e.target.value));
  };

  return (
    <div className="form-group input-rounded row d-flex align-items-center">
      <div className="col-md-3 d-flex justify-content-md-end justify-content-start">
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <div className="col-md-9">
        <input
          {...props}
          type="phone"
          className={`form-control ${
            props.value ? (isValid ? "is-valid" : "is-invalid") : ""
          }`}
          onChange={phoneOnChange}
        />
        <div className="invalid-feedback" style={{ fontSize: "1.4rem" }}>
          Пожалуйста, введите корректный номер телефона.
        </div>
      </div>
    </div>
  );
};
