import React from 'react'
import { getUser } from '../../utils/api_connection';

export default function UserActions(user_id) {
    // const user = getUser(user_id)
    const user = getUser(2)

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className="main">
            <div class='table-title '>
                Список действии пользователя: {user.name}
            </div>
            <div class='table-title d-flex'>
                Тип подписки  |
                <div class='text-center'>
                    <div
                        className={
                            user.subscription_type === "premium"
                                ? "badge badge-premium"
                                : "badge badge-standart"
                        }
                    >
                        {user.subscription_type === "premium"
                            ? "Премиум"
                            : "Стандарт"}
                    </div>
                </div>
            </div>

        </div>
    );
}

