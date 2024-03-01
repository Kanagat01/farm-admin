import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  show?: boolean;
}

export function Input(props: InputProps) {
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
        <input {...props} className="form-control" />
      </div>
    </div>
  );
}
