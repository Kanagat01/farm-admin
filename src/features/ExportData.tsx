import React from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import Icon from "@mdi/react";
import { mdiDownload } from "@mdi/js";

type ExportDataProps = {
  data: any[];
  headers: string[];
  text: string;
};

export const ExportData: React.FC<ExportDataProps> = ({
  data,
  headers,
  text,
}) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToExcel = (data: any[], headers: string[], filename: string) => {
    const ws = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: fileType });
    saveAs(dataBlob, filename + fileExtension);
  };

  return (
    <button
      className="btn btn-primary rounded-btn d-flex align-items-center py-2"
      onClick={() => exportToExcel(data, headers, text)}
    >
      <span className="me-2">{text}</span>
      <Icon path={mdiDownload} style={{ height: "1.5rem", width: "1.5rem" }} />
    </button>
  );
};
