<template>
<div class="yk-header"  v-show="DisplayHeader">
  <div class="yk-header-container">
      <img src="@/images/logo2.png" alt="" class="icon">
    <div class="yk-search-container">
      <!-- 输入框只要输入的值变化了就会触发 input 调用 search 数据实时获取通过 event.currentTarget.value 获取到 -->
      <input type="text" id="yk-search-input" placeholder="aaaaaa" @click="Search"  @keyup.enter="search" @input="search($event)" />
      <img src="https://img.alicdn.com/tfs/TB15zSoX21TBuNjy0FjXXajyXXa-48-48.png" alt="" class="search-logo">
    </div>
    <div @click="Displayheader">
    <router-link to="/user" >
      <img src="@/images/my.png" alt="" class="userIcon">
    </router-link>
    </div>
  </div>
  <search-list v-show="DisplayList"></search-list>
  <div class="yk-nav">
    <ul class="total-nav" v-show="!total">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/tv">剧集</router-link>
      </li>
      <li>
        <router-link to="/movie">电影</router-link>
      </li>
      <li>
        <router-link to="/zy">综艺</router-link>
      </li>
      <li>
        <router-link to="/vip">会员</router-link>
      </li>
      <li>
        <img src="https://img.alicdn.com/tfs/TB18vFaXGmWBuNjy1XaXXXCbXXa-44-44.png" 
         class="nav-arrow "
        
        @click="disPlayTotal"
        />
      </li>
      
    </ul>
    <ul class="total-nav" v-show="total">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/tv">剧集</router-link>
      </li>
      <li>
        <router-link to="/movie">电影</router-link>
      </li>
      <li>
        <router-link to="/zy">综艺</router-link>
      </li>
      <li>
        <router-link to="/vip">会员</router-link>
      </li>
      <li>
        <img src="https://img.alicdn.com/tfs/TB18vFaXGmWBuNjy1XaXXXCbXXa-44-44.png" 
         class="nav-arrow rota"
        
        @click="hideTotal"
        />
      </li>
      <li v-show="total">
        <router-link to="/music">音乐</router-link>
      </li>
      <li v-show="total">
        <router-link to="/cart">动漫</router-link>
      </li>
      <li v-show="total">
        <router-link to="/child">少儿</router-link>
      </li>
    </ul>
  </div>
</div>
  
  
</template>

<script>
import Vue from 'vue'
import searchList from './searchlist'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      // DisplayHeader:true
    }
  },
  computed: {
    ...mapGetters([
      'DisplayList',
      'total',
      'DisplayHeader'
    ]),
  },
  methods:{
    Search () {
      this.$store.dispatch('setShowSearchList',true)
    },
    disPlayTotal () {
      this.$store.dispatch('setShowTotalList',true)
    },
    hideTotal () {
      this.$store.dispatch('setShowTotalList',false)
    },
    search(event){
	    console.log(event.currentTarget.value)
    },
    Displayheader(){
      this.$store.dispatch('setShowHeader',false)
    }
  },
  created() {
  },
  components:{
    'search-list': searchList
  },
}
</script>

<style scoped>
.yk-header-container{
  position: relative;
  width: 100%;
  height: 2.9333rem;
}
.icon{
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
  left: 1rem;
  width: 84px;
  height: 16.5px;
}
.yk-search-container{
  position: absolute;
  right: 3.0666rem;
  width: calc(-150px + 100%);
  /* width: 100%; */
  height: 2rem;
  top: 50%;
  transform: translate(0,-50%);
}
#yk-search-input{
  position: absolute;
  width: 100%;
  height: 100%;
  border: 0 solid transparent;
  border-radius: 100px;
  font-family: "Microsoft YaHei",SimHei,helvetica,arial,verdana,tahoma,sans-serif;
  font-size: 14px;
  background: rgba(0,0,0,.06);
  text-indent: 15px;
  outline: 0
}
.search-logo{
  display: block;
  z-index: 99;
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
  width: 1.0666rem;
  height: 1.0666rem;
  right: 0.6667rem;
}
.userIcon{
  display: block;
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
  width: 1.4666rem;
  right: 0.666rem;
}

/* list */
.total-nav{
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.total-nav li{
  width: 2.1333rem;
  text-align: center;
  font-size: 1.0666rem;
  height: 2.6rem;
  line-height: 1.333rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  white-space: nowrap;
}
a{
  text-decoration:none;
  color: #000;
}
.router-link-exact-active{
  color:blue
}
.nav-arrow{
  width: 1.4666rem;
  height: 1.4666rem;
}
.rota{
  transform: rotate(180deg);
}

</style>
