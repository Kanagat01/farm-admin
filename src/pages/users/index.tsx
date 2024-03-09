import { useState, FC } from "react";

import { UserActivityModal } from "~/widgets";
import { ExportData, Mailing, BlockUser } from "~/features";
import { User, UserHeaders } from "~/entities/user";
import { Table, Search, DropdownCategories } from "~/shared/ui";
import { createResource } from "~/shared/api";
import { dateToString } from "~/shared/lib";

const resource = createResource("/api_admin/get_users/");

const UsersPage: FC = () => {
  const allData = resource.read();
  const [data, setData] = useState(allData);

  const headers = Object.entries(UserHeaders).map(([key, label]) => ({
    label: label,
    key: key,
  }));

  let columns = [...headers.map((header) => header.label)];
  let tableData = [
    ...data.map((obj: User) => {
      return [
        ...headers.map((header) => {
          if (header.key === "subscription_type") {
            let subs_types = {
              PR: { prefix: "premium", label: "Премиум" },
              TE: { prefix: "testing", label: "Тестовый" },
              ST: { prefix: "standart", label: "Стандарт" },
            };
            return (
              <div
                className={`badge badge-${
                  subs_types[obj.subscription_type].prefix
                }`}
              >
                {subs_types[obj.subscription_type].label}
              </div>
            );
          } else if (header.key === "is_banned") {
            return <BlockUser user_id={obj.id} is_banned={obj.is_banned} />;
          } else if (header.key === "activity") {
            return <UserActivityModal user_id={obj.id} />;
          } else if (header.key === "joined_date") {
            return dateToString(obj.joined_date);
          } else {
            // @ts-ignore
            return obj[header.key] || obj[header.key] === 0
              ? // @ts-ignore
                obj[header.key]
              : "Отсутствует";
          }
        }),
      ];
    }),
  ];
  const [searchText, setSearchText] = useState("");

  const filter = {
    selectedOption: "Выберите тип подписки",
    options: ["Все", "Тестовый", "Стандарт", "Премиум"],
  };
  const [filterOption, setFilterOption] = useState(filter.selectedOption);
  const filterData = (optionText: string, inputValue: string) => {
    const SubscriptionTypes = {
      Стандарт: "ST",
      Тестовый: "TE",
      Премиум: "PR",
    };
    if (optionText === "Все" || optionText === "Выберите тип подписки") {
      setData(allData.filter((obj: any) => obj.name.includes(inputValue)));
    } else {
      setData(
        allData.filter(
          (obj: any) =>
            obj.name.includes(inputValue) && // @ts-ignore
            obj.subscription_type === SubscriptionTypes[optionText]
        )
      );
    }
    setFilterOption(optionText);
    setSearchText(inputValue);
  };
  return (
    <>
      <div className="table-title my-4">Информация о пользователях</div>
      <div
        className="d-flex align-items-center my-4 flex-wrap"
        style={{ gap: "1rem" }}
      >
        <Search
          placeholder="Искать по Имени"
          value={searchText}
          onChange={(e) => filterData(filterOption, e.target.value)}
        />
        <DropdownCategories
          options={filter.options}
          selectedOption={filterOption}
          onClick={(optionText: string) => filterData(optionText, searchText)}
          className="rounded-btn py-2"
        />
        <Mailing />
        <ExportData data={data} headers={headers} />
      </div>
      <Table columns={columns} data={tableData} />
    </>
  );
};

export default UsersPage;
