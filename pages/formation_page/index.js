var data = require('../../data/data.js')

Page({

   /**
    * 页面的初始数据
    */
   data: {
      colors: ['red', 'olive','blue']
   },
   mapclick: function (e) {
      console.log(e.currentTarget.dataset.id);
      wx.navigateTo({
         url: './map/index?id=' + e.currentTarget.dataset.id,
      })
   },
   onclick: function (e) {
      console.log(e);
      let v = e.currentTarget
      wx.navigateTo({
         url: './line_up/index?id=' + v.id + '&name='+v.dataset.name,
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      wx.request({
         url: 'http://152.32.226.171:8000/queue/list/',
         method: 'GET',
         data: {},
         success: res => {
            console.log(res.data.data)
            this.setData({
               ftData: res.data.data
            })
         }
      })
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