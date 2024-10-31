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

  return (
    <View className='detail'>
      <Text>Hello world!</Text>
      <Button onClick={goBack}>go Back</Button>
    </View>
  )
}
