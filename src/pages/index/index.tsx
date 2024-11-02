import ZQButton from "@/component/zq-button";
import {View} from '@tarojs/components'
import './index.less'

export default function Index() {

  const handleBtnClick = () => {
    console.log('yes amd')
  }

  return (
    <View className='index global-style'>
      <ZQButton type='primary' onBtnClick={handleBtnClick}>Test Button</ZQButton>
    </View>
  )
}
