import { useParams } from "react-router-dom";
import { getModel } from "../../utils/api_connection";

import ModelForm from "./ModelForm";

export default function ModelInfo() {
    const { model_id } = useParams();
    let modelObj = getModel(parseInt(model_id, 10));
    if (!modelObj) {
        return <h1>404 Модель не найдена</h1>;
    }
    return (
        <div className='main'>
            <ModelForm modelObj={modelObj} />
        </div>
    );
}
