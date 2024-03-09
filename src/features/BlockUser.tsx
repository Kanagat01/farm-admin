import { mdiLock, mdiLockOpen } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import { apiInstance } from "~/shared/api";

type BlockUserProps = {
  user_id: number;
  is_banned: boolean;
};

export function BlockUser({ user_id, is_banned }: BlockUserProps) {
  const [isBanned, setIsBanned] = useState(is_banned);
  const changeStatus = () => {
    apiInstance
      .post("api_admin/set_user_status/", {
        user_profile_id: user_id,
        blocked: !isBanned,
      })
      .then((response) => {
        if (response.status === 200) {
          setIsBanned(!isBanned);
        }
      });
  };
  return (
    <button
      style={{
        background: "none",
        border: "none",
        color: isBanned ? "var(--success)" : "var(--outline-danger)",
      }}
      onClick={changeStatus}
    >
      <Icon path={isBanned ? mdiLock : mdiLockOpen} size={1.5} />
    </button>
  );
}
