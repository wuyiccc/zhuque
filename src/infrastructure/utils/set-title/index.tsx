import Taro from '@tarojs/taro';

export default class SetTitle {

  public static setTitle() {

    Taro.setNavigationBarTitle({
      title: '我是与平台无关的',
    });
  }
}
