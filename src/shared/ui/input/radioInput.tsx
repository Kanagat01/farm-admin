import { ChangeEvent, FC, InputHTMLAttributes } from "react";

type RadioOption = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> & {
  label: string;
};

interface RadioInputProps {
  name: string;
  label: string;
  value: string | number;
  radio_inputs: RadioOption[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInput: FC<RadioInputProps> = ({
  name,
  label,
  value,
  onChange,
  radio_inputs,
}) => {
  return (
    <div className="form-group input-rounded row d-flex align-items-center">
      <div className="col-md-3 d-flex justify-content-md-end justify-content-start">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="col-md-9">
        <div className="custom-radio-inputs">
          {radio_inputs.map((radio: RadioOption, index: number) => (
            <label key={index}>
              <input
                type="radio"
                onChange={onChange}
                checked={radio.value === value}
                {...radio}
              />
              <span>{radio.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
