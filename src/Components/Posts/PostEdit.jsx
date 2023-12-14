import React, { useState } from "react";
import { getPost } from "../../utils/api_connection";
import { useParams } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiThumbUp, mdiCommentTextMultiple, mdiShareAll, mdiAccountEye } from '@mdi/js';
import { NavLink } from "react-router-dom";
import { POST_COMMENTS_ROUTE, POST_LIKES_ROUTE, POST_REPOSTS_ROUTE, POST_VIEWS_ROUTE } from "../../utils/consts";

export default function PostEdit() {
    const { post_id } = useParams();
    let post = getPost(parseInt(post_id, 10));

    const [editedName, setEditedName] = useState(post.name);
    const [editedDescription, setEditedDescription] = useState(post.description);

    const handleNameChange = (event) => {
        setEditedName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setEditedDescription(event.target.value);
    };

    const handleSave = () => {
        console.log("Сохранено: Название -", editedName, "Описание -", editedDescription);
    };

    return(
        <div className='main'>
            <form className='row g-3 needs-validation p-3' noValidate=''>
                <div class='table-title '>
                    Редактирование поста | ID: {post.id}
                </div>
                <div class='table-title'>
                    Название поста: <input value={editedName} onChange={handleNameChange} />
                </div>
                <div className="p-3 fs-3">
                    <div className='col-md-9'>
                        <textarea
                            name='description'
                            class='form-control border'
                            rows={15} 
                            cols={140}
                            value={editedDescription}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    </div>
                </div>
                <hr />
                <div className="allManupalations d-flex justify-content-end">
                        <div className='buttons-group justify-content-end'>
                            <NavLink to={POST_LIKES_ROUTE} style={{ textDecoration: 'none', color: 'black'}}>
                                <button className='btn btn-primary'><Icon path={mdiThumbUp} size={1} /> {post.likes}</button>
                            </NavLink>
                            <NavLink to={POST_COMMENTS_ROUTE} style={{ textDecoration: 'none', color: 'black'}}>
                                <button className='btn btn-primary'><Icon path={mdiCommentTextMultiple} size={1} /> {post.comments}</button>
                            </NavLink>
                            <NavLink to={POST_VIEWS_ROUTE} style={{ textDecoration: 'none', color: 'black'}}>
                                <button className='btn btn-primary'><Icon path={mdiShareAll} size={1} /> {post.views}</button>
                            </NavLink>
                            <NavLink to={POST_REPOSTS_ROUTE} style={{ textDecoration: 'none', color: 'black'}}>
                                <button className='btn btn-primary'> <Icon path={mdiAccountEye} size={1} /> {post.reposts}</button>
                            </NavLink>
                            <div className="fw-bolder opacity-75 m-3">
                                Время публикаций: {post.time_of_publication}
                            </div>
                        </div>
                </div>
                <hr />
                <div className='buttons-group justify-content-end'>
                    <button className='btn btn-secondary'>
                        Отмена
                    </button>
                    <button className='btn btn-success' onClick={handleSave}>
                        Сохранить
                    </button>
                </div>
            </form>
        </div>
    )
}