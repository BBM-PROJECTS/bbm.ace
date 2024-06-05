import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource
} from "axios";

import Cookies from "js-cookie";

export type TLinks = {
  first: string;
  last: string;
  prev: string;
  next: string;
}; // ! revist

export type TMeta = {
  current_page: number;
  from: number;
  last_page: number;
  total: number;
}; // ! revist

export type TPaginatedHttpResponse<T> = {
  data: T;
  links: TLinks;
  meta: TMeta;
}; // ! revist

export type THttpResponse<T = any> = {
  data: T;
  success: boolean;
  message: string;
};

export class HttpService {
  private http: AxiosInstance;
  private serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
  private cancelTokenSource: CancelTokenSource | null = null;

  constructor() {
    this.http = axios.create({
      baseURL: this.serverURL,
      withCredentials: false,
      headers: this.setupHeaders()
    });

    this.http.interceptors.request.use((config) => {
      this.cancelTokenSource = axios.CancelToken.source();
      config.cancelToken = this.cancelTokenSource.token;
      return config;
    });

    // Handle response and errors
    this.http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.error("Error fetching data:", error);
        }
        return Promise.reject(error);
      }
    );
  }

  private get getAuthorization() {
    const token = Cookies.get("Token") || "";
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  private setupHeaders(hasAttachment = false): any {
    return hasAttachment
      ? { "Content-Type": "multipart/form-data", ...this.getAuthorization }
      : { "Content-Type": "application/json", ...this.getAuthorization };
  }

  public service(hasAttachment = false, version: "v1" | "v2" = "v1") {
    this.http.defaults.headers = this.setupHeaders(hasAttachment);
    if (version === "v1") {
      this.http.defaults.baseURL = this.serverURL;
    }

    return this;
  }

  public pull<T, P = any>(
    url: string,
    config?: AxiosRequestConfig<P> | undefined
  ) {
    return this.http.get<T>(url, config);
  }

  public push<T, P = any>(
    url: string,
    payload?: P | undefined,
    config?: AxiosRequestConfig
  ) {
    return this.http.post<T>(url, payload, config);
  }

  public update<T, P = any>(
    url: string,
    payload?: P | undefined,
    config?: AxiosRequestConfig<P> | undefined
  ) {
    return this.http.put<T>(url, payload, config);
  }

  public remove<T, P = any>(
    url: string,
    config?: AxiosRequestConfig<P> | undefined
  ) {
    return this.http.delete<T>(url, config);
  }

  public isResolved(
    response: AxiosResponse,
    successfulStatusCodes: number[] = [200, 201, 204]
  ): boolean {
    return response && successfulStatusCodes.includes(response.status);
  }

  public cancelRequest() {
    if (this.cancelTokenSource) {
      this.cancelTokenSource.cancel("Request canceled by the user");
    }
  }
}
