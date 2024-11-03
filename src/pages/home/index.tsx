import {View} from '@tarojs/components';
import {useDidShow} from '@tarojs/taro';
import HomeSearch from '@/pages/home/component/home-search';
import {useState} from 'react';
import HomeApi from '@/infrastructure/api/HomeApi';
import CommonConstants from '@/infrastructure/constants/CommonConstants';
import HomeBanner from "@/pages/home/component/home-banner";
import HomePopular from "@/pages/home/component/home-popular";
import HomeRecommand from "@/pages/home/component/home-recommand";

export default function () {

  const [bannerList, setBannerList] = useState<string[]>([]);
  const [populars, setPopulars] = useState<[]>([]);
  const [recommend, setRecommend] = useState<[]>([]);


  useDidShow(() => {

    loadHomeData();
  });


  const loadHomeData = async () => {

    const data = await HomeApi.getHomeInfoData();
    const urlList: string[] = [];
    for (let i = 0; i < data.adsInfo.slide_ads.config.slide.length; i++) {
      const slide = data.adsInfo.slide_ads.config.slide[i];
      console.log(slide.pic);
      urlList[i] = CommonConstants.DEFAULT_URL;
    }
    setBannerList(urlList);

    const recommendData = await HomeApi.getRecommendData();

    setPopulars(recommendData.populars);
    setRecommend(recommendData.recommend);
  };

  return <View>
    <HomeSearch></HomeSearch>
    <HomeBanner banners={bannerList}></HomeBanner>
    <HomePopular populars={populars}></HomePopular>
    <HomeRecommand recommend={recommend}></HomeRecommand>
  </View>;
};
