import * as types from '../types' 

const state = {
  DisplayList: false,
  total: false,
  whenSearch: '',
  hotkey: '长安十二时辰',
  searchValue: '',
  DisplayHeader:true,
  hideSideBar:true,
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
  },
  [types.GET_SEARCH_VALUE] (state,status) {
    state.searchValue = status
  },
  [types.HIDE_SIDEBAR] (state,status) {
    state.hideSideBar = status
  },
  [types.SHOW_HEADER] (state,status) {
    state.hideSideBar = status
  },
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
  },
  getSearchValue ({ commit },status) {
    commit(types.GET_SEARCH_VALUE,status)
  },
  setHideBar({ commit },status){
    commit(types.HIDE_SIDEBAR,status)
  }
}

const getters = {
  DisplayList: state => state.DisplayList,
  total: state => state.total,
  whenSearch: state =>{
    if (state.searchValue.length == 0) {
      return state.whenSearch = false
    } else {
      return state.whenSearch = true
    }
  },
  hotkey: state => {
    if (state.searchValue.length == 0) {
      return state.hotkey
    } else {
      return state.searchValue
    }
  },
  searchValue: state => state.searchValue,
  DisplayHeader:state=>state.DisplayHeader,
  hideSideBar:state=>state.hideSideBar
}

export default {
  state,
  mutations,
  actions,
  getters
}