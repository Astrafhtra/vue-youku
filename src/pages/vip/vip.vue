<template>
  <div @click="show">
    开通会员
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'DisplayHeader'
    ])
  },
  methods: {
    show(){
      this.$store.dispatch('setShowHeader',false)
      this.$router.push('vip-pay')
    }
  }
}
</script>

<style>

</style>
