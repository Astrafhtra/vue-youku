<template>
  <div class="coName">
    <searchBox></searchBox>
  </div>
</template>

<script>
import searchBox from '@/components/search/searchBox'
export default {
  name: 'Header',
  components:{
    searchBox
  }
}
</script>

<style lang="stylus" scoped>
*
  z-index 1  
</style>
