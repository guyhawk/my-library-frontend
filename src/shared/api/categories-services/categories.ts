import type { AxiosPromise } from "axios";
import { apiInstance } from "@/shared/api/base";
import { Category } from "@/shared/api/models";

const BASE_URL = "/categories"

export type payloadCategory = {
  name: string;
};

export const getAuthorizationHeader = (token: string) => `Bearer ${token}`;

export const getCategories = (token: string): AxiosPromise<Category> => {
    return apiInstance.get(BASE_URL, { headers: { Authorization: getAuthorizationHeader(token) }});
};

export const addCategory = (token: string, data: payloadCategory): AxiosPromise<Category> => {
  console.log(data)
  return apiInstance.post(BASE_URL, {...data}, { headers: { Authorization: getAuthorizationHeader(token) }});
};
