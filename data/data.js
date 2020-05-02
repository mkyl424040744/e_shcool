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

module.exports = {
   data: data,
   hsData: health_science_data,
   hsCard: health_science_card,
   ftData: formation_data
}