<template>
  <div class="container">
    <v-swiper></v-swiper>
    <div class="list">
      <ul>
        <li v-for="(img,index) in imageArr" :key="index">
          <img :src="img.url" />
          <div class="name">{{img.name}}</div>
          <div class="desc">{{img.desc}}</div>
          <div class="defaluicon">{{img.icon}}</div>
          <div class="pSummary">{{img.right}}</div>
        </li>
      </ul>
    </div>
    <!-- 剧集 -->
    <div class="juji">
      <div class="headerName">
        剧集
      </div>
      <div class="jujihd">
        <img src="https://liangcang-material.alicdn.com/prod/upload/1a973db6ed104afb8229c058a6f80d01.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1" alt="" width="375px" height="210px">
        <div class="jujiname">请赐我一双翅膀&gt;期待💥逆袭副本即将开启</div>
        <div class="jujides">鞠婧祎摸透监狱生存法则 为求自保奋力还击</div>
      </div>
      <div class="lists">
        <ul>
          <li v-for="(img,index) in imageArrs" :key="index">
          <img :src="img.url" width="123px" height="184px"/>
          <div class="jname">{{img.name}}</div>
          <div class="jdesc">{{img.desc}}</div>
          <div class="jdefaluicon">{{img.icon}}</div>
          <div class="jpSummary">{{img.right}}</div>
        </li>
        </ul>
      </div>
      <div class="btn">
        <div class="btn1" @click="navTojuji">
          <div class="text">进入剧集频道</div>
          <img src="@/images/jiantou.png" alt="">
        </div>
        <div class="btn2">
          <div class="text">换一换</div>
          <img src="@/images/shuaxin.png" alt="">
        </div>
      </div>
    </div>
    <!-- 电影 -->
    <v-movie></v-movie>
  </div>
</template>

<script>
import Swiper from "@/components/swiper/swiper";
import movie from "@/components/index/movie"
export default {
  data() {
    return {
      imageArr: [
        {
          url:
            "https://liangcang-material.alicdn.com/prod/upload/50368deb4c0244718702201b40f90fb8.gif?x-oss-process=image/resize,w_750/format,webp/interlace,1",
          name: "奔跑吧3·小短腿的春天",
          desc: '郑恺"电动马达腿"笑喷林峯',
          icon: "首播",
          right: "07-05期"
        },
        {
          url:
            "https://liangcang-material.alicdn.com/prod/upload/d56043e5f51c46ecadee4809bcb35d47.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1",
          name: "带爸留学⚠️惨遭毒手",
          desc: "蒋依依曾舜晞双双被打受重伤",
          icon: "预告",
          right: "更新至40集"
        },
        {
          url:
            "https://liangcang-material.alicdn.com/prod/upload/af38346e53c343a88f5447dc3ad04030.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1",
          name: "少年派·热播",
          desc: "张嘉译闫妮互怼练娃",
          icon: "首播",
          right: "41集全"
        },
        {
          url:
            "https://liangcang-material.alicdn.com/prod/upload/d78eed89654d4d9fbaeac76a1eff9dc6.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1",
          name: "街舞2·20点战队battle",
          desc: "燃炸！四大队长揪心淘汰爱将",
          icon: "上映",
          right: "更新至520集"
        }
      ],
      imageArrs:[
        {
          url:'https://r1.ykimg.com/050E00005D14B9EC1B7691A7F0024651?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"长安十二时辰",
          desc:'雷佳音千玺护长安',
          icon:'独播',
          right:'更新至6集'
        },
        {
          url:'https://liangcang-material.alicdn.com/prod/upload/dd3439860cba46edacfc2e7f5283257e.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"流淌的美好时光",
          desc:'马天宇郑爽超级甜',
          icon:'独播',
          right:'更新至3集'
        },
        {
          url:'https://liangcang-material.alicdn.com/prod/upload/2078001468ef4a3a899097dfc339e27f.gif?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"春花秋月",
          desc:'恋爱脑少年闯江湖',
          icon:'首播',
          right:'更新至4集'
        },
        {
          url:'https://r1.ykimg.com/050E00005CFF81D0859B5ECFFE0ED917?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"带着爸爸去留学",
          desc:'孙红雷爆笑陪读',
          icon:'独播',
          right:'更新至5集'
        },
        {
          url:'https://r1.ykimg.com/051600005D241DDA425BD93525860899?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"橙红年代 TV版",
          desc:'陈伟霆热血闯江湖',
          icon:'VIP',
          right:'42集全'
        },
        {
          url:'https://liangcang-material.alicdn.com/prod/upload/6e578e063a994312a13d3d20a3ba069c.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          name:"剧众围观",
          desc:'广告鬼才王瑞昌？',
          icon:'上映',
          right:'更新至8集'
        }
      ]
    };
  },
  components: {
    "v-swiper": Swiper,
    "v-movie":movie
  },
  methods: {
    navTojuji(){
      this.$router.replace('/tv')
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.list li {
  display: inline-block;
  flex: 1;
  width: 50%;
  flex-direction: column;
  position: relative;
}
.list img {
  width: 186px;
  height: 104px;
  margin-top: 10px;
}
.name {
  font-weight: 600;
  padding-left: 9px;
}
.desc {
  padding-left: 9px;
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
}
.defaluicon {
  font-size: 11px;
  background-color: rgba(249, 34, 83, 0.9);
  height: 16px;
  width: 30px;
  position: absolute;
  color: #ffffff;
  padding: 0 3px;
  right: 7px;
  top: 10px;
}
.pSummary {
  position: absolute;
  font-size: 11px;
  right: 7px;
  bottom: 70px;
  color: #ffffff;
  opacity: 1.2;
}
.headerName{
  font-size: 18px;
  font-weight:800;
  margin: 0 0 10px 10px;
  align-items: center 
}
.lists li{
  display: inline-block;
  flex: 1;
  width: 33.3%;
  flex-direction: column;
  position: relative;
}
.jujiname{
  padding-left: 9px;
  overflow: hidden;
}
.jujides{
  padding-left: 9px;
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
}
.jname{
  padding-left: 9px;
  overflow: hidden;
}
.jdesc{
  padding-left: 9px;
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
}
.jdefaluicon{
  font-size: 11px;
  color: #ffffff;
  background-color: rgba(249, 34, 83, 0.9);
  padding-left: 3px;
  width:30px ;
  height: 16px;
  position: absolute;
  top: 10px;
  right: 8px;
}
.jpSummary{
  line-height: 11px;
  color: #ffffff;
  font-size: 11px;
  width: 55.5px;
  height: 11px;
  position: absolute;
  bottom: 75px;
  right: 10px;
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
