// pages/ceso/index.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      nevid: 0,
      TabCur: 0,
      MainCur: 0,
      VerticalNavTop: 0,
      load: true,
      list:[]
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
   tabSelect(e) {
      this.setData({
         TabCur: e.currentTarget.dataset.id,
         MainCur: e.currentTarget.dataset.id,
         VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
      })
   },
   VerticalMain(e) {
      let that = this;
      let list = this.data.list;
      let tabHeight = 0;
      if (this.data.load) {
         for (let i = 0; i < list.length; i++) {
            let view = wx.createSelectorQuery().select("#main-" + list[i].id);
            view.fields({
               size: true
            }, data => {
               list[i].top = tabHeight;
               tabHeight = tabHeight + data.height;
               list[i].bottom = tabHeight;
            }).exec();
         }
         that.setData({
            load: false,
            list: list
         })
      }
      let scrollTop = e.detail.scrollTop + 20;
      for (let i = 0; i < list.length; i++) {
         if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
            that.setData({
               VerticalNavTop: (list[i].id - 1) * 50,
               TabCur: list[i].id
            })
            return false
         }
      }
   },
   onLoad: function (options) {
      wx.showLoading({
         title: '加载中...',
         mask: true
      });
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
            let data = res.data
            let list = [{}];
            for (let i = 0; i < data.length; i++) {
               list[i] = {};
               // list[i].name = String.fromCharCode(65 + i);
               list[i].name = i;
               list[i].id = i;
            }
            this.setData({
               left: data,
               content: data[this.data.nevid].medicine_set,
               list: list,
               listCur: list[0]
            })
         }
      })
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {
      wx.hideLoading()
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