import { useParams, matchPath } from "react-router-dom";

import { detailRoutes } from "../../utils/routes";
import DetailForm from "./DetailForm";

export default function DetailPage() {
    const params = useParams();
    const currentPath = window.location.pathname;
    let currentRoute;
    for (const route of Object.keys(detailRoutes)) {
        let isMatching = matchPath({ path: route }, currentPath);
        if (isMatching) {
            currentRoute = route;
            break;
        }
    }
    let detailInfo = detailRoutes[currentRoute];
    let obj_id = params[detailInfo.param];
    let obj = detailInfo.getObj(parseInt(obj_id, 10));
    let relatedInfo = detailInfo.relInfo(obj_id);
    return (
        <div className='main'>
            <DetailForm
                isCreateMode={false}
                title={`Информация о ${detailInfo.verbose_name} #${obj_id}`}
                dataObj={obj}
                relatedInfo={relatedInfo}
            />
        </div>
    );
}
