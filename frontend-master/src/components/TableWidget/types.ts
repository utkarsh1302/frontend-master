/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITableWidget<T extends Record<string, any>> {
  headers: string[];
  data: T[];
  isPaginationVisible: boolean;
  rowsPerPage: number;
  pageNumber: number;
}
