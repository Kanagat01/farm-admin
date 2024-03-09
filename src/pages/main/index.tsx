import { Admin, AdminTranslation } from "~/entities";
import { createResource } from "~/shared/api";
import { Input, TextArea } from "~/shared/ui";
import { Revenue } from "~/widgets";

const resource = createResource("/api_admin/get_admin/");
export default function Main() {
  const data: Admin = resource.read().message;
  return (
    <>
      <div className="table-title my-4">Информация о профиле</div>
      <div className="profile-info">
        {Object.entries(data).map(([key, value]) => {
          if (key === "description") {
            return (
              <TextArea
                label={AdminTranslation[key]}
                //@ts-ignore
                value={value}
                disabled={true}
              />
            );
          }
          return (
            <Input
              //@ts-ignore
              label={key === "user" ? "Логин" : AdminTranslation[key]}
              value={
                typeof value === "boolean"
                  ? value
                    ? "Есть"
                    : "Нет"
                  : key === "user"
                  ? //@ts-ignore
                    value.username
                  : value
              }
              disabled={true}
            />
          );
        })}
      </div>
      <Revenue />
    </>
  );
}
