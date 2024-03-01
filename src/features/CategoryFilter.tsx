import { ReactNode } from "react";
import { DropdownCategories } from "~/shared/ui";

export function CategoryFilter({
  options,
  selectedOption,
  ordersFilter,
}: any): ReactNode {
  return (
    <DropdownCategories
      options={options}
      selectedOption={selectedOption}
      onClick={ordersFilter}
      className="rounded-btn py-2"
    />
  );
}
