import {Button, Text, View} from '@tarojs/components'
import Taro, {useLoad} from '@tarojs/taro'
import './index.less'

export default function Detail() {

  useLoad((options) => {

    console.log('Detail01=', options)
    let currentPages = Taro.getCurrentPages();
    const eventChannel = currentPages[currentPages.length - 1].getOpenerEventChannel()
    eventChannel.on('acceptDataFromHomePage', function (data) {
      console.log(data)
    })
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
    </View>
  )
}
