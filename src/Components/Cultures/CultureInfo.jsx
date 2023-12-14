import { useParams } from "react-router-dom";
import { getCulture } from "../../utils/api_connection";

import CultureForm from "./CultureForm";

export default function CultureInfo() {
    const { culture_id } = useParams();
    let cultureObj = getCulture(parseInt(culture_id, 10));
    if (!cultureObj) {
        return <h1>404 Культура не найдена</h1>;
    }
    return (
        <div className='main'>
            <CultureForm cultureObj={cultureObj} />
        </div>
    );
}
