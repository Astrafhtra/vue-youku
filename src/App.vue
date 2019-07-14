<template>
  <div class="container">
    <div class="header" v-show="Show">
      <v-header></v-header>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import header from '@/components/Header/header'
export default {
  data() {
    return {
      Show:true
    }
  },
  components:{
    "v-header":header
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
  /* top: 0;left: 0; */
}
ul li{
  list-style: none;
}
.tab {
  width: 100%;
  height: 40px;
  top: 50px;
  display: flex;
}
.tab-item {
  flex: 1;
  text-decoration: none;
}
.router-link-exact-active {
  color: rgb(240, 20, 20);
}
</style>
