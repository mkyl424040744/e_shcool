// pages/condition_consulting/index.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      InputBottom: 0,
      content: [],
      ctext: ''
   },

   InputFocus(e) {
      this.setData({
         InputBottom: e.detail.height
      })
   },
   InputBlur(e) {
      this.setData({
         InputBottom: 0
      })
   },
   input: function (e) {
      this.setData({
         ctext: e.detail.value
      })
   },
   send: function () {
      let add = this.data.ctext
      let newdata = this.data.content
      newdata.push(add)
      this.setData({
         ctext: '',
         content: newdata
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {

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