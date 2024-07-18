import { restfulAPI } from '@/axios/restfulAPI'
import type { APIResponse } from '@/types/APIResponse'

export const serviceAPI = {
  async reqTestAPI(params: any) {
    const url = `/bit.ly/2mTM3nY`
    const res = await restfulAPI.reqGet<void>(url, params)

    return res.recvData
  },

  // User 관련 서비스
  async reqSignUpPost(params: any) {
    const url = `/signup`
    const res = await restfulAPI.reqPost<APIResponse<string>>(url, params)

    return res.recvData
  }

  // async reqMeListGet(params: any) {
  //   const url = `/ndcsequipment/facility/managedelementListAll`;
  //   const res = await restfulAPI.reqGet<Response<Array<Managedelement>>>(url, params);

  //   return res.recvData;
  // },
}
