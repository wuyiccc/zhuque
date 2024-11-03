import BaseApi from '@/infrastructure/api/BaseApi';
import UserLoginBO from '@/infrastructure/pojo/bo/UserLoginBO';

export default class UserApi {


  public static PREFIX_URL = '/user';

  public static async login(userLoginBO: UserLoginBO): Promise<any> {
      return await BaseApi.post(UserApi.PREFIX_URL + '/login', userLoginBO);
  }
}
