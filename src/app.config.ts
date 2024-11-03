import PageConstants from '@/infrastructure/constants/PageConstants';

export default defineAppConfig({
  pages: PageConstants.getPageList(),
  window: {
    // 下拉刷新时候的样式
    backgroundTextStyle: 'light',
    // 导航栏北京颜色
    navigationBarBackgroundColor: '#ff464e',
    navigationBarTitleText: 'zhuque',
    // 导航栏文字颜色
    navigationBarTextStyle: 'white',
  },
  tabBar: {
    color: '#999',
    selectedColor: '#ff464e',
    list: [
      {
        text: '首页',
        pagePath: PageConstants.PAGE_HOME,
        iconPath: 'asset/image/tabbar/home.png',
        selectedIconPath: 'asset/image/tabbar/home_select.png'
      },
      {
        text: '分类',
        pagePath: PageConstants.PAGE_CATEGORY,
        iconPath: 'asset/image/tabbar/category.png',
        selectedIconPath: 'asset/image/tabbar/category_select.png'
      },
      {
        text: '购物车',
        pagePath: PageConstants.PAGE_CART,
        iconPath: 'asset/image/tabbar/cart.png',
        selectedIconPath: 'asset/image/tabbar/cart_select.png'
      },
      {
        text: '我的',
        pagePath: PageConstants.PAGE_MINE,
        iconPath: 'asset/image/tabbar/mine.png',
        selectedIconPath: 'asset/image/tabbar/mine_select.png'
      }

    ]
  }
});
