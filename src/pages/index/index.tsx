import Taro from "@tarojs/taro";
import {useEffect} from "react";
import {Text, View} from '@tarojs/components'
import './index.less'

export default function Index() {


  useEffect(() => {

    const app = Taro.getApp();

    console.log(app.name)
  }, []);

  return (
    <View className='index global-style'>
      <Text>Hello world! </Text>
    </View>
  )
}
