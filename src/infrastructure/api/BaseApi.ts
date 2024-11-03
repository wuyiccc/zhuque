import Taro from '@tarojs/taro';
import NetworkException from '@/infrastructure/exception/network/NetworkException';
import R from '@/infrastructure/pojo/R';
import ServerBizCode from '@/infrastructure/code/ServerBizCode';
import UserNotLoginException from '@/infrastructure/exception/custom/UserNotLoginException';
import CustomException from '@/infrastructure/exception/custom/CustomException';

export default class BaseApi {

  private static async request(url: string, method: keyof Taro.request.Method, data: any): Promise<any> {

    const response = await Taro.request({
      url: process.env.TARO_APP_BASE_URL + url,
      method: method,
      timeout: Number(process.env.TARO_APP_REQUEST_TIMEOUT),
      data: data
    });

    if (response.statusCode !== 200) {
      throw new NetworkException('网络异常: ' + response.errMsg);
    }

    const responseData: R<any> = response.data;

    const code = responseData.code;

    if (code === ServerBizCode.ERROR_USER_NOT_LOGIN) {
      throw new UserNotLoginException(responseData.msg!, data);
    } else if (code !== ServerBizCode.OK) {
      throw new CustomException(responseData.msg!, data);
    }

    return responseData.data;
  }


  public static async get(url: string, params: any) {

    return await this.request(url, 'GET', params);
  }

  public static async post(url: string, data: any) {

    return await this.request(url, 'POST', data);
  }
}
