import React from "react";
import { NavLink, generatePath } from "react-router-dom";
import { USER_ROUTE } from "../../utils/consts";
import { getPosts, getUser } from "../../utils/api_connection";
import { POST_ROUTE } from "../../utils/consts";

export default function PostsList() {
    const columns = [
        "ID",
        "Владелец",
        "Дата создания",
        "Просмотры",
        "Лайки",
        "Комменты",
    ];
    const posts = getPosts();

    return (
        <div className='main'>
            <div className='table-title my-4'>Выберите пост для изменения</div>
            <table className='table table-stretched'>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>
                                <NavLink
                                    to={generatePath(POST_ROUTE, {
                                        post_id: post.id,
                                    })}
                                    className='table-link'
                                >
                                    Пост #{post.id}
                                </NavLink>
                            </td>
                            <td>
                                <NavLink
                                    to={generatePath(USER_ROUTE, {
                                        user_id: post.owner_id,
                                    })}
                                    className='table-link'
                                >
                                    {getUser(post.owner_id).name}
                                </NavLink>
                            </td>
                            <td>{post.timestamp}</td>
                            <td>{post.views}</td>
                            <td>{post.likes}</td>
                            <td>{post.comments.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
