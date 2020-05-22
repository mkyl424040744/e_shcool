var data = [{
   name: "快捷电话",
   details: "10分钟内专家回电",
   // iclass:"iconfont icon-yisheng",
   imageUrl: "../../images/phone.png",
   id: 0,
   url: ""
}, {
   name: "医药报销",
   details: "医保卡报销",
   imageUrl: "../../images/yibao.png",
   id: 4,
   url: "reimbursement_page"
}, {
   name: "病况咨询",
   details: "找名医 更准更放心",
   imageUrl: "../../images/yishen.png",
   id: 1,
   url: ""
}, {
   name: "门诊队列",
   details: "10分钟内专家回电",
   imageUrl: "../../images/duilie.png",
   id: 2,
   url: "formation_page"
}, {
   name: "药品选购",
   details: "10分钟内专家回电",
   imageUrl: "../../images/yaowan.png",
   id: 3,
   url: "medicineshop_page"
}, {
   name: "健康科普",
   details: "10分钟内专家回电",
   imageUrl: "../../images/kepu.png",
   id: 5,
   url: "healthScience_page"
}]

var health_science_data = [{
   name: "生活",
}, {
   name: "睡眠",
}, {
   name: "鼻炎",
}, {
   name: "生活",
}, {
   name: "睡眠",
}, {
   name: "鼻炎",
}, {
   name: "生活",
}, {
   name: "睡眠",
}, {
   name: "鼻炎",
}]

var health_science_card = [{
   id: 0,
   title: "健康的最新发现，完全颠覆你的认知！",
   logo: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
   content: "我们每个人的身体里都养着11条鱼，也就是我们的“五脏六腑”。为什么这么说呢，因为我们的身体70% 都是水，我们的血液里呢80% 都是水，五脏六腑等于泡在水里！。",
   label1: "健康知识",
   label2: "生活"
}, {
   id: 1,
   title: "柳叶刀 120 万人研究揭示：什么运动最有益身心健康？",
   logo: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
   content: "尽管有大量研究表明，运动确实会帮助塑造体形，还可以降低心脑血管疾病、肥胖、中风等疾病的风险，但运动与心理健康的关系却存在争议。今年 8 月，《柳叶刀-精神病学》发表的一项大样本研究明确指出：与不运动的人群相比，运动人群的心理压力更小，更不容易抑郁。",
   label1: "养生之道",
   label2: "生活"
}, {
   id: 2,
   title: "健康的最新发现，完全颠覆你的认知！",
   logo: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
   content: "我们每个人的身体里都养着11条鱼，也就是我们的“五脏六腑”。为什么这么说呢，因为我们的身体70% 都是水，我们的血液里呢80% 都是水，五脏六腑等于泡在水里！。",
   label1: "健康知识",
   label2: "生活"
}, {
   id: 3,
   title: "柳叶刀 120 万人研究揭示：什么运动最有益身心健康？",
   logo: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
   content: "尽管有大量研究表明，运动确实会帮助塑造体形，还可以降低心脑血管疾病、肥胖、中风等疾病的风险，但运动与心理健康的关系却存在争议。今年 8 月，《柳叶刀-精神病学》发表的一项大样本研究明确指出：与不运动的人群相比，运动人群的心理压力更小，更不容易抑郁。",
   label1: "养生之道",
   label2: "生活"
}]

var formation_data = [{
   id: 0,
   title: "广商医务室",
   nowLine: "3",
   expect: "15分钟",
   color: "red"
}, {
   id: 1,
   title: "康大校医务室",
   nowLine: "3",
   expect: "16分钟",
   color: "olive"
}, {
   id: 2,
   title: "广商医务室",
   nowLine: "3",
   expect: "15分钟",
   color: "blue"
}]
var sidebar = [{
   name: '推荐分类'
}, {
   name: '男科用药'
}, {
   name: '女科用药'
}, {
   name: '滋补保健'
}, {
   name: '神经系统'
},]
var drug = [{
   img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1482058620,2144351281&fm=26&gp=0.jpg',
   name: '感冒发烧',
   drug_name: '小儿感冒颗粒',
   price: 14.16,
   sales_volume: '150袋',
}, {
   img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588696479327&di=d798d549ee012d095ca63c11e227e473&imgtype=0&src=http%3A%2F%2Fi.mmyuer.com%2Fuploads%2Fallimg%2F190109%2F19-1Z1091H925K4.jpg',
   name: '口腔疾病',
   drug_name: '小儿感冒颗粒',
   price: 14.16,
   sales_volume: '150袋',
}, {
   img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588696446815&di=41a48ba22270a6e702bae510408ecbee&imgtype=0&src=http%3A%2F%2Fimg.258weishi.com%2Fshangpu%2F20141105%2F023d542f4d683e2588350f18f7ba0968.jpg',
   name: '抗菌消炎',
   drug_name: '小儿感冒颗粒',
   price: 14.16,
   sales_volume: '150袋',
}, {
   img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3918738017,434212196&fm=26&gp=0.jpg',
   name: '炎性肠病',
   drug_name: '小儿感冒颗粒',
   price: 14.16,
   sales_volume: '150袋',
}, {
   img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3013697353,696128686&fm=26&gp=0.jpg',
   name: '哮喘用药',
   drug_name: '小儿感冒颗粒',
   price: 14.16,
   sales_volume: '150袋',
}, {
   img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2754729767,2078204756&fm=26&gp=0.jpg',
   name: '跌打扭伤',
   drug_name: '小儿感冒颗粒',
   price: 14.16,
   specification: '10克x20袋/袋',
   disease: '扁桃体炎',
   sales_volume: '150袋',
   inventory: '150袋',
   label1: '中药',
   label2: '医保',
   indications: '清热解毒，凉血利咽，用于肺热所致的口咽干燥，急性扁桃体等。',
   usage: '清热解毒，凉血利咽，用于肺热所致的口咽干燥，急性扁桃体等。',
   taboo: '清热解毒，凉血利咽，用于肺热所致的口咽干燥，急性扁桃体等。'
}, {
   img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876759182,953774698&fm=26&gp=0.jpg',
   name: '血压计',
   drug_name: '小儿感冒颗粒',
   price: 14.16,
   sales_volume: '150袋',
}, {
   img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1909377048,733870920&fm=26&gp=0.jpg',
   name: '脱发白发',
   drug_name: '小儿感冒颗粒',
   price: 14.16,
   sales_volume: '150袋',
}, {
   img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588696335959&di=e12564bb7ee59c928082e4f74c22e77e&imgtype=0&src=http%3A%2F%2Fp3.pccoo.cn%2Fbbs%2F20150922%2F2015092211025076742003.jpg',
   name: '成人用品',
   drug_name: '小儿感冒颗粒',
   price: 14.16,
   sales_volume: '150袋',
}]

module.exports = {
   data: data,
   hsData: health_science_data,
   hsCard: health_science_card,
   ftData: formation_data,
   sidebar: sidebar,
   drug: drug
}