import {useEffect, useState} from 'react';
import classNames from 'classnames';
import {View} from '@tarojs/components';
import styles from './index.module.less';

type Props = {
  titles: string[];
  onTabClick?: Function,
}

export default function (props: Props) {

  const [currentIndex, setCurrentIndex] = useState<number>(0);


  useEffect(() => {
    setCurrentIndex(0);
  }, []);


  const onTabClick = (index: number) => {

    setCurrentIndex(index);

    props.onTabClick && props.onTabClick(index);
  };

  return <View className={styles.container}>
    {
      props.titles.map((item, index) => {

        let cs: any;
        if (currentIndex === index) {
          cs = classNames(styles.tabItem, styles.active);
        } else {
          cs = classNames(styles.tabItem);
        }
        return <View className={cs} key={index} onClick={() => onTabClick(index)}>
          {item}
        </View>;
      })
    }
  </View>;
}
