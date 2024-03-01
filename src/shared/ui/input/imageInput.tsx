import { FC, ChangeEvent, InputHTMLAttributes } from "react";

interface ImageInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string;
  name: string;
  onChange: (name: string, url: string) => void;
  value?: string;
}

export const ImageInput: FC<ImageInputProps> = ({
  label,
  name,
  onChange,
  ...props
}) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      onChange(name, URL.createObjectURL(file));
    }
  };

  return (
    <div className="form-group input-rounded row d-flex align-items-center">
      <div className="col-md-3 d-flex justify-content-md-end justify-content-start">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="col-md-9">
        <div className="row">
          {props.value ? (
            <div className="col-3 d-flex align-items-center justify-content-center">
              <a href={props.value} className="photo-link">
                Посмотреть фото
              </a>
            </div>
          ) : (
            ""
          )}
          <div className="col-9 d-flex align-items-center">
            <input
              type="file"
              className="form-control"
              accept="image/*"
              {...props}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
