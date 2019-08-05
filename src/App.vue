<template>
  <div class="wrapper">
    <div class="header" v-show="DisplayHeader">
      <v-header></v-header>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import header from "@/components/Header/header";
// import BScroll from "better-scroll";
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      // DisplayHeader:true
    };
  },
  components: {
    "v-header": header
  },
  computed: {
    ...mapGetters([
      'DisplayHeader'
    ])
  },
  created() {
    this.$store.dispatch('setShowHeader',true)
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  /* top: 0;left: 0; */
}
ul li {
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
.header{
  z-index: 1
}
</style>
