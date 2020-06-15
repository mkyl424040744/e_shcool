var data = require('../../data/data.js')

Page({

   /**
    * 页面的初始数据
    */
   data: {
      hp_img: "../../images/b1.jpg",
      flog: false,
      colors: ['cyan', 'blue', 'red', 'orange', 'olive', 'green']
   },
   searchIcon: function (e) {
      console.log(e.detail.value)
   },
   urltiaoz: function (e) {
      // if()
      console.log(e.currentTarget.dataset.url)
      if (e.currentTarget.dataset.url == 'kjdh') {
         wx.showModal({
            title: '快捷电话',
            content: '0755-66635068',
            showCancel: true,
            cancelColor: '#333',
            confirmText: '拨打',
            confirmColor: '#405f80',
            success: function (res) {
               // console.log(res)
               if (res.confirm) {
                  wx.makePhoneCall({
                     phoneNumber: '0755-66635068',
                  })
               }
            }
         })
      }

   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      console.log(data)
      this.setData({
         square_data: data.data
      });
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function () {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function () {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function () {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function () {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function () {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function () {

   }
})