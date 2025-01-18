export type HttpRequestConfig = Partial<{
  headers: Record<string, string>;
  params: unknown;
  data: unknown;
  signal: AbortSignal;
}>;

export interface HttpClient {
  get<ResponseData = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData }>;

  post<ResponseData = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData }>;

  put<ResponseData = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData }>;

  delete<ResponseData = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<{ data: ResponseData }>;
}
