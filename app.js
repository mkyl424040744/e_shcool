
//app.js
App({
  onLaunch: function () {
     // 获取用户信息
     wx.getSetting({
        success: res => {
           if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                 success: res => {
                    // 可以将 res 发送给后台解码出 unionId
                    this.globalData.userInfo = res.userInfo
                    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                    // 所以此处加入 callback 以防止这种情况
                    if (this.userInfoReadyCallback) {
                       this.userInfoReadyCallback(res)
                    }
                 }
              })
           }
        }
     })

     let jwt_token = wx.getStorageSync('jwt_token')
     if (jwt_token) {
        //首先到服务器查询是否是登录状态
        wx.request({
           url: this.globalData.apiBase + '/users/1/',
           header: {
              Authorization: 'JWT ' + jwt_token,
           },
           success: res => {
              console.log(res)
              if (res.data.detail) {
                 //登录失效了
                 wx.showToast({
                    title: '登录已失效，请前往个人中心登录',
                    icon: 'none',
                    duration: 2000
                 })
              } else {
                 if (res.data.id) {
                    this.globalData.isLogin = true
                    this.globalData.userProfile = res.data
                 }
              }
           },
           fail: err => {
              wx.showToast({
                 title: '连接服务器失败',
                 icon: 'none'
              })
           }
        })
     }
  },
  globalData: {
     userInfo: null,
     apiBase: 'http://127.0.0.1:8000/api/v1',
     isLogin: false,
     userProfile: null
  }
})