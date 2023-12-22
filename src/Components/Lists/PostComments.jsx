import { useParams, NavLink, generatePath } from "react-router-dom";
import { USER_ROUTE } from "../../utils/consts";
import { getUser, getComments } from "../../utils/api_connection";
import { truncateString } from "../../utils/filters";

export default function PostComments() {
    const { post_id } = useParams();
    const columns = ["ID", "Пользователь", "Текст"];
    let comments = getComments(post_id);
    return (
        <div className='main'>
            <div className='d-flex align-items-center'>
                <div className='table-title my-4'>
                    Комментарии к посту #{post_id}. Выберите комментарий для
                    изменения
                </div>
            </div>
            <table className='table table-stretched'>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {comments.map((el) => (
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>
                                <NavLink
                                    to={generatePath(USER_ROUTE, {
                                        user_id: el.comment_owner,
                                    })}
                                    className='table-link'
                                >
                                    {getUser(el.comment_owner).name}
                                </NavLink>
                            </td>
                            <td>{truncateString(el.text)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
