import CommonConstants from '@/infrastructure/constants/CommonConstants';
import {Image, View} from '@tarojs/components';
import styles from './index.module.less';

// type Props = {

  // recommend: []
// }

export default function () {


  return <View className={styles.container}>
    <View className={styles.topContainer}>
      <Image className={styles.topImg} src={CommonConstants.DEFAULT_URL}></Image>
    </View>
    <View className={styles.midContainer}>
      <View className={styles.mlContainer}>
        <Image src={CommonConstants.DEFAULT_LEFT_IMG} className={styles.img}></Image>
      </View>

      <View className={styles.mrContainer}>
        <View className={styles.mr1Container}>
          <Image src={CommonConstants.DEFAULT_RIGHT_IMG} className={styles.img}></Image>
        </View>
        <View className={styles.mr2Container}>
          <Image src={CommonConstants.DEFAULT_RIGHT_IMG2} className={styles.img}></Image>
        </View>
      </View>
      <View></View>
    </View>
    <View className={styles.bottomContainer}>
      <Image className={styles.bottomImg} src={CommonConstants.DEFAULT_URL}></Image>
    </View>
  </View>;
}
