import Taro from "@tarojs/taro";

export default class ApiUtils {

  private static request(url: string, method: keyof Taro.request.Method, data: any): Promise<any> {


    return new Promise((resolve, reject) => {
      Taro.request({
        url: process.env.TARO_APP_BASE_URL + url,
        method: method,
        timeout: Number(process.env.TARO_APP_REQUEST_TIMEOUT),
        data: data,
        success(res) {
          resolve(res)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }


  public static get(url: string, params: any) {

    return this.request(url, 'GET', params)
  }

  public static post(url: string, data: any) {

    return this.request(url, 'POST', data)
  }
}
