import axios from 'axios'
import type { AxiosInstance, CreateAxiosDefaults } from 'axios'

export const createHTTPRequest = (config?: CreateAxiosDefaults): AxiosInstance => {
  // 创建axios实例
  const instance = axios.create({
    ...config
  })

  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // 请求发起前的拦截处理
      return config
    },
    (error) => {
      // 请求出现异常
      return Promise.reject(error)
    }
  )

  // 响应拦截器
  instance.interceptors.response.use(
    (response) => {
      // 对响应结果进行拦截处理
      return response.data
    },
    (error) => {
      // 如果是测试环境打印异常日志
      if (import.meta.env.DEV) console.error(error)
      return Promise.reject(error)
    }
  )

  return instance
}

const instance = createHTTPRequest({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5 * 1000
})

// 导出一个默认的axios实例
export default instance
