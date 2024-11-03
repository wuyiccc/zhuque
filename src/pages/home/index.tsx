import {View} from '@tarojs/components';
import {useDidShow} from '@tarojs/taro';
import HomeSearch from '@/pages/home/component/home-search';
import {useState} from 'react';
import HomeApi from '@/infrastructure/api/HomeApi';
import CommonConstants from '@/infrastructure/constants/CommonConstants';
import HomeBanner from '@/pages/home/component/home-banner';
import HomePopular from '@/pages/home/component/home-popular';
import HomeRecommand from '@/pages/home/component/home-recommand';
import TabControl from '@/component/tab-control';
import GoodsGetBO from '@/infrastructure/pojo/bo/GoodsGetBO';

export default function () {

  const [bannerList, setBannerList] = useState<string[]>([]);
  const [populars, setPopulars] = useState<[]>([]);
  const [goodsList, setGoodsList] = useState<any>();


  useDidShow(() => {

    loadHomeData();
    initGoodsContent();
  });


  const loadHomeData = async () => {

    const data = await HomeApi.getHomeInfoData();
    const urlList: string[] = [];
    for (let i = 0; i < data.adsInfo.slide_ads.config.slide.length; i++) {
      urlList[i] = CommonConstants.DEFAULT_URL;
    }
    setBannerList(urlList);

    const recommendData = await HomeApi.getRecommendData();

    setPopulars(recommendData.populars);
  };



  const loadGoods = async (goodsGetBO: GoodsGetBO) => {
    const data = await HomeApi.getGoodsList(goodsGetBO);
    return {
      data: data.goods,
      type: goodsGetBO.type,
      page: goodsGetBO.page
    };
  };


  const initGoodsContent = async () => {

    const goodsListOrigin = {};

    CommonConstants.TABLE_TYPES.forEach((item) => {
      goodsListOrigin[item] = {page: 0, list: []};
    });

    const newGoodsList = goodsListOrigin;
    // 初始化数据

    for (let i = 0; i < CommonConstants.TABLE_TYPES.length; i++) {
      let item = CommonConstants.TABLE_TYPES[i];
      const goods1BO = new GoodsGetBO(i, 1);
      const data1 = await loadGoods(goods1BO);
      newGoodsList[item] = {
        page: i,
        list: [...newGoodsList[item].list, data1.data]
      };
    }
    setGoodsList(newGoodsList);
  };


  const onTabClick = async (index) => {


  };

  return <View>
    <HomeSearch></HomeSearch>
    <HomeBanner banners={bannerList}></HomeBanner>
    <HomePopular populars={populars}></HomePopular>
    <HomeRecommand></HomeRecommand>
    <TabControl titles={['精选专场', '精选单品']} onTabClick={onTabClick}></TabControl>

    {
      JSON.stringify(goodsList)
    }
  </View>;
};
