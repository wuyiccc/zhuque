import {Button, Text, View} from '@tarojs/components'
import {useEffect, useRef} from "react";
import Taro, {
  useDidHide,
  useDidShow,
  useLoad,
  usePullDownRefresh,
  useReachBottom,
  useReady,
  useUnload
} from '@tarojs/taro'
import styles from './index.module.less'

export default function Detail() {

  // 为什么使用useRef, 因为useRef存的对象在整个组件的生命周期中都是保持同一个对象
  const instance = useRef(Taro.getCurrentInstance())
  console.log('router.params=>', instance.current.router!.params)

  useEffect(() => {
    console.log('detail useEffect')

    return () => {
      console.log('detail useEffect unMount')
    }

  }, []);

  useLoad((options) => {

    console.log('detail useLoad')

    console.log('Detail01=', options)
    let currentPages = Taro.getCurrentPages();
    const eventChannel = currentPages[currentPages.length - 1].getOpenerEventChannel()
    eventChannel.on('acceptDataFromHomePage', function (data) {
      console.log(data)
    })
  })



  useDidShow(() => {

    console.log('detail useDidShow')
  })

  useReady(() => {

    console.log('detail useReady')
  })

  useDidHide(() => {

    console.log('detail useDidHide')
  })

  useUnload(() => {

    console.log('detail useUnload')
  })


  usePullDownRefresh(() => {

    console.log('detail usePullDownRefresh')

    // 1s 之后停止当前页面的下拉刷新功能
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1000)
  })

  useReachBottom(() => {

    console.log('detail useReachBottom')
  })


  const goBack = () => {

    Taro.navigateBack({
      delta: 1,
    })

    let currentPages = Taro.getCurrentPages();

    const eventChannel = currentPages[currentPages.length - 1].getOpenerEventChannel();
    eventChannel.emit("acceptDataFromDetailPage", {
      data: "拿到detail页面传递到home页面的数据"
    })
  }


  const goBack2 = () => {

    Taro.navigateBack({
      delta: 1
    })

    Taro.eventCenter.trigger('acceptDataFromEventCenter', {
      data: '事件总线数据回传'
    })
  }


  return (
    <View className='detail'>
      <Text>Hello world!</Text>
      <Button onClick={goBack}>go Back</Button>
      <Button onClick={goBack2}>事件总线消息发送</Button>
      <View className={styles.detailItem}>item1</View>
      <View className={styles.detailItem}>item2</View>
    </View>
  )
}
