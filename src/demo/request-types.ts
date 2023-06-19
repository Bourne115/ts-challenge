import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IRequestInterceptors {
  /**请求拦截 */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any

  /**响应拦截 */
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (err: any) => any
}

/**自定义传入的参数类型 */
export interface IRequestConfig extends AxiosRequestConfig {
  interceptors?: IRequestInterceptors
}