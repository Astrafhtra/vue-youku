<template>
  <div class="slide">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgArray" :key="index">
          <img :src="item.url" alt width="375px" height="188px" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
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
   
  },
  created() {
  
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });
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
  height: 100%;
}
.active {
  background: #ffffff !important;
  opacity: 3;
}
.swiper-container {
  width: 100%;
  height: 188px;
  float: left;
}
</style>
