// pages/ceso/index.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      nevid: 0
   },
   scroll: function (e) {
      let id = e.currentTarget.dataset.id
      this.setData({
         nevid: id,
         content: this.data.left[id].medicine_set
      })
   },
   onclick:function(e){
      let id = e.currentTarget.dataset.id
      wx.navigateTo({
         url: 'drug_particulars/index?id='+id,
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      
      this.setData({
         height: wx.getSystemInfoSync().windowHeight,　　//屏幕高度
         width: wx.getSystemInfoSync().windowWidth　　//屏幕宽度
      })
      wx.request({
         url: 'http://152.32.226.171:8000/api/medicines/',
         method: 'GET',
         data: {},
         success: res => {
            console.log(res.data)
            this.setData({
               left: res.data,
               content: res.data[this.data.nevid].medicine_set
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