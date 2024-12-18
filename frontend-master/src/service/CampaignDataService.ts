import { ApiCallback, ICrowdFundCampaignData, ITableData } from "./types";

export async function getCrowdFundData(callback: ApiCallback<ITableData[]>) {
  return await fetch(
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
  )
    .then((response) => response.json())
    .then((data: ICrowdFundCampaignData[]) => {
      const tableData: ITableData[] = data.map(
        (data: ICrowdFundCampaignData) => {
          return {
            s_no: data["s.no"],
            percentage_funded: data["percentage.funded"],
            amt_pleged: data["amt.pledged"],
          } as ITableData;
        }
      );

      callback.onSuccess(tableData);
    })
    .catch((error) => {
      console.error(error);
      callback.onFailure(error);
    });
}
