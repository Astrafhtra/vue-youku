<template>
  <div class="sideBar" v-show="hideSideBar">
    <div class="container">
      <div class="Header">
        <img src="@/images/my.png" alt="">
        <div class="signOut">登出</div>
      </div>
      <div class="pindao">
        <img src="@/images/pindao.png" alt="" width="18px" height="18px">
        <div class="name">频道</div>
        <div class="jiantou">
          <img src="@/images/downjt.png" class="jiantou" alt="" width="18px" height="18px">
        </div>
      </div>
      <div class="bd">
        <ul>
          <li v-for="(item,index) in pingdao" :key="index">
            <a href="">{{item.name1}}</a>
            <span>|</span>
            <a href="">{{item.name2}}</a>
            <span>|</span>
            <a href="">{{item.name3}}</a>
          </li>
        </ul>
      </div>
      <div class="foot">
        <div class="subscription">
          <img src="@/images/sub.png" alt="" width="18px" height="18px">
          <span>我的订阅</span>
        </div>
        <div class="view">
          <img src="@/images/view.png" alt="" width="18px" height="18px">
          <span>观看记录</span>
        </div>
      </div>
    </div>
    <div class="sidebar_mask" @click="showsidebar"></div>
  </div>
</template>

<script>
import { mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  data() {
    return {
      pingdao:[
        {
          name1:'首页',
          name2:'电视',
          name3:'电影'
        },
        {
          name1:'综艺',
          name2:'音乐',
          name3:'动漫'
        },
        {
          name1:'会员',
          name2:'资讯',
          name3:'纪实'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'hideSideBar'
    ])
  },
  methods: {
    showsidebar(){
      this.$store.dispatch('setHideBar',false)
    }
  },
}
</script>

<style lang="stylus" scoped>
  .sideBar
    overflow auto
    transition all 0.3s ease
    .container
      z-index 1002
      width 290px 
      height 100%
      background-color #fff 
      position absolute
      left 0
      top 0
      .Header
        padding 15px
        overflow hidden
        position relative
        border-bottom 1px solid #ccc
        img 
          width 40px
          height 40px
          display block
          float left
          margin-left 9px
        .signOut
          font-size 15px
          color #666
          position absolute
          top 50%
          transform translateY(-50%)
          right 15px
      .pindao
        position relative
        display flex
        padding 15px
        .name
          padding-left 25px
          font-size 15px
        .jiantou
          position absolute
          right 15px
      .bd
        padding 20px
        // border-bottom 1px solid #ebebeb
        border-top 1px solid #ebebeb
        ul 
          li
            margin-bottom 20px
            a
              color #323232
              text-decoration none 
              font-size 15px
              padding-right 40px
            span 
              opacity 0.2
      .foot
        padding-top 30px
        border-top 1px solid #ccc
        span 
          color #333
          font-size 15px
          margin-left 15px
        .subscription
          padding-bottom 30px
          img 
            padding-left 15px
        .view
          padding-top 30px
          padding-bottom 30px
          border-top 1px solid #ccc
          border-bottom 1px solid #ccc
          img 
            padding-left 15px
    .sidebar_mask
      position fixed
      width 100%
      margin 0 auto
      top 0
      left 0
      bottom 0
      right 0
      z-index 10
      background rgba(0, 0, 0, 0.4)
</style>
