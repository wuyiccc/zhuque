import {Image, Text, View} from '@tarojs/components';
import Taro, {useDidShow, useReachBottom} from '@tarojs/taro';
import HomeRecommend from '@/pages/home/component/home-recommend';
import HomeSearch from '@/pages/home/component/home-search';
import {useState} from 'react';
import HomeApi from '@/infrastructure/api/HomeApi';
import CommonConstants from '@/infrastructure/constants/CommonConstants';
import HomeBanner from '@/pages/home/component/home-banner';
import HomePopular from '@/pages/home/component/home-popular';
import TabControl from '@/component/tab-control';
import ArticleSimpleEntity from '@/infrastructure/pojo/entity/ArticleSimpleEntity';
import GoodsGetBO from '@/infrastructure/pojo/bo/GoodsGetBO';
import styles from './index.module.less';

export default function () {

  const [bannerList, setBannerList] = useState<string[]>([]);
  const [populars, setPopulars] = useState<[]>([]);
  const [articleList, setArticleList] = useState<ArticleSimpleEntity[]>([]);
  const [page, setPage] = useState<number>(1);
  const [refreshFlag, setRefreshFlag] = useState<boolean>(true);


  useDidShow(() => {

    loadHomeData();
    initData();
  });

  useReachBottom(() => {
    getData();
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


  const onTabClick = async () => {

    // 初始化文章列表
    initData();
  };

  const initData = async () => {

    const bo = new GoodsGetBO(1, 5);

    const data = await HomeApi.getGoodsList(bo);

    setArticleList(data.records!);
    setPage(() => bo.current + 1);

    if (data.totalPageNums === bo.current) {
      setRefreshFlag(false);
    } else {
      setRefreshFlag(true);
    }
  };

  const getData = async () => {

    console.log(refreshFlag);
    if (!refreshFlag) {
      return;
    }
    const bo = new GoodsGetBO(page, 5);

    const data = await HomeApi.getGoodsList(bo);

    const newList: ArticleSimpleEntity[] = [...articleList!, ...data.records!];
    if (data.totalPageNums === bo.current) {
      setRefreshFlag(false);
    }
    setArticleList(newList);
    setPage(() => bo.current + 1);
  };

  const handleClick = (item: ArticleSimpleEntity) => {

    Taro.navigateTo({
      // 必须指定字符串, 不能用PageConstants.xxx
      url: '/pages/detail/index' + '?link=' + item.image,
      success: () => {

      }
    });
  };

  const renderGridView = () => {

    if (articleList && articleList.length > 0) {
      const rows: ArticleSimpleEntity[][] = [];
      for (let i = 0; i < articleList.length; i += 2) {
        rows.push(articleList.slice(i, i + 2));
      }
      return (
        <View className={styles.container}>
          {rows.map((row, index) => (
            <View key={index} className={styles.row}>
              {row.map((item, idx) => (
                <View key={idx} className={styles.item} onClick={() => handleClick(item)}>
                  <View className={styles.itemImageContainer}>
                    <Image className={styles.itemImage} src={item.image!}></Image>
                  </View>
                  <View className={styles.itemTextContainer}>
                    <Text className={styles.itemText}>{item.title}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      );
    } else {
      return <View>无数据</View>;
    }
  };


  return <View>
    <HomeSearch></HomeSearch>
    <HomeBanner banners={bannerList}></HomeBanner>
    <HomePopular populars={populars}></HomePopular>
    <HomeRecommend></HomeRecommend>
    <TabControl titles={['精选专场', '精选单品']} onTabClick={onTabClick}></TabControl>

    {renderGridView()}

  </View>;
};
