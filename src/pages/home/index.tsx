import {View} from '@tarojs/components';
import {memo} from 'react';
import HomeSearch from '@/pages/home/component/home-search';

const Home = memo(function () {

  return <View>
    <HomeSearch></HomeSearch>
  </View>;
});

export default Home;
