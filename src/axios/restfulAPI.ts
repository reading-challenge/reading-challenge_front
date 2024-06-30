import { AxiosError, type AxiosRequestConfig, type AxiosResponse, type Method } from 'axios'
import axiosInstance from '@/axios/axios'
import { type APIResponse } from '@/types/APIResponse'

import { utils } from '@/utils/utils'
import moment from 'moment'
import store from '@/stores/store'
import { commonStore } from '@/stores/modules/common'
// import { EventName, eventBus } from '@/utils/eventbus'

const appConfig = commonStore(store).appConfig

export const restfulAPI = {
  /**
   * @param url
   * @param config
   * @param timeout
   * @param params
   * @param isProgress
   * @returns
   */
  async reqPost<T>(
    url: string,
    config?: AxiosRequestConfig,
    timeout?: number,
    params?: any,
    isProgress: boolean = true
  ): Promise<APIResponse<T>> {
    return await restfulAPI.reqAPI('POST', url, config, timeout, params, isProgress)
  },

  async reqGet<T>(
    url: string,
    config?: AxiosRequestConfig,
    timeout?: number,
    params?: any,
    isProgress: boolean = true
  ): Promise<APIResponse<T>> {
    return await restfulAPI.reqAPI('GET', url, config, timeout, params, isProgress)
  },

  async reqAPI<T>(
    method: Method,
    url: string,
    config?: AxiosRequestConfig,
    timeout?: number,
    params?: any,
    isProgress: boolean = true
  ): Promise<APIResponse<T>> {
    utils.log(`Req ${method} ############# ${url} : ${moment().format('YYYY/MM/DD HH:mm:ss')}`)
    utils.log(`    Params ==>`)
    utils.log(params)

    // config
    // 요청 timeout 시간 설정
    if (!timeout) {
      timeout = appConfig.defaultTimeout
    }
    if (config) {
      config.timeout = timeout * 1000
    } else {
      config = {
        timeout: timeout * 1000
      }
    }
    // GET이면 params 설정
    if (method === 'GET' && params) {
      config.params = params
    }
    utils.log(`    Config ==>`)
    utils.log(config)

    // url
    url = `${appConfig.apiUrl}${url}`

    // loading open
    // if (isProgress) {
    // eventBus.emit(EventName.LOADING, { isVisible: true })
    // }

    // 참고
    // https://velog.io/@bang9dev/axios-with-qs
    // params가 FormData가 아닐때만....
    // if (params && !isForm) {
    //   params = qs.stringify(params, { charset: "utf-8" });
    // }

    let response: APIResponse<T> = {}
    try {
      let res: AxiosResponse
      if (method === 'POST') {
        // POST
        res = await axiosInstance.post(url, params, config)
      } else {
        // GET
        res = await axiosInstance.get(url, config)
      }

      response.status = res.status
      response.statusText = res.statusText
      response.recvData = res.data as T
    } catch (ex) {
      const error = ex as AxiosError
      response.errCode = error.code
      response.errMessage = error.message
    } finally {
      // loading close
      // if (isProgress) {
      //eventBus.emit(EventName[EventName.LOADING], { isVisible: false });
      // eventBus.emit(EventName.LOADING, { isVisible: false })
      // }

      response.timestamp = `${moment().format('YYYY/MM/DD HH:mm:ss')}`
      utils.log(`Res ${method} ##### ${url} : ${response.timestamp}`)
      utils.log(response)
    }

    return response
  }
}
