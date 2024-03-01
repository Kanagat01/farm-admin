import { FC } from "react";
import Icon from "@mdi/react";
import { mdiDownload } from "@mdi/js";
import { CSVLink } from "react-csv";

type Header = {
  label: string;
  key: string;
};

type ExportDataProps = {
  data: any[];
  headers: Header[];
};

export const ExportData: FC<ExportDataProps> = ({ data, headers }) => {
  return (
    <CSVLink
      data={data}
      headers={headers}
      className="btn btn-primary rounded-btn d-flex align-items-center py-2"
    >
      <span className="me-2">Экспортировать</span>
      <Icon path={mdiDownload} style={{ height: "1.5rem", width: "1.5rem" }} />
    </CSVLink>
  );
};
