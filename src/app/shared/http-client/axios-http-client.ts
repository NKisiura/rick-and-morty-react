import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { HttpClient, HttpRequestConfig } from "./http-client.ts";

export class AxiosHttpClient implements HttpClient {
  private readonly client: AxiosInstance;

  constructor(
    private readonly baseUrl: string,
    private readonly config?: AxiosRequestConfig,
  ) {
    this.client = axios.create({
      //TODO: add params serializer
      ...(this.config ?? {}),
    });
  }

  public get<ResponseData = unknown>(
    url: string,
    config: HttpRequestConfig = {},
  ) {
    return this.request<ResponseData>({
      url,
      method: "GET",
      ...config,
    });
  }

  public post<ResponseData = unknown>(
    url: string,
    config: HttpRequestConfig = {},
  ) {
    return this.request<ResponseData>({
      url,
      method: "POST",
      ...config,
    });
  }

  public put<ResponseData = unknown>(
    url: string,
    config: HttpRequestConfig = {},
  ) {
    return this.request<ResponseData>({
      url,
      method: "PUT",
      ...config,
    });
  }

  public delete<ResponseData = unknown>(
    url: string,
    config: HttpRequestConfig = {},
  ) {
    return this.request<ResponseData>({
      url,
      method: "DELETE",
      ...config,
    });
  }

  private async request<ResponseData = unknown>(
    config: AxiosRequestConfig,
  ): Promise<{
    data: ResponseData;
  }> {
    const { data } = await this.client.request<ResponseData>({
      ...config,
      baseURL: this.baseUrl,
      method: config.method,
      headers: {
        "content-type": "application/json",
        ...config.headers,
      },
    });

    return { data };
  }
}
