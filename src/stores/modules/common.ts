import { reactive } from 'vue'
import { defineStore } from 'pinia'

import { utils } from '@/utils/utils'

// public > appconfig.json 인터페이스
interface appConfig {
  appName: string
  locale: string
  apiUrl: string
  isLog: boolean
  isCallerLog: boolean
  defaultTimeout: number
}

export const commonStore = defineStore('common', () => {
  const appConfig: appConfig = reactive({
    appName: '',
    locale: 'ko',
    apiUrl: '',
    isLog: false,
    isCallerLog: false,
    defaultTimeout: 10
  })

  // appconfig.json 읽어오기
  const readConfig = async () => {
    await fetch('./appconfig.json')
      .then((res) => res.json())
      .then((res) => {
        commonStore().appConfig = res
        utils.log('##### Read Config #####')
        utils.log(commonStore().appConfig)
        utils.log('#######################')

        return res
      })
      .catch((error) => {
        utils.log(error)
      })
  }

  return { appConfig, readConfig }
})
