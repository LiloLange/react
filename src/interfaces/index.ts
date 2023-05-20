export interface TodoData {
  title: string;
  state: string;
}

export interface TodoDataWId extends TodoData {
  id: string;
}
