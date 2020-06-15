// pages/personal/set/index.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      dictionaries: {
         'college': '',
         'grade': '',
         'class': '',
         'number': '',
         'sex': '男生',
         'name': '',
         'dorm': '',
         'phone': ''
      }
   },
   set_value: function (e) {
      let newdi = this.data.dictionaries
      // console.log(e.currentTarget.dataset.name)
      newdi[e.currentTarget.dataset.name] = e.detail.value
      this.setData({
         dictionaries: newdi
      })
      // console.log(this.data.dictionaries)
   },
   setsex: function (e) {
      // console.log(e.detail.value)
      let newdi = this.data.dictionaries
      newdi['sex'] = e.detail.value
      this.setData({
         dictionaries: newdi
      })
      // console.log(this.data.dictionaries)
   },
   save: function () {
      wx.setStorageSync('prestored_information', this.data.dictionaries);
      wx.showToast({
         title: '保存成功',
         mask:true,
         complete: function () {
            setTimeout(function(){
               wx.navigateBack({})
            },1500)
         }
      })
   },
   onLoad: function (options) {
      var p_i = wx.getStorageSync('prestored_information');
      // console.log(p_i)
      if (p_i) {
         this.setData({
            dictionaries: p_i
         })
      }
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