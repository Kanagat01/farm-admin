import { useParams } from "react-router-dom";
import { getPost } from "../../utils/api_connection";

import PostForm from "../Forms/PostForm";

export default function PostInfo() {
    const { post_id } = useParams();
    console.log(post_id);
    let postObj = getPost(parseInt(post_id, 10));
    if (!postObj) {
        return <h1>404 Пост не найдена</h1>;
    }
    return (
        <div className='main'>
            <PostForm postObj={postObj} />
        </div>
    );
}
