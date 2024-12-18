import { useEffect, useState } from "react";
import "./Table.css";
import { getCrowdFundData } from "../../service/CampaignDataService";
import TableWidget from "../../components/TableWidget/TableWidget";
import { ITableData } from "../../service/types";

function Table() {
  const [record, setRecord] = useState<ITableData[]>([]);
  useEffect(() => {
    getCrowdFundData({
      onSuccess: (response: ITableData[]) => {
        setRecord(response);
      },
      onFailure: (error) => {
        console.error("Error:", error.message);
      },
    });
  }, []);
  return (
    <TableWidget<ITableData>
      headers={["S.No.", "Percentage funded", "Amount pledged"]}
      data={record}
      isPaginationVisible={false}
      rowsPerPage={5}
      pageNumber={1}
    ></TableWidget>
  );
}

export default Table;
