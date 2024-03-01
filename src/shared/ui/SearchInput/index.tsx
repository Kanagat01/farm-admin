import { InputHTMLAttributes } from "react";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

type SearchProps = InputHTMLAttributes<HTMLInputElement>;

export const Search: React.FC<SearchProps> = (props) => {
  return (
    <div className="search-box">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="inlineFormInputGroup"
          autoComplete="off"
          {...props}
        />
        <button className="btn btn-primary rounded-btn d-inline-flex align-items-center justify-content-center">
          <Icon path={mdiMagnify} size={1.5} />
        </button>
      </div>
    </div>
  );
};
