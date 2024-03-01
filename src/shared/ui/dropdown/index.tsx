import { FC } from "react";
import { Dropdown } from "react-bootstrap";

type DropdownCategoriesProps = {
  className?: string;
  options: string[];
  selectedOption: string;
  onClick: (option: string) => void;
};

export const DropdownCategories: FC<DropdownCategoriesProps> = ({
  className,
  options,
  selectedOption,
  onClick,
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="primary"
        id="dropdown-basic"
        className={className}
      >
        {selectedOption}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index} onClick={() => onClick(option)}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
