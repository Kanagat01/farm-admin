import Icon from "@mdi/react";
import { mdiDownload } from "@mdi/js";
import { CSVLink } from "react-csv";

export default function ExportData(props) {
    const { data, headers } = props;
    return (
        <CSVLink
            data={data}
            headers={headers}
            className='btn btn-primary rounded-btn d-flex align-items-center py-2'
        >
            <span className='me-2'>Экспортировать</span>
            <Icon
                path={mdiDownload}
                style={{ height: "1.5rem", width: "1.5rem" }}
            />
        </CSVLink>
    );
}
