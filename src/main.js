import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
const app = new Vue(App)
app.$mount()

// export default {
//   config: {
//     pages: [
//       '^pages/books/main'
//     ],
//     'window': {
//       'backgroundTextStyle': 'light',
//       'navigationBarBackgroundColor': '#000000',
//       'navigationBarTitleText': 'WeChatd',
//       'navigationBarTextStyle': 'white'
//     },
//     'tabBar': {
//       'list': [
//         {
//           pagePath: 'pages/books/main',
//           text: '图书',
//           iconPath: 'static/images/book.png',
//           selectedIconPath: 'static/images/book-active.png'
//         },
//         {
//           pagePath: 'pages/comments/main',
//           text: '内容区',
//           iconPath: 'static/images/other.png',
//           selectedIconPath: 'static/images/other-active.png'
//         },
//         {
//           pagePath: 'pages/detail/main',
//           text: '我的',
//           iconPath: 'static/images/me.png',
//           selectedIconPath: 'static/images/me-active.png'
//         },
//         {
//           pagePath: 'pages/me/main',
//           text: '我的',
//           iconPath: 'static/images/me.png',
//           selectedIconPath: 'static/images/me-active.png'
//         }
//       ]
//     }
//   }
// }
