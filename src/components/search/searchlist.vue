<template>
  <div class="hot-serach-container" >
    <div class="tip" v-show="!whenSearch">
      <i class="hot"></i>
      <span>大家都在搜</span>
    </div>
    <ul class="hot-serach-ul">
      <li>
        <div class="hot-container">
          <i v-show="!whenSearch" class="hot-common-tip hot-tip hot-1-tip">1</i>
          <div class="search-res-name">{{hotkey}}</div>
        </div>
      </li>
      <li>
        <div class="hot-container">
          <i v-show="!whenSearch" class="hot-common-tip hot-tip hot-2-tip">2</i>
          <div class="search-res-name">{{hotkey}}</div>
        </div>
      </li>
      <li>
        <div class="hot-container">
          <i v-show="!whenSearch" class="hot-common-tip hot-tip hot-3-tip">3</i>
          <div class="search-res-name">{{hotkey}}</div>
        </div>
      </li>
      <li>
        <div class="hot-container">
          <i v-show="!whenSearch" class="hot-common-tip hot-tip hot-4-tip">4</i>
          <div class="search-res-name">{{hotkey}}</div>
        </div>
      </li>
      <li>
        <div class="hot-container">
          <i v-show="!whenSearch" class="hot-common-tip hot-tip hot-4-tip">5</i>
          <div class="search-res-name">{{hotkey}}</div>
        </div>
      </li>
    </ul>
    <div class="yk-hot-close" @click="Close">关闭</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      hotkey: '长安十二时辰'
    }
  },
  computed: {
    ...mapGetters([
      // 'DisplayList',
      'whenSearch'
    ])
  },
  methods:{
    Close () {
      this.$store.dispatch('setShowSearchList',false)
    }
  },
}
</script>


<style scoped>
.hot-serach-container{
  display: block;
  position: absolute;
  width: 100%;
  z-index: 999;
  background: #fff;
}
.tip{
  height: 1.6rem;
  line-height: 1.6rem;
  padding: 0.6667rem;
  font-size: 0.9333rem;
  font-style: normal;
  color:#909090;
}
.hot{
  float: left;
  margin-right: 0.333rem;
  margin-top: 0.333rem;
  width: 0.2rem;
  height: 0.8rem;
  background:#3593e3;
  vertical-align: top;
}
.hot-serach-ul li{
  display: flex;
  align-items: center;
  padding: 0.66rem;
}
.hot-container{
  display: flex;
  align-items: center;
  height: 1.6rem;
}
.hot-common-tip{
  line-height: 100%;
  font-size: 0.9333rem;
}
.hot-container i{
  display: flex;
  align-items: center;
  justify-content: center
}
.hot-tip{
  float: left;
  margin-right: 0.6666rem;
  width: 0.8666rem;
  height: 100%;
  color: #ffffff;
  text-align: center;
  font-style: normal;
  font-family: serif;
}
.hot-1-tip{
  background-color: #ff3c3c;
}
.hot-2-tip{
  background-color: #ff733c;
}
.hot-3-tip{
  background-color: #ffa63c;
}
.hot-4-tip{
  background-color: #909090;
}
.yk-hot-close{
  width: 100%;
  height: 2.9333rem;
  line-height: 2.9333rem;
  background: #f5f5f5;
  text-align: center;
  color:#222;
  font-size: 1rem;
}
</style>
