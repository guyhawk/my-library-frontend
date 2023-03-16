import type { AxiosPromise } from "axios";
import { apiInstance } from "@/shared/api/base";
import { User } from "@/shared/api/models";

const BASE_URL = "/auth"

export type payloadLogin = {
    email?: string;
    completed?: string;
};

export type payloadRegistraton = {
  email?: string;
  completed?: string;
};

export const singin = (params: payloadLogin): AxiosPromise<User> => {
    return apiInstance.post(BASE_URL + "/signin", { ...params });
};

export const signup = (params?: payloadRegistraton): AxiosPromise<User> => {
  return apiInstance.post(BASE_URL + "/signup", { ...params });
};
