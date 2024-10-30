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
  tabBar: {
    color: '#999',
    selectedColor: '#ff464e',
    list: [
      {
        text: '首页',
        pagePath: PageConstants.PAGE_HOME,
        iconPath: './asset/image/tabbar/home.png',
        selectedIconPath: './asset/image/tabbar/homeSelect.png'
      },
      {
        text: '分类',
        pagePath: PageConstants.PAGE_CATEGORY,
        iconPath: './asset/image/tabbar/category.png',
        selectedIconPath: './asset/image/tabbar/categorySelect.png'
      },
      {
        text: '购物车',
        pagePath: PageConstants.PAGE_CART,
        iconPath: './asset/image/tabbar/cart.png',
        selectedIconPath: './asset/image/tabbar/cartSelect.png'
      },
      {
        text: '我的',
        pagePath: PageConstants.PAGE_PROFILE,
        iconPath: './asset/image/tabbar/profile.png',
        selectedIconPath: './asset/image/tabbar/profileSelect.png'
      }
    ]
  }
})
