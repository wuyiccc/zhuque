import classNames from 'classnames';
import {View} from '@tarojs/components';
import React, {memo, useEffect} from 'react';
import styles from './index.module.less';

type Props = {
  type: string
  children?: React.ReactNode
  onBtnClick?: Function
}

const ZQButton = memo(function (props: Props) {

  useEffect(() => {


    return () => {

    };
  }, []);


  const {type = 'default', children} = props;

  const cn = classNames(styles.zqButton, styles[type]);

  const handleBtnClick = () => {

    console.log('我是index.h5.tsx组件, 这里可以执行h5专有的api');
    props.onBtnClick && props.onBtnClick();
  };

  return <View className={cn} onClick={handleBtnClick}>{children}-h5</View>;
});

export default ZQButton;
