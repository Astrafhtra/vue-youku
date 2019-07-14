import * as types from '../types' 

const state = {
  DisplayList: false,
  total: false,
  whenSearch: false,
  DisplayHeader:true
}

const mutations = {
  [types.COM_SHOW_SEARCH_LIST] (state,status) {
    state.DisplayList = status
  },
  [types.SHOW_TOTAL_LIST] (state,status) {
    state.total = status
  },
  [types.SHOW_HEADER](state,status){
    state.DisplayHeader = status
  }
}

const actions = {
  setShowSearchList ({ commit },status) {
    commit(types.COM_SHOW_SEARCH_LIST,status)
  },
  setShowTotalList ({ commit },status) {
    commit(types.SHOW_TOTAL_LIST,status)
  },
  setShowHeader ({ commit },status){
    commit(types.SHOW_HEADER,status)
  }
}

const getters = {
  DisplayList: state => state.DisplayList,
  total: state => state.total,
  whenSearch: state =>state.whenSearch,
  DisplayHeader:state=>state.DisplayHeader
}

export default {
  state,
  mutations,
  actions,
  getters
}