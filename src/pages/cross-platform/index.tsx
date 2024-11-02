import {View} from '@tarojs/components'
import {useLoad} from '@tarojs/taro'
import ZQButton from "@/component/zq-button";

export default function CrossPlatform() {

  useLoad(() => {
    console.log('Page loaded.')
  })


  const onClick = () => {

    if (process.env.TARO_ENV === 'h5') {
      console.log('h5 click')
    } else if (process.env.TARO_ENV === 'weapp') {
      console.log('weapp click')
    }
  }

  return (
    <View className='cross-platform'>


      {
        process.env.TARO_ENV === 'h5' && (
          <View>
            <View>1. 我是H5端专有的组件</View>
            <ZQButton type='blue' onBtnClick={onClick}>H5按钮</ZQButton>
          </View>
        )
      }

      {
        process.env.TARO_ENV === 'weapp' && (
          <View>
            <View>2. 我是weapp端专有的组件</View>
            <ZQButton type='primary' onBtnClick={onClick}>weapp按钮</ZQButton>
          </View>
        )
      }
    </View>
  )
}
