export default class SetTitle {

  public static setTitle() {

    wx.setNavigationBarTitle({
      title: '我是微信小程序设置的title'
    });
  }
}
