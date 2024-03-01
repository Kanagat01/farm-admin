import { FC, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextArea: FC<TextAreaProps> = (props) => {
  return (
    <div className="form-group input-rounded row d-flex align-items-center">
      <div className="col-md-3 d-flex justify-content-md-end justify-content-start">
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <div className="col-md-9">
        <textarea {...props} className="form-control"></textarea>
      </div>
    </div>
  );
};
