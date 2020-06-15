// pages/formation_page/map/index.js
Page({

   /**
    * 页面的初始数据
    */
   data: {

   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      this.setData({
         height: wx.getSystemInfoSync().windowHeight,　　//屏幕高度
         width: wx.getSystemInfoSync().windowWidth　　//屏幕宽度
      })
      var that = this;
      let id = options.id
      wx.request({
         url: 'http://152.32.226.171:8000/api/addresses/' + id,
         method: 'GET',
         data: {},
         success: res => {
            let data = res.data
            console.log(data)
            that.setData({
               mdata: res.data
            })
            wx.getLocation({
               type: "wgs84",
               success: function (res) {
                  //console.log(res.latitude);
                  that.setData({
                     latitude: res.latitude,
                     longitude: res.longitude,
                     markers: [{
                        latitude: data.lat,
                        longitude: data.lng
                     }]
                  })
                  var mapCtx = wx.createMapContext("map");
                  mapCtx.includePoints({
                     padding: [70,],
                     points: [{
                        latitude: data.lat,
                        longitude: data.lng
                     }, {
                        latitude: res.latitude,
                        longitude: res.longitude
                     }]
                  })
               }
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