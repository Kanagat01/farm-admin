import { useState } from "react";
import { NavLink, generatePath } from "react-router-dom";
import Input from "../Layout/Input";
import { POST_COMMENTS_ROUTE } from "../../utils/consts";
import { getPicture } from "../../utils/api_connection";

export default function PostForm(props) {
    const isCreateMode = Object.keys(props).length === 0;
    const { postObj } = props;
    const [post, setPost] = useState({
        ...postObj,
    });

    const updateObjectField = (fieldName, value) => {
        setPost((prevPost) => ({
            ...prevPost,
            [fieldName]: value,
        }));
    };
    const inputs_list = [
        {
            label: "Владелец",
            name: "owner_id",
            type: "number",
        },
        {
            label: "Дата создания",
            name: "timestamp",
            type: "date",
        },
        {
            label: "Текст поста",
            name: "post_text",
            type: "textarea",
        },
        {
            label: "Фото",
            name: "picture",
            type: "image",
            value: getPicture(post.picture).url,
        },
        {
            label: "Просмотры",
            name: "views",
            type: "number",
        },
        {
            label: "Лайки",
            name: "likes",
            type: "number",
        },
    ];
    const related_links = [
        {
            route: generatePath(POST_COMMENTS_ROUTE, { post_id: post.id }),
            name: "Комменты",
        },
    ];
    return (
        <form className='row' encType='multipart/form-data'>
            {!isCreateMode ? (
                <div className='table-title my-4'>
                    Информация о посте #{post.id}
                </div>
            ) : (
                ""
            )}
            <div className='info-block'>
                {inputs_list.map((el) => (
                    <Input
                        label={el.label}
                        name={el.name}
                        type={el.type}
                        value={post[el.name]}
                        onChange={
                            el.onChange in el
                                ? el.onChange
                                : (e) =>
                                      updateObjectField(el.name, e.target.value)
                        }
                        radio_inputs={el.radio_inputs}
                    />
                ))}
                {!isCreateMode ? (
                    <>
                        <hr />
                        <div className='buttons-group justify-content-end'>
                            {related_links.map((el) => (
                                <NavLink
                                    to={el.route}
                                    className='btn btn-primary'
                                >
                                    {el.name}
                                </NavLink>
                            ))}
                        </div>
                        <hr />
                        <div className='buttons-group justify-content-end'>
                            <button className='btn btn-secondary'>
                                Отмена
                            </button>
                            <button className='btn btn-success'>
                                Сохранить
                            </button>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </div>
        </form>
    );
}
