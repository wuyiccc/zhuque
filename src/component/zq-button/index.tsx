import classNames from 'classnames';
import {View} from '@tarojs/components';
import React, {memo} from 'react';
import styles from './index.module.less';

type Props = {
  type: string
  children?: React.ReactNode
  onBtnClick?: Function
}

const ZQButton = memo(function (props: Props) {


  const {type = 'default', children} = props;

  const cn = classNames(styles.zqButton, styles[type]);

  const handleBtnClick = () => {

    props.onBtnClick && props.onBtnClick();
  };

  return <View className={cn} onClick={handleBtnClick}>{children}</View>;
});

export default ZQButton;
