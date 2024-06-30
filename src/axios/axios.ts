import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  AxiosError
} from 'axios'

// Axios 인스턴스 생성
const axiosInstance: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

// 인터셉터 추가
// 요청
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 요청 전에 작업 수행
    console.log('Request:', config)
    return config
  },
  (error: AxiosError) => {
    // 요청 오류 처리
    return Promise.reject(error)
  }
)
// 응답
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 응답 데이터 가공
    console.log('Response:', response)
    return response
  },
  (error: AxiosError) => {
    // 응답 오류 처리
    return Promise.reject(error)
  }
)

export default axiosInstance
