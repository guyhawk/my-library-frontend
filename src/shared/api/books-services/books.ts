import type { AxiosPromise } from "axios";
import { apiInstance } from "@/shared/api/base";
import { User } from "@/shared/api/models";

const BASE_URL = "/books"

export type payloadLogin = {
    email?: string;
    completed?: string;
};

export type payloadRegistraton = {
  email?: string;
  completed?: string;
};

export const getAuthorizationHeader = (token: string) => `Bearer ${token}`;

export const getBooksList = (token: string): AxiosPromise<User> => {
    return apiInstance.get(BASE_URL, { headers: { Authorization: getAuthorizationHeader(token) }});
};

