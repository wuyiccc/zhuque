import BaseApi from '@/infrastructure/api/BaseApi';

export default class HomeApi {


  public static PREFIX_URL = '/proxy';

  public static async getHomeInfoData(): Promise<any> {

    return await BaseApi.get(HomeApi.PREFIX_URL + '/homeinfo', null);
  }

  public static async getRecommendData(): Promise<any> {

    return await BaseApi.get(HomeApi.PREFIX_URL + '/recommend', null);
  }
}
