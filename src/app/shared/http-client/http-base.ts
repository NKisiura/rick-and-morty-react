import { HttpClient } from "./http-client.ts";

export abstract class HttpBase {
  constructor(protected readonly http: HttpClient) {}
}
