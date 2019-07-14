<template>
  <div class="slide">
    <swiper :options="swiperOption">
      <swiperSlide  v-for="(item,index) in imgArray" :key="index" >
        <img :src="item.url" alt="" width="375px" height="188px">
      </swiperSlide>
    </swiper>
    <div class="bar">
      <span
        v-for="(item, index) in imgArray"
        :key="index"
        :class="{ 'active':index===mark }"
        @click="change(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption:{
        autoplay:3000,
        loop:true,
        speed:1000
      },
      mark: 0,
      timer: null,
      imgArray: [
        {
          url:
            "https://liangcang-material.alicdn.com/prod/upload/a1faf696c14942fe8d69de6326c47149.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1"
        },
        {
          url:
            "https://liangcang-material.alicdn.com/prod/upload/52ea7e99acc44eadb1261d4f7a6e360e.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1"
        },
        {
          url:
            "https://ykimg.alicdn.com/develop/image/2019-07-05/6c01ef364345a0d653c16e423b84711e.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1"
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    autoplay() {
      this.mark++;
      if (this.mark === 3) {
        this.mark = 0;
      }
    },
    play() {
      this.timer = setInterval(this.autoplay, 2500);
    },
    change(i) {
      this.mark = i;
    },
    stop() {}
  },
  created() {
    this.play();
  }
};
</script>
  
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.slide {
  width: 100%;
  height: 188px;
  margin: 0 auto;
  margin-top: 0;
  overflow: hidden;
  position: relative;
}
.fade-enter-active{

}
.slideshow {
  width: 375px;
  height: 188px;
}
li {
  position: absolute;
}
.bar {
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
}
.bar span {
  width: 16px;
  height: 3px;
  border: 1px solid;
  background: #666666;
  display: inline-block;
  border-radius: 5px;
  outline: none;
  margin: 5px;
  opacity: 0.3;
  cursor: pointer;
}
.active {
  background: #ffffff !important;
  opacity: 1;
}
</style>
