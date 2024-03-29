import { ReactNode, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

type TableProps = {
  columns: ReactNode[];
  data: any[][];
};

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const pages = Math.ceil(data.length / itemsPerPage);
  let pageNums;
  if (pages <= 11) {
    pageNums = Array.from({ length: pages }, (_, index) => index + 1);
  } else {
    if (pages - currentPage <= 5) {
      pageNums = Array.from({ length: 11 }, (_, index) => index + pages - 10);
    } else if (currentPage <= 6) {
      pageNums = Array.from({ length: 11 }, (_, index) => index + 1);
    } else {
      pageNums = Array.from(
        { length: 11 },
        (_, index) => index + currentPage - 5
      );
    }
  }

  const dataIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(dataIndex, dataIndex + itemsPerPage);

  return (
    <>
      <div className="table-responsive mb-4">
        <table className="table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.length !== 0 ? (
              currentItems.map((values, index) => (
                <tr key={index}>
                  {values.map((value, index2) => (
                    <td key={index2}>{value}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: "center" }}>
                  Нет данных для отображения
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {pages > 1 ? (
        <Pagination className="justify-content-center">
          <Pagination.Prev
            onClick={() =>
              setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
            }
            className={pageNums.includes(1) ? "d-none" : ""}
          />
          {!pageNums.includes(1) && <Pagination.Ellipsis />}
          {pageNums.map((pageNumber) => (
            <Pagination.Item
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </Pagination.Item>
          ))}
          {!pageNums.includes(pages) && <Pagination.Ellipsis />}
          <Pagination.Next
            onClick={() =>
              setCurrentPage(currentPage < pages ? currentPage + 1 : pages)
            }
            className={pageNums.includes(pages) ? "d-none" : ""}
          />
        </Pagination>
      ) : (
        ""
      )}
    </>
  );
};
