<template>
    <div class="me-wrap">
      <section class="me-userPic">
        <img :src="userinfo.avatarUrl" alt="">
        <p @click="goLogin">{{userinfo.nickName}}</p>
      </section>
      <YearProgress></YearProgress>
      <button class="me-btn" @click="btnBook">添加图书</button>
    </div>
</template>

<script>
// import qcloud from 'wafer2-client-sdk'
import YearProgress from '@/components/YearProgress'
import {post, showModal} from '../../utils/index'
export default {
  components: {
    YearProgress
  },
  data () {
    return {
      userinfo: {
        avatarUrl: '../../../static/images/unlogin.png',
        nickName: '点击登录'
      },
      userId: {}
    }
  },
  methods: {
    // 点击添加图书
    btnBook () {
      wx.scanCode({
        success: res => {
          if (res.result) {
            this.addBook(res.result)
          }
        }
      })
    },
    async addBook (isbn) {
      const res = await post('/weapp/addbook', {isbn, openid: this.userId.openid})
      showModal('添加成功', `${res.title}添加成功`)
    },
    // 去登录
    goLogin () {
      let user = wx.getStorageSync('userinfo')
      if (!user) {
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  this.globalData.userInfo = res.userInfo
                  wx.setStorageSync('userinfo', res.userInfo)
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                  }
                }
              })
            }
          }
        })
      }
    },
    globalData: {
      userInfo: null
    }
  },
  onLoad () {
    const self = this
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              js_code: res.code,
              appid: 'wxdb1254abc1df006a',
              secret: 'a21ced2e59ca2fa1168ffe920336b254',
              grant_type: 'authorization_code'
            },
            success: function (res) {
              self.userId = res.data
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      },
      fail: function (res) {
        console.log('登录失败：' + res.errMsg)
      }
    })
  },
  onShow () {
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>

<style lang="scss">
.me-wrap {
  padding: 0 30rpx;
  .me-userPic {
    margin-top: 100rpx;
    text-align: center;
    img {
      width: 150rpx;
      height: 150rpx;
      margin: 20rpx;
      border-radius: 50%;
    }
  }
}
</style>
