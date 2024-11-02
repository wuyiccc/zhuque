import PageConstants from "@/infrastructure/constants/PageConstants";

export default defineAppConfig({
  pages: PageConstants.getPageList(),
  window: {
    // 下拉刷新时候的样式
    backgroundTextStyle: 'light',
    // 导航栏北京颜色
    navigationBarBackgroundColor: '#ff454e',
    navigationBarTitleText: 'zhuque',
    // 导航栏文字颜色
    navigationBarTextStyle: 'white',
  },
  // tabBar: {
  //   color: '#999',
  //   selectedColor: '#ff464e',
  //   list: [
  //   ]
  // }
})
