import {Button, Image, ScrollView, Swiper, SwiperItem, Text, View} from '@tarojs/components'
import CX1IMG from '@/asset/image/cx1.jpg'
import CX2IMG from '@/asset/image/cx2.jpg'
import CX3IMG from '@/asset/image/cx3.jpg'
import CX4IMG from '@/asset/image/cx4.jpg'
import CX5IMG from '@/asset/image/cx5.jpg'
import './demo.less'

function Demo() {

  return (
    <View>
      <View>
        <Text>我是一个Text</Text>
      </View>
      <Button type='primary'>我是一个按钮</Button>
      {/*本地图片*/}
      <Image className='image' src={CX1IMG}></Image>
      <Image className='image' src={CX2IMG}></Image>
      {/*网络图片*/}
      <Image className='image'
             src='https://pss.bdstatic.com/static/superman/img/topnav/newfanyi-da0cea8f7e.png'></Image>

      {/*scrollView*/}
      {/*垂直滚动*/}
      {/*<ScrollView scrollY className='scrollContainer'>*/}
      {/*  <View className='scrollItem'>栏目1</View>*/}
      {/*  <View className='scrollItem'>栏目1</View>*/}
      {/*  <View className='scrollItem'>栏目1</View>*/}
      {/*  <View className='scrollItem'>栏目1</View>*/}
      {/*  <View className='scrollItem'>栏目1</View>*/}
      {/*  <View className='scrollItem'>栏目1</View>*/}
      {/*  <View className='scrollItem'>栏目1</View>*/}
      {/*  <View className='scrollItem'>栏目1</View>*/}
      {/*  <View className='scrollItem'>栏目1</View>*/}
      {/*  <View className='scrollItem'>栏目1</View>*/}
      {/*  <View className='scrollItem'>栏目1</View>*/}
      {/*</ScrollView>*/}

      <ScrollView scrollX className='scrollContainerX'>
        <View className='scrollItemX'>栏目1</View>
        <View className='scrollItemX'>栏目1</View>
        <View className='scrollItemX'>栏目1</View>
        <View className='scrollItemX'>栏目1</View>
        <View className='scrollItemX'>栏目1</View>
        <View className='scrollItemX'>栏目1</View>
        <View className='scrollItemX'>栏目1</View>
        <View className='scrollItemX'>栏目1</View>
        <View className='scrollItemX'>栏目1</View>
        <View className='scrollItemX'>栏目1</View>
        <View className='scrollItemX'>栏目1</View>
      </ScrollView>

      <Swiper indicatorDots className='swiperContainer'>
        <SwiperItem><Image className='bannerItem' src={CX1IMG}></Image></SwiperItem>
        <SwiperItem><Image className='bannerItem' src={CX2IMG}></Image></SwiperItem>
        <SwiperItem><Image className='bannerItem' src={CX3IMG}></Image></SwiperItem>
        <SwiperItem><Image className='bannerItem' src={CX4IMG}></Image></SwiperItem>
        <SwiperItem><Image className='bannerItem' src={CX5IMG}></Image></SwiperItem>
      </Swiper>
    </View>
  )
}

export default Demo;

