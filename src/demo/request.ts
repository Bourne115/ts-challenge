import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { IRequestConfig, IRequestInterceptors } from './request-types'


class Request {
  instance: AxiosInstance

  interceptorsObj?: IRequestInterceptors

  constructor(config: IRequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors

    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => res,
      (err: any) => err
    )

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch,
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => res?.data,
      (err: any) => err
    )
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}


export default Request

export const RequestClass = Request