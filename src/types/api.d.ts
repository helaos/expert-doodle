// 后端API返回的结果
export interface Result<T = any> {
  code: number
  message: string
  data: T
}
