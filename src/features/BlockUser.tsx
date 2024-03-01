import { mdiLock, mdiLockOpen } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

type BlockUserProps = {
  user_id: number;
  is_banned: boolean;
};

export function BlockUser({ user_id, is_banned }: BlockUserProps) {
  const [isBanned, setIsBanned] = useState(is_banned);
  const changeStatus = () => {
    console.log(user_id);
    setIsBanned(!isBanned);
  };
  return (
    <button
      style={{
        background: "none",
        border: "none",
        color: "var(--success)",
      }}
      onClick={changeStatus}
    >
      <Icon path={isBanned ? mdiLockOpen : mdiLock} size={1.5} />
    </button>
  );
}
