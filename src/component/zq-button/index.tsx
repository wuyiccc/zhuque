import {useLoad, useReady, useDidShow} from "@tarojs/taro";
import classNames from "classnames";
import {View} from "@tarojs/components";
import React, {memo, useEffect} from "react";
import styles from './index.module.less';

type Props = {
  type: string
  children?: React.ReactNode
  onBtnClick?: Function
}

const ZQButton = memo(function (props: Props) {

  useEffect(() => {

    console.log('组件挂载完成会回调');

    return () => {

      console.log('组件卸载的时候回调');
    };
  }, []);

  useLoad(() => {
    console.log('useLoad');
  });

  useDidShow(() => {
    console.log('useDidShow');
  });

  useReady(() => {
    console.log('useReady');
  });

  const {type = 'default', children} = props;

  const cn = classNames(styles.zqButton, styles[type]);

  const handleBtnClick = () => {

    props.onBtnClick && props.onBtnClick();
  };

  return <View className={cn} onClick={handleBtnClick}>{children}</View>;
});

export default ZQButton;
