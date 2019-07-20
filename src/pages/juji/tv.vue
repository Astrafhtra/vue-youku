<template>
  <div class="container">
    <v-swiper></v-swiper>
    <v-content></v-content>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Swiper from "@/components/swiper/swiper";
import content from '@/components/tv/index'
export default {
  data() {
    return {
      
    }
  },
  components:{
    "v-swiper": Swiper,
    "v-content":content
  }
};
</script>

<style>
</style>
