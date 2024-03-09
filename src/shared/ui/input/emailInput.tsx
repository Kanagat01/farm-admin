import { FC, ChangeEvent, useState, InputHTMLAttributes } from "react";

interface EmailInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "type"> {
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  show?: boolean;
  show_feedback?: boolean;
}

export const EmailInput: FC<EmailInputProps> = (props) => {
  const [isValid, setIsValid] = useState(true);

  const emailOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(e.target.value));
    props.onChange(e);
  };

  return (
    <div
      className={
        props.show !== false
          ? "form-group input-rounded row d-flex align-items-center"
          : "d-none"
      }
    >
      <div className="col-md-3 d-flex justify-content-md-end justify-content-start">
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <div className="col-md-9">
        <input
          {...props}
          type="email"
          className={`form-control ${
            props.value ? (isValid ? "is-valid" : "is-invalid") : ""
          }`}
          onChange={emailOnChange}
        />
        {props.show_feedback !== false ? (
          <div className="invalid-feedback" style={{ fontSize: "1.4rem" }}>
            Пожалуйста, введите корректный email.
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
