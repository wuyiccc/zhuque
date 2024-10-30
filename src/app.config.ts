export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/cart/index',
    'pages/category/index',
    'pages/profile/index',

  ],
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
        pagePath: 'pages/home/index',
        iconPath: './asset/image/tabbar/home.png',
        selectedIconPath: './asset/image/tabbar/homeSelect.png'
      },
      {
        text: '分类',
        pagePath: 'pages/category/index',
        iconPath: './asset/image/tabbar/category.png',
        selectedIconPath: './asset/image/tabbar/categorySelect.png'
      },
      {
        text: '购物车',
        pagePath: 'pages/cart/index',
        iconPath: './asset/image/tabbar/cart.png',
        selectedIconPath: './asset/image/tabbar/cartSelect.png'
      },
      {
        text: '我的',
        pagePath: 'pages/profile/index',
        iconPath: './asset/image/tabbar/profile.png',
        selectedIconPath: './asset/image/tabbar/profileSelect.png'
      }
    ]
  }
})
