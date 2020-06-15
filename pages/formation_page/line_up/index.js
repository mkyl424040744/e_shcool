// pages/formation_page/line_up/index.js
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
      },
      id:''
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
   save:function(){
      let that = this
      let data =this.data.dictionaries
      console.log(data)
      wx.request({
         url: 'http://152.32.226.171:8000/queue/lineup/',
         method: 'POST',
         data: {
            name:data.name,
            sex:data.sex=='男生'?'1':'2',
            grade:data.grade,
            'class':data['class'],
            phone:data.phone,
            academy:data.number,
            dormitory:data.dorm.dorm,
            address:that.data.id
         },
         header: {
            'Content-Type': 'application/json',
            Authorization: 'JWT ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImNoZW5qaWF4aW5nIiwiZXhwIjoxNjIzNzMyNjM4LCJlbWFpbCI6ImNoZW5qaWF4aW5nQHFxLmNvbSJ9.SS5DqxWdT5FirH17oF05K5TWnV79qkPU_ybAfRQo5fU',
         },
         success: res => {
            console.log(res)
            wx.navigateBack({})
         }
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      console.log(options)
      let data = options
      this.setData({
         id: data.id,
         name: data.name
      })
      wx.setNavigationBarTitle({
         title:'排队'
      })
      
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {
      var p_i = wx.getStorageSync('prestored_information');
      // console.log(p_i)
      if (p_i) {
         this.setData({
            dictionaries: p_i
         })
      } else {
         wx.showToast({
            title: '可到个人设置信息',
            icon: "none",
            duration: 1800,
         })
      }
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