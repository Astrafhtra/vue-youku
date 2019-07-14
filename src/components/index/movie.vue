<template>
  <div class="container">
    <div class="title">电影</div>
    <div class="bgc">
      <img
        src="https://liangcang-material.alicdn.com/prod/upload/b37cebef49434e54ab0bb40e9b14c11e.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1"
        alt
      />
      <div class="pname">&lt;水怪&gt;东方神秘怪兽来袭！</div>
      <div class="pdesc">邪恶水猴子致命突袭</div>
      <div class="pSummary">8.0</div>
      <div class="singleicon">独播</div>
    </div>
    <div class="list">
      <ul>
        <li v-for="(img,index) in imageArr" :key="index">
          <img :src="img.url" />
          <div class="name">{{img.name}}</div>
          <div class="desc">{{img.desc}}</div>
          <div class="defaluicon">{{img.icon}}</div>
          <div class="psummary">{{img.right}}</div>
        </li>
      </ul>
    </div>
    <div class="btn">
        <div class="btn1">
          <div class="text">进入电影频道</div>
          <img src="@/images/jiantou.png" alt="">
        </div>
        <div class="btn2">
          <div class="text">换一换</div>
          <img src="@/images/shuaxin.png" alt="">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageArr:[
        {
          url:'https://r1.ykimg.com/051600005D0225011B7691B9BF0B6079?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"雪暴",
          desc:'张震廖凡深山雪战',
          icon:'vip',
          right:'8.4'
        },
        {
          url:'https://r1.ykimg.com/050E00005D1C68B8ADA7B27AED016D5E?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"扫毒2",
          desc:'优酷独家幕后记录',
          icon:'独播',
          right:'9.0'
        },
        {
          url:'https://r1.ykimg.com/050E00005D27F6FB8B743903D50BD279?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"狂暴巨兽",
          desc:'强森大战惊天巨兽',
          icon:'vip',
          right:'8.2'
        },
        {
          url:'https://r1.ykimg.com/051600005D007767859B5ED036004873?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"新河东狮吼",
          desc:'张震廖凡深山雪战',
          icon:'独播',
          right:'8.5'
        },
        {
          url:'https://r1.ykimg.com/051600005D23019C1B7691208A036F2E?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"精武陈真",
          desc:'名族英雄习武救国',
          icon:'独播',
          right:'7.8'
        },
        {
          url:'https://r1.ykimg.com/050E00005D05A3331B7691C153040282?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"狮子王",
          desc:'迪士尼真人电影赏',
          icon:'专题',
          right:'9.2'
        },
      ]
    };
  }
};
</script>

<style scoped>
.bgc {
  position: relative;
}
.title {
  font-weight: 700;
  font-size: 18px;
  margin: 0 0 10px 10px;
  margin-top: 20px;
}
.bgc img {
  width: 100%;
  height: 210px;
}
.pname,
.pdesc {
  padding-left: 9px;
}
.pdesc {
  margin-bottom: 20px;
  font-size: 13px;
  color: #999;
}
.pSummary {
  position: absolute;
  color: rgb(255, 102, 0);
  right: 10px;
  top: 180px;
  font-weight: bold;
  font-size: 11px;
  line-height: 11px;
}
.singleicon {
  background-color: rgba(249, 34, 83, 0.9);
  color: #ffffff;
  width: 30px;
  height: 16px;
  font-size: 11px;
  position: absolute;
  top: 10px;
  right: 10px;
  padding-left: 3px;
}
.list li{
  display: inline-block;
  flex: 1;
  width: 33.3%;
  flex-direction: column;
  position: relative;
}
.list img {
  width: 123px;
  height: 184px;
  margin-top: 10px;
}
.name {
  font-weight: 600;
  padding-left: 9px;
}
.desc {
  padding-left: 5px;
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
}
.defaluicon{
  position: absolute;
  background-color: rgba(249, 34, 83, 0.9);
  color: #ffffff;
  width: 30px;
  height: 16px;
  padding-left: 4px;
  top: 10px;
  right: 10px;
  font-size: 11px;
}
.psummary{
  line-height: 11px;
  font-size: 11px;
  color: rgb(255, 102, 0);
  width: 17px;
  height: 16px;
  text-align: right;
  position: absolute;
  bottom: 70px;
  right: 10px
}
.btn{
  display: flex;
}
.btn1,.btn2{
  width: 176px;
  height: 45px;
  display:flex;
  background-color: #f2f2f2;
  position: relative;
  border-radius: 6px;
  margin-left: 9px;
}
.btn1 img,.btn2 img{
  width: 12px;
  height: 12px;
  position: absolute;
}
.btn1 img{
  left: 130px;
  top: 24px
}
.btn2 img{
  left: 96px;
  top: 24px
}
.text{
  color: black;
  font-size: 12px;
  position: absolute;
  left: 55px;
  top: 21px;
}
</style>
