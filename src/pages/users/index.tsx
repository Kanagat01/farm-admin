import { useState, FC } from "react";

import { UserActivityModal } from "~/widgets";
import { ExportData, Mailing, BlockUser } from "~/features";
import { User, UserHeaders } from "~/entities/user";
import { Table, Search, DropdownCategories } from "~/shared/ui";
import { createResource } from "~/shared/api";
import { dateToString } from "~/shared/lib";

const resource = createResource("/api_admin/get_users/");
const surveyResource = createResource("/api_admin/get_survey_data/");

const UsersPage: FC = () => {
  const surveyData: any[][] = surveyResource.read().message;
  const allData = resource.read();

  const [data, setData] = useState(allData);

  let tableData = [
    ...data.map((obj: User) => {
      return [
        ...Object.keys(UserHeaders).map((field_name) => {
          if (field_name === "subscription_type") {
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
          } else if (field_name === "is_banned") {
            return <BlockUser user_id={obj.id} is_banned={obj.is_banned} />;
          } else if (field_name === "activity") {
            return <UserActivityModal user_id={obj.id} />;
          } else if (field_name === "joined_date") {
            return dateToString(obj.joined_date);
          } else {
            // @ts-ignore
            return obj[field_name] || obj[field_name] === 0
              ? // @ts-ignore
                obj[field_name]
              : "Отсутствует";
          }
        }),
      ];
    }),
  ];
  const exportUserData = data.map((obj: User) => {
    return [
      ...Object.keys(UserHeaders)
        .filter((el) => el !== "activity")
        .map((field_name) => {
          if (field_name === "subscription_type") {
            return obj.subscription_type === "PR"
              ? "Премиум"
              : obj.subscription_type === "ST"
              ? "Стандарт"
              : "Тестовый";
          } else if (field_name === "is_banned") {
            return obj.is_banned ? "Заблокирован" : "Активен";
          } else if (field_name === "joined_date") {
            return dateToString(obj.joined_date);
          } else {
            // @ts-ignore
            return obj[field_name] || obj[field_name] === 0
              ? // @ts-ignore
                obj[field_name]
              : "Отсутствует";
          }
        }),
    ];
  });

  const [searchText, setSearchText] = useState("");

  const filter = {
    selectedOption: "Выберите тип подписки",
    options: ["Все", "Тестовый", "Стандарт", "Премиум"],
  };
  const [filterOption, setFilterOption] = useState(filter.selectedOption);
  const filterData = (optionText: string, inputValue: string) => {
    inputValue = inputValue.toLowerCase();
    const SubscriptionTypes = {
      Стандарт: "ST",
      Тестовый: "TE",
      Премиум: "PR",
    };
    let newData = allData.filter((obj: User) => {
      if (!isNaN(Number(inputValue)) && inputValue != "") {
        return obj.id === Number(inputValue);
      }
      return obj.name.toLowerCase().includes(inputValue);
    });
    if (!["Все", "Выберите тип подписки"].includes(optionText)) {
      newData = newData.filter(
        (
          obj: User // @ts-ignore
        ) => obj.subscription_type === SubscriptionTypes[optionText]
      );
    }
    setData(newData);
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
          placeholder="Искать по ID или Имени"
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
        <ExportData
          data={exportUserData}
          headers={Object.values(UserHeaders).filter(
            (el) => el !== "Активность"
          )}
          text="Экспортировать"
        />
        <ExportData
          data={surveyData.slice(1)}
          headers={surveyData[0]}
          text="Результаты опроса"
        />
      </div>
      <Table columns={Object.values(UserHeaders)} data={tableData} />
    </>
  );
};

export default UsersPage;
