import rightSearchImg from '@/asset/image/right_search.png';
import leftSearchImg from '@/asset/image/left_search.png';
import {memo} from 'react';
import {Image, Text, View} from '@tarojs/components';
import styles from './index.module.less';

const HomeSearch = memo(function () {


  return <View className={styles.container}>

    <View className={styles.leftSearchContainer}>

      <Image className={styles.leftSearchImg} src={leftSearchImg} mode="widthFix"></Image>

      <View className={styles.name}>
        商品<Text className={styles.subName}>搜索</Text>
      </View>


    </View>
    <Image className={styles.rightSearchImg} mode='widthFix' src={rightSearchImg}></Image>
  </View>;
});


export default HomeSearch;
