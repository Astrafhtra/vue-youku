import { mapGetters,mapMutations,mapActions } from 'vuex';

export const MiXin = {
  computed: {
    ...mapGetters([
      'DisplayList',
      'total',
    ]),
  },
  methods:{
    Search () {
      this.setShowSearchList(true)
    },
    disPlayTotal () {
      this.setShowTotalList(true)
    },
    hideTotal () {
      this.setShowTotalList(false)
    },
    ...mapActions([
      'setShowSearchList',
      'setShowTotalList'
    ])
  },
}

export const ListMixin = {
  computed: {
    ...mapGetters([
      // 'DisplayList',
      'whenSearch',
      'hotkey',
      'searchValue'
    ])
  },
  methods: {
    Close() {
      // this.$store.dispatch('setShowSearchList',false)
      this.setShowSearchList(false)
    },
    ...mapActions([
      'setShowSearchList'
    ])
  },

}