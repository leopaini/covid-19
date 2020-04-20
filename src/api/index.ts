import axios from "axios";
import { IApiResponse, IApiData, IDailyData, ICountryData } from "../interfaces";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country?: string): Promise<IApiData> => {
  try {
    const customUrl = country ? `${url}/countries/${country}` : url;
    const response: IApiResponse = await axios.get(customUrl);
    const { confirmed, recovered, deaths, lastUpdate } = response.data;

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchDailyData = async (): Promise<IDailyData[]> => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchCountries = async (): Promise<ICountryData[]> => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    return data.countries;
  } catch (error) {
    return Promise.reject(error);
  }
};
