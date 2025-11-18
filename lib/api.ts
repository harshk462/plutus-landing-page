import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, AxiosError } from "axios";
// import { fetchAccessToken } from "./auth/getAccessToken";

export const API_BASE_URL = String(process.env.NODE_ENV) === "production" ? process.env.NEXT_PUBLIC_API_BASE_URL : "http://localhost:3001/v1.1";

interface HttpClient {
  get<T>(params: RequestParams): Promise<T>;
  post<T>(params: RequestDataParams): Promise<T>;
  put<T>(params: RequestDataParams): Promise<T>;
  patch<T>(params: RequestDataParams): Promise<T>;
  delete<T>(params: RequestDataParams): Promise<T>;
}

interface RequestParams {
  path: string;
  baseUrl?: string | null;
  isAuth?: boolean;
  queryParams?: Record<string, any>;
  headers?: Record<string, string>;
  isAbsoluteUrl?: boolean;
}

interface RequestDataParams extends RequestParams {
  data: any;
}

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: API_BASE_URL,
  });

  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const isAuth = config.headers["X-Use-Auth"] === "true";

      if (isAuth) {
        // const token = await fetchAccessToken();
        // config.headers["Authorization"] = `Bearer ${token}`;

        // Remove the custom header after using it
        // delete config.headers["X-Use-Auth"];
      }

      if (!config.headers["Content-Type"]) {
        config.headers["Content-Type"] = "application/json";
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const axiosInstance = createAxiosInstance();

const httpClient: HttpClient = {
  async get<T>({ path, baseUrl, isAuth = true, queryParams, headers = {} }: RequestParams): Promise<T> {
    try {
      const url = `${baseUrl || API_BASE_URL}/${path}`;
      const response: AxiosResponse<T> = await axiosInstance.get(url, {
        params: queryParams,
        baseURL: baseUrl || API_BASE_URL,
        headers: {
          ...headers,
          "X-Use-Auth": isAuth ? "true" : "false",
        },
      });
      return response.data;
    } catch (error: any) {
      handleError(error, "GET", path);
      throw error;
    }
  },

  async post<T>({ path, data, baseUrl, isAuth = true, headers = {} }: RequestDataParams): Promise<T> {
    try {
      const url = `${baseUrl || API_BASE_URL}/${path}`;
      const response: AxiosResponse<T> = await axiosInstance.post(url, data, {
        baseURL: baseUrl || API_BASE_URL,
        headers: {
          ...headers,
          "X-Use-Auth": isAuth ? "true" : "false",
        },
      });
      return response.data;
    } catch (error: any) {
      handleError(error, "POST", path);
      throw error;
    }
  },

  async put<T>({ path, data, baseUrl, isAuth = true, headers = {}, isAbsoluteUrl = false }: RequestDataParams): Promise<T> {
    try {
      const url = isAbsoluteUrl ? path : `${baseUrl || API_BASE_URL}/${path}`;
      const response: AxiosResponse<T> = await axiosInstance.put(url, data, {
        baseURL: baseUrl || API_BASE_URL,
        headers: {
          ...headers,
          "X-Use-Auth": isAuth ? "true" : "false",
        },
      });
      return response.data;
    } catch (error: any) {
      handleError(error, "PUT", path);
      throw error;
    }
  },

  async patch<T>({ path, data, baseUrl, isAuth = true, headers = {} }: RequestDataParams): Promise<T> {
    try {
      const url = `${baseUrl || API_BASE_URL}/${path}`;
      const response: AxiosResponse<T> = await axiosInstance.patch(url, data, {
        baseURL: baseUrl || API_BASE_URL,
        headers: {
          ...headers,
          "X-Use-Auth": isAuth ? "true" : "false",
        },
      });
      return response.data;
    } catch (error: any) {
      handleError(error, "PATCH", path);
      throw error;
    }
  },

  async delete<T>({ path, data, baseUrl, isAuth = true, headers = {} }: RequestDataParams): Promise<T> {
    try {
      const url = `${baseUrl || API_BASE_URL}/${path}`;
      const response: AxiosResponse<T> = await axiosInstance.delete(url, {
        data,
        baseURL: baseUrl || API_BASE_URL,
        headers: {
          ...headers,
          "X-Use-Auth": isAuth ? "true" : "false",
        },
      });
      return response.data;
    } catch (error: any) {
      handleError(error, "DELETE", path);
      throw error;
    }
  },
};

const handleError = (error: any, method: string, path: string) => {
  const status = error?.response?.status;
  const message = error?.response?.data?.message || error?.message || "Unexpected error";

  // console.error(`Error during ${method} ${path}:`, message, error);

  throw {
    message,
    ...(status && { status }),
    ...(error?.response?.data?.details && { details: error.response.data.details }),
  };
};

export default httpClient;
