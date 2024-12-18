/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITableWidget } from "./types";
import "./TableWidget.css";
import { useEffect, useState } from "react";

function TableWidget<T extends Record<string, any>>(props: ITableWidget<T>) {
  const [currentRows, setCurrentRows] = useState<T[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { headers, data, rowsPerPage } = props;

  useEffect(() => {
    const startIndex = (pageNumber - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    if (data.length > 0) {
      setCurrentRows(
        data.slice(startIndex, data.length > endIndex ? endIndex : data.length)
      );
    }
  }, [data, pageNumber, rowsPerPage]);
  return (
    <div>
      <table rules="rows" align="left" cellPadding={10} className="tableWidget">
        <thead>
          <tr key="header">
            {headers.map((header: string, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr key="pagination">
            <td></td>
            <td></td>
            <td align="right" className="pagination-container">
              <button
                disabled={pageNumber === 1}
                onClick={() => {
                  setPageNumber((pageNumber) => pageNumber - 1);
                }}
              >
                {"<"}
              </button>
              <span className="page-number-span">{pageNumber}</span>
              <button
                disabled={currentRows.length < rowsPerPage}
                onClick={() => {
                  setPageNumber((pageNumber) => pageNumber + 1);
                }}
              >
                {">"}
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default TableWidget;
