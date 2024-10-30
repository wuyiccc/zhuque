import {Text, View} from '@tarojs/components'
import Taro, {useLoad} from '@tarojs/taro'
import './index.less'

export default function Detail() {

  useLoad((options) => {

    console.log('Detail01=', options)
    // @ts-ignore
    const eventChannel = Taro.getCurrentInstance().page.getOpenerEventChannel()
    eventChannel.on('acceptDataFromHomePage', function (data) {
      console.log(data)
    })
  })

  return (
    <View className='detail'>
      <Text>Hello world!</Text>
    </View>
  )
}
