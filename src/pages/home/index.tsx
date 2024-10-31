import {Button, Navigator, View} from '@tarojs/components'
import PageConstants from "@/infrastructure/constants/PageConstants";
import Taro, {useLoad, useUnload} from '@tarojs/taro'
import './index.less'

export default function Home() {

  useLoad(() => {

    Taro.eventCenter.on('acceptDataFromEventCenter', (data) => {
      console.log(data)
    })
  })

  useUnload(() => {

    Taro.eventCenter.off('acceptDataFromEventCenter');
  })

  const goToDetail01 = () => {

    Taro.navigateTo({
      url: PageConstants.getNavigateUrl(PageConstants.PAGE_DETAIL)
    })
  }

  const goToDetail02 = () => {

    Taro.redirectTo({
      url: PageConstants.getNavigateUrl(PageConstants.PAGE_DETAIL)
    })
  }

  const goToSwitch03 = () => {

    Taro.switchTab({
      url: PageConstants.getNavigateUrl(PageConstants.PAGE_CATEGORY)
    })
  }

  const goToDetail04 = () => {

    Taro.navigateTo({
      url: PageConstants.getNavigateUrl(PageConstants.PAGE_DETAIL) + '?name=liujin&id=100',
      success: function (res) {
        res.eventChannel.emit('acceptDataFromHomePage', {
          data: '我是从home页面传递detail04的数据',
        })
      }
    })
  }

  const goToDetail05 = () => {

    Taro.navigateTo({
      url: PageConstants.getNavigateUrl(PageConstants.PAGE_DETAIL),
      events: {
        acceptDataFromDetailPage: function (data) {
          console.log(data)
        }
      }
    })
  }


  return (
    <View className='home'>
      <View>1. 页面跳转(组件)</View>
      <Navigator url={PageConstants.getNavigateUrl(PageConstants.PAGE_DETAIL)} openType='navigate'>
        <Button>goToDetail</Button>
      </Navigator>

      <View>2. 页面重定向(组件)</View>
      <Navigator url={PageConstants.getNavigateUrl(PageConstants.PAGE_DETAIL)} openType='redirect'>
        <Button>goToDetail</Button>
      </Navigator>

      <View>3. tab页面切换(组件)</View>
      <Navigator url={PageConstants.getNavigateUrl(PageConstants.PAGE_CATEGORY)} openType='switchTab'>
        <Button>goToCategory</Button>
      </Navigator>

      <View>4. 页面跳转API(组件)</View>
      <Button onClick={goToDetail01}>goToDetail01</Button>

      <View>5. 页面重定向API(组件)</View>
      <Button onClick={goToDetail02}>goToDetail02</Button>

      <View>6. 页面切换API(组件)</View>
      <Button onClick={goToSwitch03}>goToSwitch03</Button>

      <View>7. 页面数据传参(正向)</View>
      <Button onClick={goToDetail04}>正向页面数据传参(正向)</Button>

      <View>8. 页面数据传参(逆向)</View>
      <Button onClick={goToDetail05}>逆向页面数据传参(逆向)</Button>
    </View>
  )
}
