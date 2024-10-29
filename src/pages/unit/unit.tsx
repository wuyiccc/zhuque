import Taro from "@tarojs/taro";
import {useEffect} from "react";
import {Text, View} from '@tarojs/components'
import styles from './unit.module.less'

function Unit() {

  useEffect(() => {
    console.log(styles)
  }, []);

  const lineStyle = {
    // 转为小程序单位还是px, 单身等价于 rpx, 值会变
    fontSize: Taro.pxTransform(100),
    color: 'green'
  }

  return (
    <View className={styles.container}>
      <View>
        <Text className={styles.unitTrans}>单位转换</Text>
      </View>
      <View>
        <Text className={styles.unitNoTrans}>单位不转换</Text>
      </View>
      <View>
        <Text style={lineStyle}>行内样式</Text>
      </View>

      <View>
        <Text className='title'>在局部样式中编写的全局样式</Text>
      </View>

      <View className={styles.bgImg}></View>
    </View>
  )
}

export default Unit;