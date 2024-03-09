import { useState, Dispatch, SetStateAction } from "react";
import { DropdownCategories } from "~/shared/ui";

type FilterPrintersProps = {
  setData: Dispatch<SetStateAction<Array<any>>>;
};

export function FilterPrinters({ setData }: FilterPrintersProps) {
  const options = ["Все", "Свободен", "Занято"];
  const [selectedOption, setSelectedOption] = useState("Все");
  const onClick = (option: string) => {
    setSelectedOption(option);
    setData((prevData) => [...prevData]);
  };
  return (
    <DropdownCategories
      options={options}
      selectedOption={selectedOption}
      onClick={onClick}
      className="rounded-btn py-2 mb-4"
    />
  );
}
