import {Image, Text, View} from '@tarojs/components';
import CommonConstants from '@/infrastructure/constants/CommonConstants';
import styles from './index.module.less';

type Props = {

  populars: any[]
}

export default function (props: Props) {

  return (
    <View className={styles.container}>
      {
        props.populars.map((item) => {

          return <View key={item.id} className={styles.popularContainer}>
            <Image src={CommonConstants.DEFAULT_POPULAR_URL} className={styles.img} mode='widthFix'></Image>
            <Text className={styles.txt}>{item.title}</Text>
          </View>;
        })
      }
    </View>
  );
}
