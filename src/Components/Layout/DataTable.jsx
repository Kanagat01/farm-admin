import { useParams } from "react-router-dom";
import { NavLink, matchPath } from "react-router-dom";

import { listRoutes } from "../../utils/routes.js";
import Search from "./Search";
import Filter from "./Filter";
import CreateModal from "./CreateModal";
import ExportData from "./ExportData";
import Mailing from "./Mailing.jsx";
import BlockModal from "./BlockModal.jsx";

export default function DataTable() {
    const params = useParams();
    const currentPath = window.location.pathname;
    let currentRoute;
    for (const route of Object.keys(listRoutes)) {
        let isMatching = matchPath({ path: route }, currentPath);
        if (isMatching) {
            currentRoute = route;
            break;
        }
    }
    const listData = listRoutes[currentRoute];
    let relInfo = listData.relInfo();
    const data = listData.getData();
    const {
        filterInputs,
        searchPlaceholder,
        title,
        block,
        create,
        exportData,
        mailing,
    } = listData;

    const headers = [{ label: "ID", key: "id" }];
    Object.entries(relInfo).map(([key, value]) => {
        headers.push({ label: value.verbose_name, key: key });
        return 0;
    });

    return (
        <div className='main'>
            <div className='table-title my-4'>
                Выберите {title} для изменения
            </div>
            <div
                className='d-flex align-items-center my-4'
                style={{ gap: "1rem" }}
            >
                {searchPlaceholder ? (
                    <Search placeholder={searchPlaceholder} />
                ) : (
                    ""
                )}
                {filterInputs ? <Filter filterInputs={filterInputs} /> : ""}
                {create ? <CreateModal title={title} relInfo={relInfo} /> : ""}
                {exportData ? <ExportData data={data} headers={headers} /> : ""}
                {mailing ? <Mailing /> : ""}
            </div>
            <table className='table table-stretched'>
                <thead>
                    <tr>
                        {headers.slice(0, 5).map((header) => (
                            <th>{header.label}</th>
                        ))}
                        {block ? <th>Заблокировать</th> : ""}
                    </tr>
                </thead>
                <tbody>
                    {data.map((obj) => (
                        <tr key={obj.id}>
                            {headers.slice(0, 5).map((header) => (
                                <td>
                                    {header.key === "subscription_type" ? (
                                        <div
                                            className={
                                                obj.subscription_type ===
                                                "premium"
                                                    ? "badge badge-premium"
                                                    : "badge badge-standart"
                                            }
                                        >
                                            {obj.subscription_type === "premium"
                                                ? "Премиум"
                                                : "Стандарт"}
                                        </div>
                                    ) : header.key === "id" ? (
                                        listData.generateURL ? (
                                            <NavLink
                                                to={listData.generateURL({
                                                    ...params,
                                                    id: obj.id,
                                                })}
                                                className='table-link'
                                            >
                                                {obj.id}
                                            </NavLink>
                                        ) : (
                                            obj.id
                                        )
                                    ) : (
                                        obj[header.key]
                                    )}
                                </td>
                            ))}
                            {block ? (
                                <td>
                                    <BlockModal obj={obj} title={title} />
                                </td>
                            ) : (
                                ""
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
