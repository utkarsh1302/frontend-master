export interface ICrowdFundCampaignData {
  "s.no": number;
  "amt.pledged": number;
  blurb: string;
  by: string;
  country: string;
  currency: string;
  end_time: string;
  location: string;
  num_backers: number;
  "percentage.funded": number;
  state: string;
  title: string;
  type: string;
  url: string;
}

export interface ITableData {
  s_no: number;
  percentage_funded: number;
  amt_pleged: number;
}

export interface ApiCallback<T> {
  onSuccess: (response: T) => void;
  onFailure: (error: Error) => void;
}
