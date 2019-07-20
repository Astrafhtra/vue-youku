<template>
  <div class="container">
    <div class="hottv">
      <div class="hotname">最新热剧🔥</div>
      <div class="lists">
        <ul>
          <li v-for="(img,index) in imageArrs" :key="index">
            <img :src="img.url" width="123px" height="184px" />
            <div class="jname">{{img.name}}</div>
            <div class="jdesc">{{img.desc}}</div>
            <div class="jdefaluicon">{{img.icon}}</div>
            <div class="jpSummary">{{img.right}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="wettv">
      <div class="name">春花秋月🍭今夏最甜</div>
      <div class="list">
        <ul>
          <li v-for="(img,index) in imageArr" :key="index">
            <img :src="img.url" />
            <div class="name">{{img.name}}</div>
            <div class="desc">{{img.desc}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageArr: [
        {
          url:
            "https://liangcang-material.alicdn.com/prod/upload/2ede060111f14e75916f2f01c9b703fa.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1",
          name: "少女心🍬深夜悄悄话",
          desc: '春花秋月被窝里打赌玩游戏',
        },
        {
          url:
            "https://liangcang-material.alicdn.com/prod/upload/a82dddc68fd748568a1f402c921f7457.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1",
          name: "反差萌🍋撩不动的直男",
          desc: "春花狂撩萧白反被套路",
        },
        {
          url:
            "https://liangcang-material.alicdn.com/prod/upload/b05d9431914e418e9ad761751484d0ec.gif?x-oss-process=image/resize,w_750/format,webp/interlace,1",
          name: "苏炸🌙默契满分",
          desc: "春花秋月片场神同步超有爱",
        },
        {
          url:
            "https://vthumb.ykimg.com/054101015D1F933E8B7475903954CC86?x-oss-process=image/resize,w_750/format,webp/interlace,1",
          name: "高甜🌸护花使者",
          desc: "温柔萧白上线贴心守护春花",
        }
      ],
      imageArrs: [
        {
          url: "https://r1.ykimg.com/050E00005D1EF591859B5E71F303A90B",
          name: "春花秋月",
          desc: "恋爱脑少女闯江湖",
          icon: "独播",
          right: "更新至14集"
        },
        {
          url: "https://r1.ykimg.com/050E00005D1EF043859B5E6E0302BA46",
          name: "请赐我一双翅膀",
          desc: "炎亚纶鞠婧祎破解迷局",
          icon: "独播",
          right: "更新至20集"
        },
        {
          url:
            "https://liangcang-material.alicdn.com/prod/upload/cf0e87ce966d4d168ddf40a09ad0075e.gif",
          name: "美好时光TV版",
          desc: "马天宇郑爽超级甜",
          icon: "首播",
          right: "更新至25集"
        },
        {
          url: "https://r1.ykimg.com/050E00005CFF97001B76919E720A3776",
          name: "当她恋爱时",
          desc: "百变少女恋上不羁阔少",
          icon: "独播",
          right: "30集全"
        },
        {
          url: "https://r1.ykimg.com/050E00005D0375C41B7691BC280F0B66",
          name: "乡亲乡爱",
          desc: "大学生村官回村致富路",
          icon: "VIP",
          right: "更新至32集"
        },
        {
          url: "https://r1.ykimg.com/050E00005D148C631B7691A6500C4355",
          name: "绝路逢生",
          desc: "杨烁挑战一人分饰两角",
          icon: "上映",
          right: "38集全"
        }
      ]
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
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
  /* padding-left: 5px; */
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
  padding-left: 9px;
}
.hotname {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px 10px;
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

.lists li {
  display: inline-block;
  flex: 1;
  width: 33.3%;
  flex-direction: column;
  position: relative;
}
.jujiname {
  padding-left: 9px;
  overflow: hidden;
}
.jujides {
  padding-left: 9px;
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
}
.jname {
  padding-left: 9px;
  overflow: hidden;
}
.jdesc {
  padding-left: 9px;
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.jdefaluicon {
  font-size: 11px;
  color: #ffffff;
  background-color: rgba(249, 34, 83, 0.9);
  padding-left: 3px;
  width: 30px;
  height: 16px;
  position: absolute;
  top: 10px;
  right: 8px;
}
.jpSummary {
  line-height: 11px;
  color: #ffffff;
  font-size: 11px;
  width: 55.5px;
  height: 11px;
  position: absolute;
  bottom: 75px;
  right: 10px;
}
</style>
