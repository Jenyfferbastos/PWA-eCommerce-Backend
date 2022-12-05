import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { injectable } from 'inversify';

export type HttpAdapterResponse = AxiosResponse;

@injectable()
export class HttpAdapter {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create();
  }

  public async get(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<any>> {
    return axios.get(url, config);
  }

  public async post(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<any>> {
    return this.axios.post(url, data, config);
  }

  public async put(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<any>> {
    return this.axios.put(url, data, config);
  }
}
