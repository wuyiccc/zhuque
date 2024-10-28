export default defineAppConfig({
  pages: [
    'pages/demo/demo',
    'pages/index/index'
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
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示',
    },
  },
})
