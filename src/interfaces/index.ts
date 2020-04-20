export interface IAppProps {}

export interface IAppState {
  data: IApiData;
  country: string;
}

// Components
export interface ICardsProps {
  data: IApiData;
}

export interface IChartProps {
  data: IApiData;
  country: string;
}

export interface ICountryPickerProps {
  handleChange: (country: string) => void;
}

// API
export interface IApiResponse {
  data: IApiResponseData;
  status: number;
  statusText: string;
}

export interface IApiResponseData {
  confirmed: IApiDataValue;
  recovered: IApiDataValue;
  deaths: IApiDataValue;
  dailySummary: string;
  dailyTimeSeries: IApiDataPattern;
  image: string;
  source: string;
  countries: string;
  countryDetail: IApiDataPattern;
  lastUpdate: Date;
}

export interface IApiDataValue {
  value: number;
  detail: string;
}

export interface IApiDataPattern {
  pattern: string;
  example: string;
}

export interface IApiData {
  confirmed: IApiDataValue;
  recovered: IApiDataValue;
  deaths: IApiDataValue;
  lastUpdate: Date;
}

export interface IDailyData {
  totalConfirmed: number;
  mainlandChina: number;
  otherLocations: number;
  deltaConfirmed: number;
  totalRecovered: number;
  confirmed: IDailyDataGroup;
  deltaConfirmedDetail: IDailyDataGroup;
  deaths: IDailyDataGroup;
  recovered: IDailyDataGroup;
  active: number;
  deltaRecovered: number;
  incidentRate: number;
  peopleTested: number;
  reportDate: Date;
}

export interface IDailyDataGroup {
  total: number;
  china: number;
  outsideChina: number;
}

export interface ICountryData {
  name: string;
  iso2: string;
  iso3: string;
}
