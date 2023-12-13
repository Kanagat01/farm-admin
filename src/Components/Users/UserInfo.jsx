import { useParams } from "react-router-dom";
import { getUser } from "../../utils/api_connection";

import UserForm from "./UserForm";

export default function UserInfo() {
    const { user_id } = useParams();
    let userObj = getUser(parseInt(user_id, 10));
    if (!userObj) {
        return <h1>404 Пользователь не найден</h1>;
    }
    return (
        <div className='main'>
            <UserForm userObj={userObj} />
        </div>
    );
}
