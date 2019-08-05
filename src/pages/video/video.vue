<template>
  <div class="contaienr">
    <div class="header">
      <div class="lefticon" @click="ShowSideBar">
        <img src="@/images/users.png" alt="" width="22px" height="20px">
      </div>
      <div class="middleicon" @click="Tohome">
        <img src="@/images/logo2.png" alt="" width="75px" height="14px">
      </div>
      <div class="searchicon">
        <img src="@/images/search2.png" alt="" width="22px" height="20px">
      </div>
      <div class="usersicon">
        <img src="@/images/my.png" alt="" width="22px" height="22px">
      </div>
    </div>
    <div class="video">
      <video src="https://resources.ninghao.net/landrover/norse-power-480-v3.mp4" controls="controls"></video>
      <div class="button">
          打开优酷APP,观看47分钟完整版
      </div>
    </div>
    <!-- 简介 -->
    <div class="jianjie">
      <div class="moduleName">
        <div class="only">独播</div>
        <div class="online">
          长安十二时辰
        </div>
        <div class="moreicon">
          <span>简介</span>
          <img src="@/images/downjt.png" alt="">
        </div>
      </div>
      <div class="brief-core">
        <img src="@/images/fire.png" alt="" width="12px" height="12px">
        <div class="hot">热度 9329</div>
        <span class="divide">/</span>
        <div class="score">9.5</div>
        <span class="divide">/</span>
        <div class="type">悬疑</div>
        <span class="divide">/</span>
        <div class="up">更新至29集</div>
      </div>
      <div class="brief-btn">
        <img src="@/images/comment.png" alt="" width="24px" height="24px" class="commentImg">
        <div class="comment">1.6万热评</div>
        <img src="@/images/jiqing.png" alt="" width="50px" height="24px" class="jiqing">
        <img src="@/images/download.png" alt="" width="24px" height="24px" class="download">
        <img src="@/images/share.png" alt="" width="24px" height="23px">
      </div>
      <!-- 选集 -->
      <div class="selects">
        <div class="selectName">选集</div>
        <div class="list">
          <ul class="list-ul">
            <li v-for="(item,index) in Nums" :key="index">{{item}}</li>
          </ul>
        </div>
        <div class="adv">
          <img src="@/images/adv.png" alt="" width="100%" height="63px">
        </div>
      </div>
      <!--  明星 -->
      <div class="star">
        <ul>
          <li v-for="(star,index) in stars" :key="index">
            <img :src="star.starUrl" alt="" width="54px" height="54px">
            <div class="personate">{{star.starPN}}</div>
            <div class="post">{{star.starPost}}</div>
          </li>
        </ul>
      </div>
      <!-- 猜你喜欢 -->
      <div class="shouldLike">
        <div class="likeTitle">猜你喜欢</div>
        <div class="likeVideo">
          <ul>
            <li v-for="(item,index) in Video" :key="index">
              <img :src="item.url" alt="">
              <div class="LName">{{item.Name}}</div>
              <div class="Ldesc">{{item.desc}}</div>
              <div class="Ljuji">{{item.juji}}</div>
              <div class="watch">{{item.watch}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="Vdbtn">
          <span class="BtnName">换一换</span>
          <img src="@/images/shuaxin.png" alt="">
      </div>
      <div class="advC">
        <img src="https://ykimg.alicdn.com/product/DetailImage/2019-07-12/855f3437df1c4a2a3b73d326d0b99e60.png" alt="">
      </div>
      <!-- 评论 -->
      <div class="Comment">
        <div class="Comment-title">
          评论
        </div>
        <div class="input">
          <img src="https://static.youku.com/lvip/img/avatar/50/19.png" alt="">
          <input type="text" id="CommentInput" placeholder="已有12条评论,快来说说你的感想吧" v-show="showInput">
          <textarea name="" id="" cols="30" rows="10" width="100px" height="100px" v-show="!showInput"></textarea>
        </div>
        <div class="Comment-content">
          <div class="C-list">
            <ul>
              <li v-for="(item,index) in Comment" :key="index">
                <div class="C-user">
                  <img :src="item.url" alt="">
                </div>
                <div class="content">
                  <div class="UserName">{{item.userName}}</div>
                  <div class="time">{{item.time}}</div>
                  <div class="context"></div>
                  <div class="Favorite">
                    <div class="like">
                      <img :src="item.like" alt="">
                      <!-- <span>{{item.Like-count}}</span> -->
                    </div>
                    <div class="dislike">
                      <img :src="item.dislike" alt="">
                      <!-- <span>{{item.dislike}}</span> -->
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <v-sideBar></v-sideBar>
  </div>
</template>

<script>
import sideBar from '@/components/siderBar/siderbar.vue'
import { mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  data() {
    return {
      showInput:false,
      Nums:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
      stars:[
        {
          starUrl:'https://r1.ykimg.com/051300005C2077468B2ABE089C0B3094',
          starPN:'蒋家骏',
          starPost:'导演'
        },
        {
          starUrl:'https://image.planet.youku.com/img/100/24/60867/i_1495614560867_3b6afe4834f47710114fe31560f079cf_b_w100h100_face_w100h100_x33y18w42h55c1.jpg',
          starPN:'杨烁',
          starPost:'饰陆淮'
        },
        {
          starUrl:'https://image.planet.youku.com/img/100/31/87825/i_1509441887825_3b2db60ee7b880df3afe8211f9f45db7_b_w330h332_face_w330h332_x93y72w125h178c1.jpg',
          starPN:'古力娜扎',
          starPost:'饰沈忆恩'
        },
        {
          starUrl:'https://image.planet.youku.com/img/100/12/46325/i_1520832746325_23adf2480d57c8da9550d02506437477_b_w150h150_face_w150h150_x54y43w54h71c1.jpg',
          starPN:'徐正溪',
          starPost:'饰秦也'
        },
        {
          starUrl:'https://image.planet.youku.com/img/100/23/82365/i_1503468282365_c5d7e726cb5d927c48d25f7e610ef910_b_w150h150_face_w150h150_x32y24w63h85c1.jpg',
          starPN:'赵韩樱子',
          starPost:'饰岑未'
        },
        {
          starUrl:'https://dl-oss-daoda.youku.com/0C01000058F980170B221B0518B10133',
          starPN:'王东',
          starPost:'饰墨许'
        },
        {
          starUrl:'https://r1.ykimg.com/051300005D314EE0AFB4E3083F0538B4',
          starPN:'沈东军',
          starPost:'饰霍泽宇'
        },
      ],
      Video:[
        {
          url:'https://r1.ykimg.com/053400005D1422E0425BD9189FF77E87?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          Name:'隐秘动机',
          desc:'未来战士揭露惊天阴谋',
          juji:'13集全',
          watch:'APP观看'
        },
        {
          url:'https://r1.ykimg.com/053440005CADA7C21B7691E719013E3F?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          Name:'如果以为可以这样爱 TV版',
          desc:'刘诗诗 佟大为企鹅CP',
          juji:'43集全',
          watch:'APP观看'
        },
        {
          url:'https://r1.ykimg.com/053440005CC2A66E859B5DA5D708007D?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          Name:'爱上你,治愈我',
          desc:'窦骁上演都市治愈大戏',
          juji:'40集全',
          watch:'APP观看'
        },
        {
          url:'https://r1.ykimg.com/053440005C875233859B5ED08C052344?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          Name:'只为遇见你 TV版',
          desc:'张铭恩文咏珊再续童话',
          juji:'53集全',
          watch:'APP观看'
        },
        {
          url:'https://r1.ykimg.com/050E0000568DFCB567BC3C08590C1B76?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          Name:'神经枪',
          desc:'爆笑神经枪脑洞系列剧',
          juji:'更新至10集',
          watch:'APP观看'
        },
        {
          url:'https://r1.ykimg.com/050E0000520593F067583916B70ACCA4?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          Name:'守着阳光守着你',
          desc:'明道陈乔恩守望爱情',
          juji:'34集全',
          watch:'APP观看'
        },
        {
          url:'https://r1.ykimg.com/053400005D369616425BD91F5BFF15D4?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          Name:'滚滚红尘',
          desc:'秦岚郑家颖生死半生缘',
          juji:'36集全',
          watch:'APP观看'
        },
        {
          url:'https://r1.ykimg.com/053400005D241DB3425BD93525425F6F?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          Name:'封神演义 TV版',
          desc:'王丽坤罗晋重现经典',
          juji:'',
          watch:'APP观看'
        },
        {
          url:'https://r1.ykimg.com/050E00005192F976670C4A1AD80CA6D2?x-oss-process=image/resize,w_750/format,webp/interlace,1',
          Name:'新妓生转',
          desc:'韩国艺伎身世之谜',
          juji:'52集全',
          watch:'APP观看'
        },
      ],
      Comment:[
        {
          
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'hideSideBar'
    ])
  },
  components:{
    'v-sideBar':sideBar
  },
  methods: {
    ShowSideBar(){
      this.$store.dispatch('setHideBar',true)
    },
    Tohome(){
      this.$router.push('/')
    }
  },
}
</script>

<style lang="stylus" scoped>
  .contaienr
    z-index 10001
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background-color #fff
  .header
    width 100vw
    height 44px
    display flex
    background-color #fff
    // margin-top 10px
    .lefticon,.usersicon
      position relative
      flex 1
    .middleicon 
      flex 5
      position relative
    .searchicon
      position relative
      flex 2
    .lefticon
      margin-left 10px
    .middleicon img 
      position absolute
      left 50%
      top 15px
    .searchicon img 
      position absolute
      left 40%
      top 12px
    .usersicon img ,.lefticon img 
      position absolute
      top 12px
  .video 
    video 
      width 100vw
      height 211px
    .button 
      width 95%
      height 41px 
      line-height 41px
      text-align center
      border 1px slide #2692ff
      border-radius 5px
      margin-left 8px
      margin-top 15px
      background-color #3882ff
      color #ffffff
      font-weight 600
      position relative   
  .moduleName
    width 100vw
    height 24px
    display flex
    padding-top 18px
    position relative
    .only
      color #ffffff
      font-size 11px
      background-color #f92253
      padding 0 4px
      border-radius 3px
      height 16px
      text-align center
      margin-top 6px
      margin-left 9px
    .online
      color #333
      font-size 18px
      padding 1px 4px
      font-weight 800
    .moreicon
      position absolute
      right 0px
      width 54.75px 
      height 20px
      font-size 8px
      img 
        width 12px  
        height 12px
        margin-top 10px
  .brief-core
    width 100vw
    height 20px
    display flex
    font-size 8px
    opacity .7
    position relative
    margin 3px
    padding-left 9px
    margin-top 30px
    .divide
      margin 3px
    img 
      margin-top 3px
  .brief-btn  
    width 100vw
    height 24px
    display flex
    font-size 8px
    text-align center
    line-height 24px
    padding-left 9px  
    .comment
      padding-left 3px
      margin-right 12px
    .jiqing
      margin-right 120px
    .download
      margin-right 50px
  .selects
    width 100%
    padding-left 9px
    margin-top 20px
    border-top 1px solid 
    .selectName
      margin-top 25px
      font-size 16px
      font-weight 700
    .list
      margin-top 28px
      width 100%
      height 77px
      // overflow-y: hidden
      display flex
      overflow-x: scroll 
      .list-ul
        display flex
        li
          float left
          width 57px 
          height 57px 
          line-height 57px
          text-align center
          background-color #f5f5f5
          border-radius 4px  
          color #333
          margin 0 15px 20px 0  
  .star 
    display flex
    overflow-x: scroll 
    ul
      display flex
      li  
        float left
        width 54px
        margin 10px
        font-size 13px
        img 
          border-radius 50%
        .personate
          color #444
          text-align center
        .post
          color #999
          text-align center
  .shouldLike
    .likeTitle
      font-size 16px
      font-weight 700
      padding-left 9px
      margin-top 20px
    .likeVideo
      padding-left 9px
      margin-top 15px
      li 
        float left
        width 119.33px
        height 241px
        position relative
        img
          width 116.33px
          height 171.44px
        .LName
          width 108px
          height 20px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          font-size 15px
          color #444
        .Ldesc
          width 108px
          height 20px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          font-size 13px  
          color #999
        .Ljuji
          font-size 12px 
          color #fff
          position absolute
          right 10px
          top 152px
        .watch
          font-size 12px
          position absolute
          right 10px
          top 8px
          color #fff
          opacity 1
          border-radius 3px
          background-color #444 
  .Vdbtn 
    float left
    background-color #f2f2f2
    width 95%
    height 45px
    margin 0 2.5%
    border-radius 5px
    position relative
    margin-bottom 10px
    .BtnName
      font-size 13px  
      color #000
      font-weight 400px
      position absolute
      top 50%
      left 40%
    img
      width 14px
      height 14px 
      position absolute
      top 60%
      left 55%  
  .advC
    img
      width 95%
      height 63px   
      border-radius 5px
      margin-top 10px
      padding 0 2.5%
  .Comment
    &-title
      padding-left 9px
      font-size 16px
      line-height 20px
      padding 16px 10px
    .input
      position relative
      width 100vw
      height 39px
      img
        position absolute
        width 35px
        height 35px
        padding-left 9px
      #CommentInput
        box-sizing border-box
        border 1px solid #e3e3e3
        border-radius 50px
        height 35px
        line-height 35px
        width 85%
        background #f5f5f5
        text-align center
        color #ccc
        font-size 12px
        position absolute
        left 50px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        padding 15px
</style>
