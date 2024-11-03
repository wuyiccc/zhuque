import BaseApi from '@/infrastructure/api/BaseApi';
import GoodsGetBO from '@/infrastructure/pojo/bo/GoodsGetBO';
import PageEntity from "@/infrastructure/pojo/entity/PageEntity";
import ArticleSimpleEntity from "@/infrastructure/pojo/entity/ArticleSimpleEntity";

export default class HomeApi {


  public static PREFIX_URL = '/proxy';

  public static async getHomeInfoData(): Promise<any> {

    return await BaseApi.get(HomeApi.PREFIX_URL + '/homeinfo', null);
  }

  public static async getRecommendData(): Promise<any> {

    return await BaseApi.get(HomeApi.PREFIX_URL + '/recommend', null);
  }

  public static async getGoodsList(goodsGetBO: GoodsGetBO): Promise<PageEntity<ArticleSimpleEntity>> {

    return await BaseApi.post("/home" + '/getArticleList', goodsGetBO);
  }
}
