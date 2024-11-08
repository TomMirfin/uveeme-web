export type EventType = {
  Id: string;
  description: string;
  location: string;
  event_name: string;
  event_date: string;
  status: string;
};

export type GroupType = {
  Id: string;
  team_name: string;
  description: string;
};

export interface GroupCreateFormState<T> {
  errors?: StringMap;
  success?: string;
  data: T;
  blurs: StringToBooleanMap;
}

export interface StringMap {
  [key: string]: string;
}

export interface StringToBooleanMap {
  [key: string]: boolean;
}
