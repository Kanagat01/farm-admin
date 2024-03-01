import { FC, InputHTMLAttributes } from "react";

interface CheckboxProps {
  label: string;
  inputProps: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    name: string;
  };
}

export const Checkbox: FC<CheckboxProps> = ({ label, inputProps }) => {
  return (
    <label className="form-group checkbox-field row">
      <div className="col-md-3 d-flex justify-content-md-end justify-content-start">
        <label htmlFor={inputProps.name}>{label}</label>
      </div>
      <div className="col-md-9 d-flex align-items-center position-relative">
        <input type="checkbox" {...inputProps} />
        <span className="checkmark"></span>
      </div>
    </label>
  );
};
